import React from 'react';
import './style.css';
import Navbar from './Components/Navbar.jsx';
import Tile from './Components/Tile.jsx';
import { Container, Row } from 'react-bootstrap';
import GitHubTile from './Components/GitHubTile/GitHubTile'
// import { Container, Nav } from "./Components/styled-components.js"


function App() {
  return (
      <>
        <Navbar />
        <Container className="container-fluid pr-5 pl-5 pt-5 pb-5">
          {/* This is the first row of the tiles of information */}
          <Row>
              <GitHubTile 
                TileTitle="GitHub Open Pull Requests"
                TileMessage="16"
              />
              <Tile
                TileTitle="Tile Two"
                TileMessage="This is information for the first tile"
              />
              <Tile
                TileTitle="Tile Three"
                TileMessage="This is information for the first"
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
