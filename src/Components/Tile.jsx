import React from 'react';
import { Container, Col } from 'react-bootstrap';
// import testJob from "../Jobs/testJob"

class Tile extends React.Component {

 constructor(props) { 
   super(props); 
   const state = { 
     // Something
   }
 }

 componentDidMount () { 
   if( this.props.TileJob ) this.props.TileJob();
 }

  render () { 
    return (
      <Col className="col-lg-4 col-sm-6 is-light-text mb-4">
        <Container className="card grid-card is-card-dark">
         <Container className="card-heading">
          <Container className="is-dark-text-light letter-spacing text-small">
            {this.props.TileTitle}
          </Container>
         </Container>
         <Container className="card-value pt-4 text-x-large">
          <span className="text-large pr-1">
            {this.props.TileMessage}
          </span>
         </Container>
        </Container>
      </Col>
    );
  }
}

export default Tile; 