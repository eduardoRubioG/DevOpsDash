import React from 'react';
import './style.css';
import Navbar from './Components/Navbar.jsx';
import { Container } from 'react-bootstrap';
import ListTile from './Components/ListTile'
import * as Utils from './Utils/index'
import NumTile from './Components/NumTile';

require('dotenv').config();

function App() {
  return (
    <>
      <Navbar />
      <div> 
        <div className="container-fluid">
         <div className="card-columns">

          <ListTile 
            title="Open Pull Requests"
            tokens={["allconnext", "allconnext-wp", "allconnect.com-blog", "allconnect.com"]}
            util={ Utils.getPullRequestCount }
            refresh={30000}
            link="github.com/repos"
          />

          <ListTile
            title="CircleCI Repo Statuses"
            tokens={["allconnext", "allconnext-wp", "allconnect.com-blog", "allconnect.com"]}
            util={Utils.getCCIRepoStatus}
            refresh={30000}
            link="/circleci/repos"
          />

          <NumTile
            title="Allconnext Visitor Count"
            util={Utils.visitorCount}
            token="allconnext"
            refresh={10000}
            link="/googleanalytics/"
          />

          </div>
        </div>
      </div>
    </>

  );
}

export default App;
