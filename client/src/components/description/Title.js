
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    return (
      <span>
        <div id="brandNameInTitle" className="brand">
          <a href="#">{this.props.brandName}</a>
        </div>
        <div id="productNameInTitle" className="Title">
          {this.props.titleName}
        </div>
      </span>
    );
  }
}

Title.propTypes = {
  brandName: PropTypes.string.isRequired,
  titleName: PropTypes.string.isRequired,
};

export default Title;
