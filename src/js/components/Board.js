import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Cell from 'components/Cell.js';

class Board extends React.Component {
  render() {
    return (
      <Grid>
        <Row className='show-grid'>
          <Col md='2'>
            <Cell value='1'/>
          </Col>
          <Col md='2'>
            <Cell value='1'/>
          </Col>
          <Col md='2'>
            <Cell value='1'/>
          </Col>
          <Col md='2'>
            <Cell value='1'/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Board;


