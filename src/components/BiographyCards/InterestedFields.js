import React from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "./BiographyCards.module.scss";

const InterestedFields = () => {
    return (
        <div className="container">
            <h1 className={`${styles.title} ${styles.mainTitle}`}>
                Fields of Interest
            </h1>

            <div className={styles.card}>
                Numerical methods for fluid dynamics and interdisciplinary
                applications: biofluids, combustion, MEMS and meteorology.
            </div>

            <div className={styles.card}>
                Aerospace engineering, including aerodynamics, transition and
                receptivity.
            </div>

            <div className={styles.card}>
                High order methods and adaptivity.
            </div>

            <div className={styles.card}>
                Advancement of women in science, engineering and mathematics
                careers.
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

export default InterestedFields;
