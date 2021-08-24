import React from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "../Bibliography.module.scss";
import btn from "../../../scss/CardTemplates.module.scss";
import { bookReviews } from "../publicationList";
import { BookReviewsFormat } from "./BooksFormat";

const BookReviews = () => {
    return (
        <div className="container">
            <h1 className="title">Book Reviews</h1>

            <div className={styles.published}>
                <ol>
                    {bookReviews.map((review) => (
                        <BookReviewsFormat bib={review} key={review.title}/>
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

export default BookReviews;
