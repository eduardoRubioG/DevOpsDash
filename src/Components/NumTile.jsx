import React from 'react';
import PropTypes from 'prop-types';
const config = require("../config");

/**
 * This component will return a card with a list of requested pull requests and their 
 * respective counts of open pull requests 
 * 
 * Additionally, there will be pertinent links for these repos 
 */

class NumTile extends React.Component {
 interval_key;
 constructor(props) { 
   super(props); 
   this.state = { 
    title: this.props.title,
    util: this.props.util, 
    link: this.props.link, 
    refresh: this.props.refresh, 
    info: null,
   }
 }

 componentDidMount () { 
  this.generateData();
 }

 componentWillUnmount () { 
   clearTimeout(this.interval_key);
 }

 async generateData () { 
   const card_data = { data: await this.state.util() };
   this.setState({ info: card_data });
   this.interval_key = setTimeout(this.generateData.bind(this), this.state.refresh);
 }

  render () { 
    return (
      <div className="card">
        <h4 className="card-header">
          {this.state.title}
        </h4>
        <div className="card-body">
          <h2 className="card-text">
            {this.state.info ? this.state.info : `...`}
          </h2>
        </div>
        <div className="card-footer">
          <a href={this.state.link ? this.state.link : "#"} className="card-link">Card Link</a>
        </div>
      </div>
    );
  }
}

NumTile.propTypes = { 
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
   * ListCardTiles will optionally be able to host a link and maybe a popover at their footer
   * Dev is optionally able to pass a link through. If not, then no link will be displayed in the footer
   * If multiple links are provided, then a pop-over will be generated in the footer 
   */
  link: PropTypes.oneOf([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

  /**
   * This is the desired rate for a particular instance of the tile. 
   * e.g. A refresh rate of 5000 means the tile refreshes itself every 5 seconds 
   */
  refresh: PropTypes.number.isRequired,
}

export default NumTile; 