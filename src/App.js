import React from 'react';
import './style.css';
import Navbar from './Components/Navbar.jsx';
import Tile from './Components/Tile.jsx';
import { Container, Row } from 'react-bootstrap';
import TestJob from "./Jobs/testJob"
import TestTile from './Components/TestTile'
// import { Container, Nav } from "./Components/styled-components.js"


function App() {
  return (
      <>
        <Navbar />
        <Container className="container-fluid pr-5 pl-5 pt-5 pb-5">
          {/* This is the first row of the tiles of information */}
          <Row>
              <TestTile 
                TileTitle="GitHub Open Pull Requests"
                TileMessage="16"
              />
              <Tile
                TileJob={TestJob}
                TileTitle="Tile Two"
                TileMessage="This is"
              />
              <Tile
                TileTitle="Tile Three"
                TileMessage="This"
              />
            </Row>
            
          {/* this is the second row of information */}
          {/* etc etc ... */}

          <Row>
              <Tile 
                TileTitle="Tile One"
                TileMessage="This is information for the first tile"
              />
              <Tile
                TileTitle="Tile Two"
                TileMessage="This is information for the first tile"
              />
              <Tile
                TileTitle="Tile Three"
                TileMessage="This is information for the first tile"
              />
            </Row>

        </Container>
      </>
  );
}

export default App;
