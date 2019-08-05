import React from "react";
import PropTypes from "prop-types";
const config = require("../config");

class NumTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.state,
      util: this.props.state,
      link: this.props.state,
      info: null
    };
  }

  componentDidMount() {}

  getData() {}

  render() {
    return <div />;
  }
}

NumTile.propTypes = {
  /**
   * The card's title that will be displayed on the card header
   */
  title: PropTypes.string.isRequired,

  /**
   * ListCardTiles will optionally be able to host a link and maybe a popover at their footer
   * Dev is optionally able to pass a link through. If not, then no link will be displayed in the footer
   * If multiple links are provided, then a pop-over will be generated in the footer
   */
  link: PropTypes.oneOf([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
};

export default NumTile;
