import React from 'react';
import style from './dist/style/style.css'

const ReviewBody = (props) => {
    return (
        <div className={style.reviewBody}>
            {props.body.split('\n').map((text, index) => React.createElement('p',  { key: index }, text))}
        </div>
    )
}

export default ReviewBody;