import React from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "../Bibliography.module.scss";
import btn from "../../../scss/CardTemplates.module.scss";
import { books } from "../publicationList";
import { BooksFormat } from "./BooksFormat";
import STEMBookCover from '../../../imgs/book-cover/STEM-book-cover.jpg';

const Books = () => {
    const booCoverList = [STEMBookCover];

    return (
        <div className="container">
            <h1 className="title">Books</h1>

            <div className={styles.published}>
                <ol>
                    {books.map((book, index) => (
                        <BooksFormat bib={book} key={book.title} bookCoverList={booCoverList} index={index}/>
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

export default Books;
