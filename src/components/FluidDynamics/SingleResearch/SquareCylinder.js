import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import styles from "../../../scss/ResearchPage.module.scss";
import squareCylinder from "../../../imgs/fluidDynamics/cylindersWings/square-cylinder.jpg";
import cylinder from "../../../scss/ResearchShowcase.module.scss";

const SquareCylinder = () => {
    return (
        <>
            <h1 className={styles.title}>
                Transition to Turbulence and Transition on Cylinders
            </h1>
            <h3>Square Cross-sections</h3>
            <img
                src={squareCylinder}
                alt="flow pass cylinder"
                className={cylinder.fullWidth}
            />
            <div className={styles.descriptionContainer}>
                <div>
                    <h4 className={styles.abstractTitle}>Abstract</h4>
                    <p>
                        A high-order spectral element method is used to perform
                        direct numerical simulations of flow past a square
                        cylinder at the transition from the two-dimensional von
                        Kármán vortex street in the wake of the cylinder to
                        three-dimensionality.
                    </p>
                </div>
                <div className={styles.researchInfo}>
                    <b>Researchers:</b>
                    <span>G. Agbaglah and C. Mavriplis</span>

                    <b>Aritcle Link:</b>
                    <a
                        href="https://www.cambridge.org/core/journals/journal-of-fluid-mechanics/article/abs/computational-analysis-of-physical-mechanisms-at-the-onset-of-threedimensionality-in-the-wake-of-a-square-cylinder/A171BBA26E3EC14630A6363C48158A71"
                        target="_blank"
                        rel="noreferrer">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                </div>
            </div>
        </>
    );
};

export default SquareCylinder;
