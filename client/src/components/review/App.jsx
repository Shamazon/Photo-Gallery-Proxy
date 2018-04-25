import React from 'react';
import ReactDOM from 'react-dom';
import style from './dist/style/style.css'
import Stars from './Stars.jsx';
import RecentReviewList from './RecentReviewList.jsx';
import ReviewList from './ReviewList.jsx';
import KeywordList from './KeywordList.jsx';


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

  getReviews () {
    let product = this.props.product ? this.props.product : 0; 
    $.ajax({
      method: 'GET',
      url: `/reviews/${product}`,
      dataType: 'json',
      success: (data, status) => {
        if(status === 'success') {
          this.setState({reviews: data});
        } else {
          this.setState({reviews: {recent: [], top: [], count: []}});
        }
      }
    })
  }

  render() {
    return (
        <div className={style.appContainer}>
            <h2>Customer Reviews</h2>
            <div className={style.mainReviews}>
                <Stars numReviews={this.state.reviews.count}/>
                <KeywordList />
                <ReviewList reviews={this.state.reviews.top} />
            </div>
            <div className={style.recentReviews}>
                <RecentReviewList reviews={this.state.reviews.recent} />
            </div>
            <div>
              <a className={style.underline}>See all {this.state.reviews.count} customer reviews</a>
              <button className={style.writeReviewButton}>Write a Customer Review</button>
            </div>
        </div>

    )   
  }
}

// ReactDOM.render(React.createElement(App), document.getElementById('app'));

export default App;