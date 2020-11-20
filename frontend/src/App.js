import React, { useState, useEffect } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import matchServices from './services/matchServices';
import Match from './components/Match';
const App = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const getMatches = async () => {
      setMatches(await matchServices.getAllMatches());
    };
    getMatches();
  }, []);
  return (
    <Container fluid>
      <h1>Matches</h1>

      {matches.map((match) => (
        <Match match={match} />
      ))}
    </Container>
  );
};

export default App;
