import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import styles from "../../../scss/ResearchPage.module.scss";
import circularCylinder from "../../../imgs/fluidDynamics/cylindersWings/circular-cylinder.jpg";
import cylinder from "../../../scss/ResearchShowcase.module.scss";

const CircularCylinder = () => {
    return (
        <>
            <h1 className={styles.title}>
                Transition to Turbulence and Transition on Cylinders
            </h1>
            <h3>Circular Cross-sections</h3>
            <img
                src={circularCylinder}
                alt="flow pass cylinder"
                className={cylinder.fullWidth}
            />
            <div className={styles.descriptionContainer}>
                <div>
                    <h4 className={styles.abstractTitle}>Abstract</h4>
                    <p>
                        The flow in the near wake of a square cylinder at
                        Reynolds numbers of 205 and 225, corresponding to
                        three-dimensional wake instability modes 𝐴 and 𝐵 ,
                        respectively, and that of the square’s circumscribed
                        circular cylinder are examined by using
                        three-dimensional Navier–Stokes numerical simulations.
                    </p>
                </div>
                <div className={styles.researchInfo}>
                    <b>Researchers:</b>
                    <span>G. Agbaglah and C. Mavriplis</span>

                    <b>Aritcle Link:</b>
                    <a
                        href="https://www.cambridge.org/core/journals/journal-of-fluid-mechanics/article/threedimensional-wakes-behind-cylinders-of-square-and-circular-crosssection-early-and-longtime-dynamics/CD67101DDF06DC60C861D404743DB48E"
                        target="_blank"
                        rel="noreferrer">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                </div>
            </div>
        </>
    );
};

export default CircularCylinder;
