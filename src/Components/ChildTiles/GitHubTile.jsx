import React from 'react'; 
import getPullRequestCount from "../../Utils/GitHubPullReqs";
const config = require("../../../src/config");

/**
 * This component will return a card with a list of requested pull requests and their 
 *  respective counts of open pull requests 
 * 
 *  Additionally, there will be pertienent links for these repos 
 */
class GitHubTile extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      info: [],
    }
  }
  componentDidMount () { 
    this.generateList();
  }

async generateList() { 
    this.props.repos.forEach(async (element) => {
      let newItem = { 
        prCount: await getPullRequestCount(element), 
        repoName: element,
      }
      this.setState({info: [...this.state.info, newItem]});
    });
  }

  render () { 
    return (
      <div className="card">
        <h4 className="card-header">
          Open Pull Requests
        </h4>
        <ul className="list-group list-group-flush">
          {this.state.info.map(item => 
            <li className="list-group-item list-group-flush" key={item.repoName}>
              {item.repoName}<span className="float-right">{item.prCount}</span>
            </li>)}
        </ul>
        <div className="card-footer">
          <a href={`${config.RV_GITHUB}`} target="_blank" className="card-link" rel="noopener noreferrer">Open Repos</a>
        </div>
      </div>
    );
  }
}

export default GitHubTile;