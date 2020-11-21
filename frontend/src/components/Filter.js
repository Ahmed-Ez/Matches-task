import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
const Filter = ({ setFilteredMatches, filter, setFilter, filterHandler }) => {
  const onChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };
  return (
    <div className="filter">
      <Row>
        <Form.Control
          name="team"
          type="text"
          placeholder="Search Team"
          value={filter.team}
          onChange={onChange}
        />
      </Row>
      <Row>
        <Col>
          <Form.Control
            name="from"
            type="text"
            placeholder="From Date"
            value={filter.from}
            onChange={onChange}
          />
        </Col>
        <Col>
          <Form.Control
            name="to"
            type="text"
            placeholder="To Date"
            value={filter.to}
            onChange={onChange}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="info" onClick={filterHandler}>
            Apply filters
          </Button>
        </Col>
        <Col>
          <Button
            variant="info"
            onClick={() => {
              setFilteredMatches(null);
              setFilter({ team: '', from: '', to: '' });
            }}
          >
            Clear filters
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Filter;
