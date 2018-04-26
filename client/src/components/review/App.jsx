import React from 'react';
import ReactDOM from 'react-dom';
import Stars from './Stars.jsx';
import RecentReviewList from './RecentReviewList.jsx';
import ReviewList from './ReviewList.jsx';
import KeywordList from './KeywordList.jsx';
import axios from 'axios';
import './dist/style/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        reviews: {recent: [], top: [], count: []}
    }

    this.getReviews = this.getReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    const product = this.props.product ? this.props.product : 0;
    axios.get(`http://localhost:3005/reviews/${product}`).then((res) => {
      this.setState({ reviews: res.data });
    }).catch((err) => {
      this.setState({ reviews: { recent: [], top: [], count: [] } });
      throw err;
    });
  }

  render() {
    return (
        <div className="appContainer">
            <h2>Customer Reviews</h2>
            <div className="mainReviews">
                <Stars numReviews={this.state.reviews.count}/>
                <KeywordList />
                <ReviewList reviews={this.state.reviews.top} />
            </div>
            <div className="recentReviews">
                <RecentReviewList reviews={this.state.reviews.recent} />
            </div>
            <div>
              <a className="underline">See all {this.state.reviews.count} customer reviews</a>
              <button className="writeReviewButton">Write a Customer Review</button>
            </div>
        </div>

    )   
  }
}

export default App;