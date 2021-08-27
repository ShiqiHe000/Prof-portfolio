import React from "react";

import styles from "../../../scss/ResearchPage.module.scss";
import icedWing from "../../../imgs/fluidDynamics/cylindersWings/ice-shape.jpg";
import cylinder from "../FluidDynamics.module.scss";

const IcedWingFrancois = () => {
    return (
        <>
            <h1 className={styles.title}>
                Direct Numerical Simulation of Flow Past an Iced NLF-0414
                Airfoil
            </h1>
            <h3>Re=100,000 and 200,000</h3>
            <img
                src={icedWing}
                alt="different shape of ice formed on airfoils"
                className={cylinder.controlledWidth}
            />
            <div className={styles.descriptionContainer}>
                <div>
                    <h4 className={styles.abstractTitle}>Abstract</h4>
                    <p>
                        A Natural Laminar Flow (NLF) airfoil is designed to stay
                        laminar down the surface of theairfoil for as long as
                        possible for low to high chord Reynolds numbers. The
                        NLF-0414 is usedin general aviation flight as it has a
                        high lift coefficient and a low profile drag coefficient
                        butsuccumbs to in-flight weather conditions such as ice
                        that is known to affect aerodynamicperformance. The
                        proposed research seeks to model the flow past iced
                        airfoil profiles withcomplex geometries to better
                        understand the flow physics in the low Reynolds number
                        range(O(10^5)). This work also aims to extend the
                        capabilities of the Spectral Element Method(SEM) up to
                        realistic Reynolds numbers to accurately simulate these
                        flows.
                    </p>
                </div>
                <div className={styles.researchInfo}>
                    <b>Researchers:</b>
                    <span>F. Lepage and C. Mavriplis</span>
                </div>
            </div>
        </>
    );
};

export default IcedWingFrancois;
