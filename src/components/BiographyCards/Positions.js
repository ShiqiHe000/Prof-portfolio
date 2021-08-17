import React from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "./BiographyCards.module.scss";

const Positions = () => {
    return (
        <div className="container">
            <h1 className={`${styles.title} ${styles.mainTitle}`}>Positions</h1>
            <h3 className={`${styles.title} ${styles.subtitle}`}>Cathrine Mavriplis</h3>
            <div className={styles.card}>NSERC Chair for Women in Science and Engineering</div>
            <div className={styles.card}>Professor at University of Ottawa</div>
            <button className={styles.btn}>
                <HashLink smooth to="/#biography">
                    <FontAwesomeIcon icon={faArrowLeft} className={styles.arrow}/>
                    Go Back
                </HashLink>
            </button>
        </div>
    );
};

export default Positions;
