import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import styles from "../../../scss/ResearchPage.module.scss";
import wing from "../../../imgs/fluidDynamics/cylindersWings/wing.png";
import cylinder from "../../../scss/ResearchShowcase.module.scss";

const HighLiftWing = () => {
    return (
        <>
            <h1 className={styles.title}>
                Transition to Turbulence and Transition on Airfoils and Wings
            </h1>
            <h3>30P30N Three-element High Lift Wing</h3>
            <img
                src={wing}
                alt="three-element wing"
                className={cylinder.controlledWidth}
            />
            <div className={styles.descriptionContainer}>
                <div>
                    <h4 className={styles.abstractTitle}>Abstract</h4>
                    <p>
                        A three-dimensional computational fluid dynamics
                        analysis of low Reynolds number [𝑂(10^4)] flow over a
                        30P30N three-element high lift wing is carried out using
                        a high-order spectral element method.
                    </p>
                </div>
                <div className={styles.researchInfo}>
                    <b>Researchers:</b>
                    <span>M. Vadsola, G. Agbaglah and C. Mavriplis</span>

                    <b>Aritcle Link:</b>
                    <a
                        href="https://aip.scitation.org/doi/full/10.1063/5.0036088"
                        target="_blank"
                        rel="noreferrer">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                </div>
            </div>
        </>
    );
};

export default HighLiftWing;
