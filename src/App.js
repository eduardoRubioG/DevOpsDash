import React from 'react';
import './style.css';
import Navbar from './Components/Navbar.jsx';
import Tile from './Components/Tile.jsx';
import { Row } from 'react-bootstrap';
import TestJob from "./Utils/testJob"
import GitHubTile from './Components/ChildTiles/GitHubTile'
import CircleCITile from './Components/ChildTiles/CircleCITile'
require('dotenv').config();

function App() {
  return (
      <>
        <Navbar />
        <div className="container-fluid pr-5 pl-5 pt-5 pb-5">
          {/* This is the first row of the tiles of information */}
          <Row>
              <GitHubTile />
              <CircleCITile
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
        </div>
      </>
  );
}

export default App;
