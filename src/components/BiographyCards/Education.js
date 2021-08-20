import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "../../scss/CardTemplates.module.scss";
import { ReactComponent as WaveSvg } from "../../imgs/wave.svg";
import { cardFadeIn } from "../../js/cardAnimation";

const Education = () => {
    useEffect(() => {
        cardFadeIn("[data-card]");
    }, []);
    return (
        <div className="svgBackgroundContainer">
            <WaveSvg className="svgBackground" />
            <div className="container">
                <h1 className={`${styles.title} ${styles.mainTitle}`}>
                    Education
                </h1>
                <div className={styles.card} data-card>
                    PhD – Fluid Dynamics - Aeronautics and Astronautics – MIT
                </div>
                <div className={styles.card} data-card>
                    S.M. (Science Master's) – Fluid Dynamics - Aeronautics and
                    Astronautics – MIT
                </div>
                <div className={styles.card} data-card>
                    B. Eng. Honours Mechanical Engineering – McGill University
                </div>
                <HashLink
                    smooth
                    to="/#biography"
                    className={styles.btn}
                    data-card>
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        className={styles.arrow}
                    />
                    Go Back
                </HashLink>
            </div>
        </div>
    );
};

export default Education;
