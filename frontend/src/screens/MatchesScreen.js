import React from 'react';
import Match from '../components/Match';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Filter from '../components/Filter';
const MatchesScreen = ({ matches, deleteMatch, setCurrent }) => {
  const history = useHistory();
  return (
    <>
      <Button
        className="myBtn"
        variant="success"
        onClick={() => history.push('/matches/add')}
      >
        Add Match
      </Button>
      {matches.map((match) => (
        <Match
          match={match}
          deleteMatch={deleteMatch}
          setCurrent={setCurrent}
          key={match._id}
        />
      ))}
    </>
  );
};

export default MatchesScreen;
