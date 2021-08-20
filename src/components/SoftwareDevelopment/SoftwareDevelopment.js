import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "../../scss/CardTemplates.module.scss";
import { ReactComponent as Background } from "../../imgs/Vorderrhein.svg";
import { cardFadeIn } from "../../js/cardAnimation";

const SoftwareDevelopment = () => {
    useEffect(() => {
        cardFadeIn("[data-card]");
    }, []);
    return (
        <div className="svgBackgroundContainer">
            <Background className="svgBackground" />
            <div className="container">
                <h1 className={`${styles.title} ${styles.mainTitle}`}>
                    Software Development
                </h1>
                <h3 className={`${styles.title} ${styles.subtitle}`}>
                    Adaptive High-order Numerical Methods
                </h3>
                <div className={styles.card} data-card>
                    A parallel <b>hp-adaptive high order</b> discontinuous Galerkin
                    method for the incompressible <b>Navier-Stokes equations</b>
                </div>
                <div className={styles.card} data-card>
                    <b>Dynamic Load Balancing</b> for a hp-adaptive Discontinuous
                    Galerkin Wave Equation Solver via <b>Spacing-Filling Curve</b> and
                    <b>Advanced Data Structure</b>
                </div>
                <div className={styles.card} data-card>
                    GPU
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

export default SoftwareDevelopment;
