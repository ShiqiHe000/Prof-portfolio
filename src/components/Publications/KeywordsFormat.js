import React from 'react'
import styles from "./Bibliography.module.scss";
import { keywords as keywordsCollection } from "./publicationList";



const KeywordsFormat = ({ keywords }) => {
    if (!keywords || keywords.length === 0) return;

    return (
        <div className={styles.keywords}>
            <span>Keywords: </span>
            {keywords.map((keywordId) => (
                <span className={styles.keyword} key={keywordId}>
                    {keywordsCollection[keywordId]}
                </span>
            ))}
        </div>
    );
};
export default KeywordsFormat
