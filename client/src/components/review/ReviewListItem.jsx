import React from 'react';
import UserInfo from './UserInfo.jsx';
import ReviewTitle from './ReviewTitle.jsx';
import ReviewBody from './ReviewBody.jsx'
import style from './dist/style/style.css'

var ReviewListItem = (props) => {
    return (
        <article className={style.mainReviewContainer}>
            <UserInfo />
            <ReviewTitle review={props.review} />
            <div>
                <span className={style.gray}>Color: {window.nouns[Math.floor(Math.random() * window.nouns.length)]}</span>
                <span className={style.seperator}>|</span>
                <span className={style.verified}>Verified Purchase</span>
            </div>
            
            <ReviewBody body={props.review.body} />
            
            <div className={`${style.helpful} ${style.gray}`}>
            <a className={style.underline}>Comment</a><span className={style.seperator}>|</span>
                <span>{props.review.helpful} people found this review helpful. Was it helpful to you?</span> 
                <button>Yes</button><button>No</button><a className={style.aSecondary}>Report Abuse</a>
            </div>
        </article>
    )
}

export default ReviewListItem;