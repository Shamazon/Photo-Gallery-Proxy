import React from 'react';
import style from './dist/style/style.css';

var CustomerImages = (props) => {
    return (
        <div>
            <h3>Customer images</h3>
            <div className={style.customerImages}>
                <img src='https://source.unsplash.com/random/71x71' />
                <img src='https://source.unsplash.com/random/71x71' />
                <img src='https://source.unsplash.com/random/71x71' />
                <img src='https://source.unsplash.com/random/71x71' />
            </div> 
            <a className={style.underline}>See all customer images</a>
        </div>
    )
}

export default CustomerImages;