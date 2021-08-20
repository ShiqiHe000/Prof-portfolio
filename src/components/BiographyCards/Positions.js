import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "../../scss/CardTemplates.module.scss";
import { ReactComponent as WaveSvg } from "../../imgs/wave.svg";
import { cardFadeIn } from "../../js/cardAnimation";

const Positions = () => {
    useEffect(() => {
        cardFadeIn("[data-card]");
    }, []);
    return (
        <div className="svgBackgroundContainer">
            <WaveSvg className="svgBackground" />
            <div className="container">
                <h1 className={`${styles.title} ${styles.mainTitle}`}>
                    Positions
                </h1>
                <h3 className={`${styles.title} ${styles.subtitle}`}>
                    Cathrine Mavriplis
                </h3>
                <div className={styles.card} data-card>
                    <b>NSERC Chair</b> for Women in Science and Engineering
                </div>
                <div className={styles.card} data-card>
                    <b>Professor</b> at University of Ottawa
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

export default Positions;
