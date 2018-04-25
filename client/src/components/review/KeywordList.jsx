import React from 'react';

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
                {keywords.map((row, rIndex) => 
                    <div>
                        {row.map((word, index) => <span className={style.keyword}>{word}</span>)}
                    </div>)}
        </section>
    )
}   

export default KeywordList;