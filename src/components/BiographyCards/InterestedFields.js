import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "../../scss/CardTemplates.module.scss";
import { ReactComponent as WaveSvg } from "../../imgs/wave.svg";
import { cardFadeIn } from "../../js/cardAnimation";

const InterestedFields = () => {
    useEffect(() => {
        cardFadeIn("[data-card]");
    }, []);

    return (
        <div className="svgBackgroundContainer">
            <WaveSvg className="svgBackground" />

            <div className="container">
                <h1 className={`${styles.title} ${styles.mainTitle}`}>
                    Fields of Interest
                </h1>

                <div className={styles.card} data-card>
                    Numerical methods for fluid dynamics and interdisciplinary
                    applications: biofluids, combustion, MEMS and meteorology.
                </div>

                <div className={styles.card} data-card>
                    Aerospace engineering, including aerodynamics, transition
                    and receptivity.
                </div>

                <div className={styles.card} data-card>
                    High order methods and adaptivity.
                </div>

                <div className={styles.card} data-card>
                    Advancement of women in science, engineering and mathematics
                    careers.
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

export default InterestedFields;
