import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import KeywordsFormat from '../KeywordsFormat';

const BibliographyFormat = ({ bib }) => {
    const {
        authors,
        title,
        journal,
        volume,
        issue,
        year,
        pages,
        notes,
        url,
        keywords,
    } = bib;
    return (
        <li>
            {`${authors}, `}
            <b>{`${title}, `}</b>
            <em>{`${journal}, `}</em>
            <span>{volume ? `Volume ${volume}` : null}</span>
            <span>{issue ? `, Issue ${issue}` : null}</span>
            <span>{pages ? `, ${pages}` : null}</span>
            {notes ? <span>{`, ${notes}`}</span> : null}
            <span>{year ? ` (${year}) ` : null}</span>
            {url === "#" ? null : (
                <a href={url} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
            )}
            <KeywordsFormat keywords={keywords} />
        </li>
    );
};

const JournalIssuesFormat = ({bib}) => {
    const {
        authors,
        title,
        journal,
        volume,
        issue,
        year,
        pages,
        keywords,
        publisher, 
        editors
    } = bib;

    return (
        <li>
            {`${authors}, `}
            <b>{`${title}, `}</b>
            <em>{`${journal}, `}</em>
            <span>{volume ? `Volume ${volume}` : null}</span>
            <span>{issue ? `, Issue ${issue}` : null}</span>
            <span>{pages ? `, Number of Pages: ${pages}` : null}</span>
            <span>{publisher ? `, ${publisher}` :  null}</span>
            <span>{year ? `, ${year}` : null}</span>
            <span>{editors ? `, Editors: ${editors}` : null}</span>
      
            <KeywordsFormat keywords={keywords} />
        </li>
    )
}

// const KeywordsFormat = ({ keywords }) => {
//     if (!keywords || keywords.length === 0) return;

//     return (
//         <div className={styles.keywords}>
//             <span>Keywords: </span>
//             {keywords.map((keywordId) => (
//                 <span className={styles.keyword}>
//                     {keywordsCollection[keywordId]}
//                 </span>
//             ))}
//         </div>
//     );
// };

export {BibliographyFormat, JournalIssuesFormat};
