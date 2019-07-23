import React from 'react';

const Tile = (props) => { 
return (
  <div className="col-lg-3 col-sm-6 is-light-text mb-4">
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
  </div>
);
}

export default Tile; 