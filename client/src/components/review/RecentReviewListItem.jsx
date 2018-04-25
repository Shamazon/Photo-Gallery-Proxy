import React from 'react';
import UserInfo from './UserInfo.jsx';
import ReviewTitle from './ReviewTitle.jsx';
import ReviewBody from './ReviewBody.jsx';
import style from './dist/style/style.css'

const RecentReviewListItem = (props) => {
    return (
        <div className={style.recentReviewContainer}>
            <UserInfo />
            <ReviewTitle review={props.review} />
            <ReviewBody body={props.review.body} />
        </div>
    )
}

export default RecentReviewListItem;