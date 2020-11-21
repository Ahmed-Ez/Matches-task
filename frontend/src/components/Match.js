import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Match = ({ match, deleteMatch, setCurrent }) => {
  const history = useHistory();
  const endDate = new Date(match.endTime);
  const startDate = new Date(match.startTime);
  return (
    <Card className="myCard">
      <Row>
        <Col>{match.league}</Col>
      </Row>
      <Row>
        <Col>
          <h3>{match.homeTeam}</h3>
        </Col>
        <Col>
          <h4>{match.homeTeamScore}</h4>
        </Col>
        <Col>
          <h2>-</h2>
        </Col>
        <Col>
          <h4>{match.awayTeamScore}</h4>
        </Col>
        <Col>
          <h3>{match.awayTeam}</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          {match.isActive
            ? 'Live Now'
            : new Date().getTime() > endDate.getTime()
            ? `Finished at ${endDate.toLocaleString()}`
            : `Starts at ${startDate.toLocaleString()}`}
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            className="myBtn"
            variant="info"
            onClick={() => {
              setCurrent(match);
              history.push(`/${match._id}`);
            }}
          >
            Edit
          </Button>
          <Button
            className="myBtn"
            variant="danger"
            onClick={() => deleteMatch(match._id)}
          >
            Delete
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default Match;
