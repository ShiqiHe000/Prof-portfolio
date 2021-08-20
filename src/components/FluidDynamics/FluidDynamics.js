import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "../../scss/CardTemplates.module.scss";
import { ReactComponent as Background } from "../../imgs/Vorderrhein.svg";
import { cardFadeIn } from "../../js/cardAnimation";

const FluidDynamics = () => {
    useEffect(() => {
        cardFadeIn("[data-card]");
    }, []);
    return (
        <div className="svgBackgroundContainer">
            <Background className="svgBackground" />
            <div className="container">
                <h1 className={`${styles.title} ${styles.mainTitle}`}>
                    Fluid Dynamics
                </h1>
                <h3 className={`${styles.title} ${styles.subtitle}`}>
                    Aerospace, Biofluid, combustion and more...
                </h3>
                <div className={styles.card} data-card>
                    Naka wings
                </div>
                <div className={styles.card} data-card>
                    Icing
                </div>
                <div className={styles.card} data-card>
                    Bio fluid
                </div>

                <HashLink
                    smooth
                    to="/#research"
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

export default FluidDynamics;
