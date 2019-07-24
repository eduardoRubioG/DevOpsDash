import React from 'react';
import { Col } from 'react-bootstrap';

const Tile = (props) => { 
return (
  <Col className="col-lg-4 col-sm-6 is-light-text mb-4">
    <div className="card grid-card is-card-dark">
     <div className="card-heading">
      <div className="is-dark-text-light letter-spacing text-small">
        {props.TileTitle}
      </div>
     </div>
     <div className="card-value pt-4 text-x-large">
      <span className="text-large pr-1">
        {props.TileMessage}
      </span>
     </div>
    </div>
  </Col>
);
}

export default Tile; 