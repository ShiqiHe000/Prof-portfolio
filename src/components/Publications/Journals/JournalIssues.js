import React from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "../Bibliography.module.scss";
import btn from "../../../scss/CardTemplates.module.scss";
import { journalIssues as issues } from "../publicationList";
import { JournalIssuesFormat } from "./BibliographyFormat";

const JournalIssues = () => {
    return (
        <div className="container">
            <h1 className="title">Journal Issues</h1>

            <div className={styles.published}>
                <ol>
                    {issues.map((issue) => (
                        <JournalIssuesFormat bib={issue} key={issue.title}/>
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

export default JournalIssues;
