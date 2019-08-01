import React from 'react';
import './style.css';
import Navbar from './Components/Navbar.jsx';
import Tile from './Components/Tile.jsx';
import { Container } from 'react-bootstrap';
import TestJob from "./Utils/GitHubPullReqs"
import GitHubTile from './Components/ChildTiles/GitHubTile'
import CircleCITile from './Components/ChildTiles/CircleCITile'
require('dotenv').config();

function App() {
  return (
    <>
      <Navbar />
      <div> {/*  Don't make this a container because the format won't work due to all the padding */}
        <div className="container-fluid">
         <div className="card-columns">
          {/* GitHub List of Pull Requests */}
          <GitHubTile repos={["allconnext", "allconnext-wp", "allconnect.com-blog", "allconnect.com"]}/>

          {/* CCI Repo Statuses */}
          <div className="card">
            <h4 className="card-header">
              CircelCI Repo Statuses
            </h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Allconnext <span className="float-right">Success</span></li>
              <li className="list-group-item">Allconnect.com <span className="float-right">Success</span></li>
              <li className="list-group-item">Allconnext-WP <span className="float-right">Failure</span></li>
              <li className="list-group-item">Allconnext <span className="float-right">Success</span></li>
            </ul>
            <div className="card-footer">
            <a href="#" className="card-link">Card link</a>
            </div>
          </div>

          {/* Open Multidev Environments  */}
          <div className="card">
            <h4 className="card-header">
              Open Multidev Environments 
            </h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Allconnext <span className="float-right">6</span></li>
              <li className="list-group-item">Allconnect Connected Home Blog <span className="float-right">3</span></li>
              <li className="list-group-item">Allconnect-WP <span className="float-right">3</span></li>
              <li className="list-group-item">Move Connection Center <span className="float-right">2</span></li>
            </ul>
              <div className="card-footer">
                <a href="#" className="card-link">Card link</a>
              </div>          
            </div>
        </div>
      </div>

      

      <div className="container-fluid">
         <div className="card-columns">
          {/* GitHub List of Pull Requests */}
          {/* Visitor Count  */}
          <div className="card">
            <h4 className="card-header"> 
              Allconnext Page Load Speed
            </h4>
            <div className="card-body">
              <h2 className="card-text">
                1.24s
              </h2>
            </div>
            <div className="card-footer">
            <a href="#" className="card-link">Card link</a>
            </div>
          </div>

          {/* CCI Repo Statuses */}
          {/* Visitor Count  */}
          <div className="card">
            <h4 className="card-header"> 
              Allconnext Visitor Count
            </h4>
            <div className="card-body">
              <h2 className="card-text">
                182.3k
              </h2>
            </div>
            <div className="card-footer">
            <a href="#" className="card-link">Card link</a>
            </div>
          </div>

          {/* Open Multidev Environments  */}
          {/* Visitor Count  */}
          <div className="card">
            <h4 className="card-header"> 
              Total Weekly Commits
            </h4>
            <div className="card-body">
              <h2 className="card-text">
                58
              </h2>
            </div>
            <div className="card-footer">
            <a href="#" className="card-link">Card link</a>
            </div>
          </div>
        </div>
        </div>
      </div>
      <nav className="navbar fixed-bottom is-dark is-light-text"></nav>
    </>

  );
}

export default App;
