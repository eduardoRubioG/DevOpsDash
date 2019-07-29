import React from 'react';
import { Container, Col } from 'react-bootstrap';

const Tile = (props) => { 
return (
  <Col className="col-lg-4 col-sm-6 is-light-text mb-4">
    <Container className="card grid-card is-card-dark">
     <Container className="card-heading">
      <Container className="is-dark-text-light letter-spacing text-small">
        {props.TileTitle}
      </Container>
     </Container>
     <Container className="card-value pt-4 text-x-large">
      <span className="text-large pr-1">
        {props.TileMessage}
      </span>
     </Container>
    </Container>
  </Col>
);
}

export default Tile; 