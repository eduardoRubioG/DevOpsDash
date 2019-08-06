import React from 'react'; 
import PropTypes from 'prop-types'
const config = require("../config");

/**
 * This component will return a card with a list of requested pull requests and their 
 *  respective counts of open pull requests 
 * 
 *  Additionally, there will be pertienent links for these repos 
 */
class ListTile extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      title: this.props.title,
      util: this.props.util,
      tokens: this.props.tokens, 
      link: this.props.link,
      info: [],
    }
  }
  componentDidMount () { 
    this.generateList();
  }

  async generateList() { 
      this.state.tokens.forEach(async (element) => {
        let newItem = { 
          key: element,
          data: await this.state.util(element), 
        }
        this.setState({info: [...this.state.info, newItem]});
      });
    }

  render () { 
    return (
      <div className="card">
        <h4 className="card-header">{this.state.title}</h4>
        <ul className="list-group list-group-flush">
          {this.state.info.map(element => 
            <li className="list-group-item list-group-flush" key={`list-element-${element.key}`}>
              {element.key}<span className="float-right">{element.data}</span>
            </li>)}
        </ul>
        <div className="card-footer">
          <a href={`${config.RV_GITHUB}`} target="_blank" className="card-link" rel="noopener noreferrer">Open Repos</a>
        </div>
      </div>
    );
  }
}

ListTile.propTypes = { 
  /**
   * The card's title that will be displayed on the card header
   */
  title: PropTypes.string.isRequired,

  /** 
   * A function that the tile will use to generate data points to display
   *  eg. If a tile will display GitHub pull requests, then this function will generate the open pull request counts  
   */
  util: PropTypes.func.isRequired,

  /** 
   * A string list of all the queries the util function will use  
   * eg. If a tile will display GitHub pull requests, then this string array will be the name of all
   * the repos we want to get PRs for
   */
  tokens: PropTypes.arrayOf(PropTypes.string).isRequired,

  /**
   * ListCardTiles will optionally be able to host a link and maybe a popover at their footer
   * Dev is optionally able to pass a link through. If not, then no link will be displayed in the footer
   * If multiple links are provided, then a pop-over will be generated in the footer 
   */
  link: PropTypes.oneOf([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
}

export default ListTile;