import React from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "../Bibliography.module.scss";
import btn from "../../../scss/CardTemplates.module.scss";
import { journalArticles } from "../publicationList";
import { BibliographyFormat } from "./BibliographyFormat";

const JournalArticles = () => {
    return (
        <div className="container">
            <h1 className="title">Journal Articles</h1>
            <div className={styles.searchField}>
                <label htmlFor="searchTerm" className={styles.searchLabel}>
                    Search By
                </label>
                <select
                    name="searchTerm"
                    id="searchTerm"
                    className={styles.options}>
                    <option value="title">Title</option>
                    <option value="author">Author (Lastname)</option>
                    <option value="year">Year</option>
                    <option value="keyword">Keyword</option>
                    <option value="journal">Journal</option>
                </select>
                <input type="text" className={styles.input} />
            </div>
            <div className={styles.published}>
                <ol>
                    {journalArticles.map((article) => (
                        <BibliographyFormat bib={article} key={article.title}/>
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

export default JournalArticles;
