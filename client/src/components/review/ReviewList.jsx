import React from 'react';
import ReviewListItem from './ReviewListItem.jsx'
import style from './dist/style/style.css'

const ReviewList = (props) => {
    return (
        <section>
            <h3>Top customer reviews</h3>
            {props.reviews.map((item, index) => <ReviewListItem review={item} key={index} />)}
        </section>
    )
}

export default ReviewList;