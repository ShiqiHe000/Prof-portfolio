import React from "react";

import styles from "../../../scss/ResearchPage.module.scss";
import morphingWing from "../../../imgs/fluidDynamics/cylindersWings/morphing-wing.jpg";
import cylinder from "../FluidDynamics.module.scss";

const MorphedWingJeremie = () => {
    return (
        <>
            <h1 className={styles.title}>
            Transition on a Morphing Wing
            </h1>
            <h3> Re=400,000 - 700,000</h3>
            <img
                src={morphingWing}
                alt="different shape of ice formed on airfoils"
                className={cylinder.fullWidth}
            />
            <div className={styles.descriptionContainer}>
                <div>
                    <h4 className={styles.abstractTitle}>Abstract</h4>
                    <p>
                       None
                    </p>
                </div>
                <div className={styles.researchInfo}>
                    <b>Researchers:</b>
                    <span>J. Laplante, B. Lowe and C. Mavriplis </span>
                </div>
            </div>
        </>
    );
};

export default MorphedWingJeremie;
