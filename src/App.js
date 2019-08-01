import React from 'react';
import './style.css';
import Navbar from './Components/Navbar.jsx';
import Tile from './Components/Tile.jsx';
import { Container } from 'react-bootstrap';
import TestJob from "./Utils/testJob"
import GitHubTile from './Components/ChildTiles/GitHubTile'
import CircleCITile from './Components/ChildTiles/CircleCITile'
require('dotenv').config();

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <div className="container-fluid">
         <div className="card-columns">
          {/* GitHub List of Pull Requests */}
          <div class="card">
            <h4 className="card-header">
              Open Pull Requests
            </h4>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Allconnext <span className="float-right">4</span></li>
              <li class="list-group-item">Allconnect.com <span className="float-right">9</span></li>
              <li class="list-group-item">Allconnext-WP <span className="float-right">11</span></li>
              <li class="list-group-item">Allconnect-Blog <span className="float-right">0</span></li>
            </ul>
            <div className="card-footer">
            <a href="#" class="card-link">Card link</a>
            </div>
          </div>

          {/* CCI Repo Statuses */}
          <div class="card">
            <h4 className="card-header">
              CircelCI Repo Statuses
            </h4>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Allconnext <span className="float-right">Success</span></li>
              <li class="list-group-item">Allconnect.com <span className="float-right">Success</span></li>
              <li class="list-group-item">Allconnext-WP <span className="float-right">Failure</span></li>
              <li class="list-group-item">Allconnext <span className="float-right">Success</span></li>
            </ul>
            <div className="card-footer">
            <a href="#" class="card-link">Card link</a>
            </div>
          </div>

          {/* Open Multidev Environments  */}
          <div class="card">
            <h4 className="card-header">
              Open Multidev Environments 
            </h4>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Allconnext <span className="float-right">6</span></li>
              <li class="list-group-item">Allconnect Connected Home Blog <span className="float-right">3</span></li>
              <li class="list-group-item">Allconnect-WP <span className="float-right">3</span></li>
              <li class="list-group-item">Move Connection Center <span className="float-right">2</span></li>
            </ul>
              <div className="card-footer">
                <a href="#" class="card-link">Card link</a>
              </div>          
            </div>
        </div>
      </div>

      

      <div className="container-fluid">
         <div className="card-columns">
          {/* GitHub List of Pull Requests */}
          {/* Visitor Count  */}
          <div class="card">
            <h4 className="card-header"> 
              Allconnext Visitor Count
            </h4>
            <div className="card-body">
              <h2 className="card-text">
                182.3k
              </h2>
            </div>
            <div className="card-footer">
            <a href="#" class="card-link">Card link</a>
            </div>
          </div>

          {/* CCI Repo Statuses */}
          {/* Visitor Count  */}
          <div class="card">
            <h4 className="card-header"> 
              Allconnext Visitor Count
            </h4>
            <div className="card-body">
              <h2 className="card-text">
                182.3k
              </h2>
            </div>
            <div className="card-footer">
            <a href="#" class="card-link">Card link</a>
            </div>
          </div>

          {/* Open Multidev Environments  */}
          {/* Visitor Count  */}
          <div class="card">
            <h4 className="card-header"> 
              Allconnext Visitor Count
            </h4>
            <div className="card-body">
              <h2 className="card-text">
                182.3k
              </h2>
            </div>
            <div className="card-footer">
            <a href="#" class="card-link">Card link</a>
            </div>
          </div>
        </div>
        </div>
      </Container>
      <nav className="navbar fixed-bottom is-dark is-light-text"></nav>
    </>

  );
}

export default App;
