import React from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "../Bibliography.module.scss";
import btn from "../../../scss/CardTemplates.module.scss";
import { BookChaptersFormat } from "./BooksFormat";
import { bookChapters } from "../publicationList";

const BookChapters = () => {
    return (
        <div className="container">
            <h1 className="title">Books</h1>

            <div className={styles.published}>
                <ol>
                    {bookChapters.map((book) => (
                        <BookChaptersFormat bib={book} key={book.title}/>
                    ))}
                </ol>
            </div>
            <HashLink
                smooth
                to="/#publications"
                className={`${btn.btn} ${styles.goBack}`}>
                <FontAwesomeIcon icon={faArrowLeft} className={btn.arrow} />
                Go Back
            </HashLink>
        </div>
    );
};

export default BookChapters;
