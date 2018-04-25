import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Stock extends Component {
  render() {
    return (
      <div id="Stock">
        {this.props.renderInventory}
      </div>
    );
  }
}

/* Stretch: If Prime Render <b>Want It Day, ...? </b> Order within 20 hrs 3 mins */

Stock.propTypes = {
  renderInventory: PropTypes.node.isRequired,
};

export default Stock;
