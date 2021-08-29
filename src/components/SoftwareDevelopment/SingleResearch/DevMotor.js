import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import styles from "../../../scss/ResearchPage.module.scss";
import adaptiveFlow from "../../../imgs/softwareDevelopment/adaptive-cylinder.jpg";
import research from "../../../scss/ResearchShowcase.module.scss";

const DevMotor = () => {
    return (
        <>
            <h1 className={styles.title}>
                A Parallel hp-adaptive High Order Discontinuous Galerkin Method
                for the Incompressible Navier-Stokes Equations
            </h1>
            <h3>Adaptive High Order Methods</h3>
            <img
                src={adaptiveFlow}
                alt="flow pass cylinder"
                className={research.fullWidth}
            />
            <div className={styles.descriptionContainer}>
                <div>
                    <h4 className={styles.abstractTitle}>Abstract</h4>
                    <p>
                        We present a parallel hp-adaptive high order (spectral)
                        discontinuous Galerkin method for approximation of the
                        incompressible Navier-Stokes equations. The spatial
                        discretization consists of equal-order polynomial
                        approximations of the fluid velocity and pressure via
                        discontinuous Galerkin spatial discretizations. For the
                        nonlinear convective term we select the local
                        Lax-Friedrichs flux, while for the divergence and
                        gradient operators central fluxes are chosen. For the
                        diffusive term, we use an interior penalty discontinuous
                        Galerkin method to ensure stability and invertibility.
                        The temporal discretization is an implicit- explicit
                        Runge-Kutta method paired with a high-order splitting
                        procedure to efficiently enforce the incompressibility
                        condition at each time step.
                    </p>
                </div>
                <div className={styles.researchInfo}>
                    <b>Researchers:</b>
                    <span>N. Chalmers, G. Agbaglah and C. Mavriplis</span>

                    <b>Aritcle Link:</b>
                    <a
                        href="https://www.sciencedirect.com/science/article/pii/S2590055219300393"
                        target="_blank"
                        rel="noreferrer">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                </div>
            </div>
        </>
    );
};

export default DevMotor;
