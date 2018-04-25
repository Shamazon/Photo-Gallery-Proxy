import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomerReviews extends Component {
  render() {
    return (
      <div id="customerReviews">
        {/* create a function that creates dynamic Classnames for astar */}
        <div
          id="averageCustomerReviewImage"
          className={`icon-star astar-${this.props.starIcon} amazon-icon`}
          aria-label={this.props.averageStars}
          title={`${this.props.averageStars} out of 5 stars`}
        />
        <div id="iconDropDownHover" className="dropDown amazon-icon" />
        <span id="totalReviews" className="fivepxLeft">
          <a href="#">{this.props.totalStars} customer reviews</a>
        </span>
      </div>
    );
  }
}

CustomerReviews.propTypes = {
  starIcon: PropTypes.string.isRequired,
  averageStars: PropTypes.string.isRequired,
  totalStars: PropTypes.number.isRequired,
};

export default CustomerReviews;
