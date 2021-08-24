import React from "react";

import { ReactComponent as Background } from "../../imgs/Vorderrhein.svg";
import styles from "./Publication.module.scss";
import PublicationModule from "./PublicationModule";
import journalArticalSvg from "../../imgs/paper.svg";
import journalIssuesSvg from "../../imgs/journal-issues.svg";
import booksSvg from "../../imgs/books.svg";
import bookChaptersSvg from "../../imgs/book-chapters.svg";
import bookReviewsSvg from "../../imgs/book-reviews.svg";
import studyingSvg from "../../imgs/studying.svg";

const Publications = () => {

    return (
        <div className="svgBackgroundContainer scrollType" id="publications">
            <Background className="svgBackground" />

            <div className={`container ${styles.container}`}>
                <h1 className="title">Publications</h1>
                <div className={styles.publicationGrid}>
                    <PublicationModule
                        name={"Journal Articles"}
                        url={`/publications/journalArticles`}
                        illutraction={journalArticalSvg}
                    />
                    <PublicationModule
                        name={"Journal Issues"}
                        url={"/publications/journalIssues"}
                        illutraction={journalIssuesSvg}
                    />
                    <PublicationModule
                        name={"Books"}
                        url={"/publications/books"}
                        illutraction={booksSvg}
                    />
                    <PublicationModule
                        name={"Book Chapters"}
                        url={"/publications/bookChapters"}
                        illutraction={bookChaptersSvg}
                    />
                    <PublicationModule
                        name={"Book Reviews"}
                        url={"/publications/bookReviews"}
                        illutraction={bookReviewsSvg}
                    />
                    <PublicationModule
                        name={"More..."}
                        url={"#"}
                        illutraction={studyingSvg}
                    />
                </div>
            </div>
        </div>
    );
};

export default Publications;
