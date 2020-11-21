import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import matchServices from './services/matchServices';
import MatchesScreen from './screens/MatchesScreen';
import MatchScreen from './screens/MatchScreen';
import Filter from './components/Filter';

const App = () => {
  const [matches, setMatches] = useState([]);
  const [current, setCurrent] = useState(null);
  const [filter, setFilter] = useState({ team: '', from: '', to: '' });
  const [filteredMatches, setFilteredMatches] = useState(null);

  useEffect(() => {
    const getMatches = async () => {
      const newMatches = await matchServices.getAllMatches();
      setMatches(newMatches);
    };
    getMatches();
  }, []);

  const deleteMatch = async (id) => {
    const msg = await matchServices.deleteMatch(id);
    const newState = matches.filter(
      (match) => match._id.toString() !== id.toString()
    );
    setMatches(newState);
  };

  const addMatch = async (match) => {
    const res = await matchServices.addMatch(match);
    const newState = matches.concat(res);
    setMatches(newState);
  };

  const editMatch = async (match) => {
    const res = await matchServices.editMatch(match);
    const newState = matches.map((match) =>
      match._id === res._id ? res : match
    );
    setMatches(newState);
  };

  const filterHandler = () => {
    let filtered = [...matches];
    if (filter.team) {
      filtered = filtered.filter(
        (match) =>
          match.homeTeam.toLowerCase().includes(filter.team.toLowerCase()) ||
          match.awayTeam.toLowerCase().includes(filter.team.toLowerCase())
      );
    }
    if (filter.from) {
      filtered = filtered.filter(
        (match) =>
          new Date(match.startTime).getTime() >= new Date(filter.from).getTime()
      );
    }

    if (filter.to) {
      filtered = filtered.filter(
        (match) =>
          new Date(match.startTime).getTime() < new Date(filter.to).getTime()
      );
    }
    setFilteredMatches(filtered);
    console.log('at the end', filtered);
  };

  return (
    <Router>
      <Container fluid>
        <Route path="/" exact>
          <h1>Matches</h1>
          <Filter
            matches={matches}
            setFilteredMatches={setFilteredMatches}
            filteredMatches={filteredMatches}
            filter={filter}
            setFilter={setFilter}
            filterHandler={filterHandler}
          />
          <MatchesScreen
            matches={filteredMatches ? filteredMatches : matches}
            deleteMatch={deleteMatch}
            setCurrent={setCurrent}
            filteredMatches={filteredMatches}
            setFilteredMatches={setFilteredMatches}
          />
        </Route>

        <Route
          path="/matches/add"
          render={(props) => (
            <MatchScreen
              {...props}
              matches={matches}
              text={'Add New Match'}
              onSubmit={addMatch}
            />
          )}
        />
        <Route
          path="/:id"
          exact
          render={(props) => (
            <MatchScreen
              {...props}
              matches={matches}
              text={'Edit Match'}
              onSubmit={editMatch}
              current={current}
            />
          )}
        />
      </Container>
    </Router>
  );
};

export default App;
