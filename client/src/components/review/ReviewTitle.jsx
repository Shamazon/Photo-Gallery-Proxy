import React from 'react';
import style from './dist/style/style.css';
import moment from 'moment';

var ReviewTitle = (props) => {

    var stars = [];
    for(var i = 0; i < 5; i++){
        if(props.review.star_rating >= i) {
            stars.push(<img className={style.star} key={i} src='./img/fullstar.png' />)
        } else {
            stars.push(<img className={style.star} key={i} src='./img/emptystar.png' />)
        }
    }

    return (
        <div>
            <span>{stars}</span>
            <a className={`${style.reviewTitle} ${style.underline}`}>{props.review.title}</a>   
            
            <div className={style.gray}>
                {moment().subtract(1, 'years') < moment(props.review.date) ?
                 moment(props.review.date).fromNow(): 
                 moment(props.review.date).format('MMMM Do YYYY') 
                }</div>
        </div>
    )
}

export default ReviewTitle;