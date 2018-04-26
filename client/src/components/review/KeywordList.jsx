import React from 'react';
import style from './dist/style/style.css';

const KeywordList = (props) => {
    
    let keywords = [];

    for(let i = 0; i < 3; i++){
        let row = [];
        for(let j = 0; j < 6; j++) {
            row.push(window.nouns[Math.floor(Math.random() * window.nouns.length)]);
        }
        keywords.push(row);
    }

    return (
        <section>
            <h3>Read reviews that mention</h3>
                {keywords.map((row, i) => 
                    <div key={i}>
                        {row.map((word, i) => <span className={style.keyword} key={i}>{word}</span>)}
                    </div>)}
        </section>
    )
}   

export default KeywordList;