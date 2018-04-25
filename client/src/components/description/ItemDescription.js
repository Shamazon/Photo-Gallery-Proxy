import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ItemDescription extends Component {
  render() {
    return (
      <div id="ItemDescription">
        <ul>
          {this.props.array.map(param => <li>{param}</li>)
             }
        </ul>
      </div>
    );
  }
}

ItemDescription.propTypes = {
  array: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ItemDescription;

