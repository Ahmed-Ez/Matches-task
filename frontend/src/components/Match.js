import React, { Fragment } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Match = ({ match }) => {
  const date = new Date(match.startTime);
  console.log(date.getTime() - new Date().getTime());
  return (
    <Card>
      <Row>
        <Col>
          {match.league} {date.toLocaleString()}
        </Col>
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
            : new Date().getTime() > date.getTime()
            ? 'Finished'
            : date.toLocaleString()}
        </Col>
      </Row>
    </Card>
  );
};

export default Match;
