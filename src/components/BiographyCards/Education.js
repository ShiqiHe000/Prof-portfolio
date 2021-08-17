import React from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "./BiographyCards.module.scss";

const Education = () => {
    return (
        <div className="container">
            <h1 className={`${styles.title} ${styles.mainTitle}`}>Education</h1>
            <div className={styles.card}>
                PhD – Fluid Dynamics - Aeronautics and Astronautics – MIT
            </div>
            <div className={styles.card}>
                S.M. (Science Master's) – Fluid Dynamics - Aeronautics and
                Astronautics – MIT
            </div>
            <div className={styles.card}>
                B. Eng. Honours Mechanical Engineering – McGill University
            </div>
            <button className={styles.btn}>
                <HashLink smooth to="/#biography">
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        className={styles.arrow}
                    />
                    Go Back
                </HashLink>
            </button>
        </div>
    );
};

export default Education;
