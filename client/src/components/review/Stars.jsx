import React from 'react';
import style from './dist/style/style.css'

const Stars = (props) => {
    let stars = [];
    var numStars = [60, 10, 5, 5, 20];
    for(var i = 0; i < 5; i++){
        stars.push(<img className={style.star} src='./img/fullstar.png' />)
    }

   return (
        <section>
            <span className={style.starRating}>
            {stars}
            </span>
            <a className={style.numReviews}>{props.numReviews}</a>
            
            <div><a> 5 out of 5 stars </a></div>
            <div className={style.starGridContainer}>
                <div className={style.starBreakdown}>
                    <div><a>5 star</a>
                        <span className={style.starBar}></span>
                    <a>{numStars[0]}%</a></div>
                    <div><a>4 star</a>
                        <span className={style.starBar}></span>
                    <a>{numStars[1]}%</a></div>
                    <div><a>3 star</a>
                        <span className={style.starBar}></span>
                    <a>{numStars[2]}%</a></div>
                    <div><a>2 star</a>
                        <span className={style.starBar}></span>
                    <a>{numStars[3]}%</a></div>
                    <div><a>1 star</a>
                        <span className={style.starBar}></span>
                    <a>{numStars[4]}%</a></div>
                </div>

                <div className={style.shareReview}>
                    Share your thoughts with other customers
                    <button className={style.writeReviewButton}>Write a Customer Review</button>
                </div>
            </div>
        <div><a className={style.underline}>See all {props.numReviews} customer reviews</a></div>
        </section>
    )
}

export default Stars;