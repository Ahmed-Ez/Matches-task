import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const MatchScreen = ({ text, onSubmit, current }) => {
  const [newMatch, setMatch] = useState({});
  const history = useHistory();

  useEffect(() => {
    if (current) setMatch(current);
    else
      setMatch({
        homeTeam: '',
        awayTeam: '',
        homeTeamScore: 0,
        awayTeamScore: 0,
        startTime: '',
        endTime: '',
        league: '',
        duration: 0,
        isActive: false,
      });
  }, []);

  const onChange = (e) => {
    setMatch({ ...newMatch, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newMatch);
    history.push('/');
  };
  return (
    <Container>
      <h3>{text}</h3>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="homeTeam">
              <Form.Label>Home Team</Form.Label>
              <Form.Control
                name="homeTeam"
                type="text"
                placeholder="Home Team"
                value={newMatch.homeTeam}
                onChange={onChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="homeTeamScore">
              <Form.Label>HomeTeamScore</Form.Label>
              <Form.Control
                name="homeTeamScore"
                type="number"
                placeholder="HomeTeam Score"
                value={newMatch.homeTeamScore}
                onChange={onChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="awayTeam">
              <Form.Label>away Team</Form.Label>
              <Form.Control
                name="awayTeam"
                type="text"
                placeholder="away Team"
                value={newMatch.awayTeam}
                onChange={onChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="awayTeamScore">
              <Form.Label>awayTeamScore</Form.Label>
              <Form.Control
                name="awayTeamScore"
                type="number"
                placeholder="awayTeam Score"
                value={newMatch.awayTeamScore}
                onChange={onChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="startTime">
              <Form.Label>Start Time</Form.Label>
              <Form.Control
                name="startTime"
                type="text"
                placeholder="start Time"
                value={
                  current
                    ? new Date(newMatch.startTime).toLocaleString()
                    : newMatch.startTime
                }
                onChange={onChange}
              />
              <small className="form-text text-muted">
                Enter the date following MM/DD/YYYY HH:MM format
              </small>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="endTime">
              <Form.Label>End Time</Form.Label>
              <Form.Control
                name="endTime"
                type="text"
                placeholder="End Time"
                value={
                  current
                    ? new Date(newMatch.endTime).toLocaleString()
                    : newMatch.endTime
                }
                onChange={onChange}
              />
              <small className="form-text text-muted">
                Enter the date following MM/DD/YYYY HH:MM format
              </small>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="league">
              <Form.Label>League</Form.Label>
              <Form.Control
                name="league"
                type="text"
                placeholder="League"
                value={newMatch.league}
                onChange={onChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="duration">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                name="duration"
                type="number"
                placeholder="Duration in minutes"
                value={newMatch.duration}
                onChange={onChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="inActive">
              <Form.Label>Is Active </Form.Label>
              <Form.Control
                name="isActive"
                as="select"
                value={newMatch.isActive}
                onChange={onChange}
              >
                <option>true</option>
                <option>false</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default MatchScreen;
