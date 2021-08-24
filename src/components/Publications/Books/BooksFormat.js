import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import KeywordsFormat from "../KeywordsFormat";
import styles from "../Bibliography.module.scss";

const BooksFormat = ({ bib, bookCoverList, index }) => {
    const {
        authors,
        title,
        edition,
        editors,
        publisher,
        address,
        year,
        pages,
        url,
        keywords,
    } = bib;
    return (
        <li className={styles.bookGrid}>
            <div>
                {`${authors}, `}
                <b>{`${title}, `}</b>
                <span>{edition ? `Edition ${edition}` : null}</span>
                <span>{pages ? `, Number of Pages: ${pages}` : null}</span>
                <em>{publisher ? `, ${publisher}` : null}</em>
                <span>{address ? ` ${address}` : null}</span>
                <span>{year ? `, ${year}` : null}</span>
                {editors ? (
                    <span>
                        {", "}
                        <b>Editors: </b>
                        {editors}
                    </span>
                ) : null}
                {url !== "#" ? (
                    <>
                        {" "}
                        <a href={url} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </a>
                    </>
                ) : null}

                <KeywordsFormat keywords={keywords} />
            </div>
            <div>
                {index < bookCoverList.length ? (
                    <img src={bookCoverList[index]} alt="book cover" />
                ) : null}
            </div>
        </li>
    );
};

const BookChaptersFormat = ({ bib }) => {
    const { authors, title, book, pages, publisher, year, editors, keywords } =
        bib;
    return (
        <li>
            {`${authors}, `}
            <b>{`${title}, `}</b>
            <em>{book}</em>
            <span>{pages ? `, Page Range: ${pages}` : null}</span>
            <em>{publisher ? `, ${publisher}` : null}</em>
            <span>{year ? `, ${year}` : null}</span>
            {editors ? (
                <span>
                    {", "}
                    <b>Editors: </b>
                    {editors}
                </span>
            ) : null}

            <KeywordsFormat keywords={keywords} />
        </li>
    );
};

const BookReviewsFormat = ({ bib }) => {
    const { title, book, genre, volume, issue, pages, year, system, keywords } =
        bib;

    // console.log(index);
    // console.log(bookCoverList);

    return (
        <li>
            <b>{`${title}`}</b>
            <span>{`, ${book}`}</span>
            <em>{`, ${genre}`}</em>
            <span>{volume ? `, Volume: ${volume}` : null}</span>
            <span>{issue ? `, ${issue}` : null}</span>
            <span>{pages ? `, ${pages}` : null}</span>
            <span>{year ? `, (${year})` : null}</span>
            <span>{system ? ` ${system}` : null}</span>

            <KeywordsFormat keywords={keywords} />
        </li>
    );
};

export { BooksFormat, BookChaptersFormat, BookReviewsFormat };
