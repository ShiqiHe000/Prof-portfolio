import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import styles from "../../../scss/ResearchPage.module.scss";
import veins from "../../../imgs/fluidDynamics/cylindersWings/veins.jpg";
import cylinder from "../FluidDynamics.module.scss";

const BloodAggregation = () => {
    return (
        <>
            <h1 className={styles.title}>
                Red Blood Cell Aggregation and Blood Viscosity in
                Microcirculation
            </h1>
            <h3>Controlled Microfluidic Environment</h3>
            <img
                src={veins}
                alt="flow pass cylinder"
                className={cylinder.controlledWidth}
            />
            <div className={styles.descriptionContainer}>
                <div>
                    <h4 className={styles.abstractTitle}>Abstract</h4>
                    <p>
                        Blood, as a non-Newtonian biofluid, represents the focus
                        of numerous studies in the hemorheology field. Blood
                        constituents include red blood cells, white blood cells
                        and platelets that are suspended in blood plasma. Due to
                        the abundance of the RBCs (40% to 45% of the blood
                        volume), their behavior dictates the rheological
                        behavior of blood especially in the microcirculation. At
                        very low shear rates, RBCs are seen to assemble and form
                        entities called aggregates, which causes the
                        non-Newtonian behavior of blood. It is important to
                        understand the conditions of the aggregates formation to
                        comprehend the blood rheology in microcirculation. The
                        protocol described here details the experimental
                        procedure to determine quantitatively the RBC aggregates
                        in microcirculation under constant shear rate, based on
                        image processing. For this purpose, RBC-suspensions are
                        tested and analyzed in 120 x 60 µm
                        poly-dimethyl-siloxane (PDMS) microchannels. The
                        RBC-suspensions are entrained using a second fluid in
                        order to obtain a linear velocity profile within the
                        blood layer and thus achieve a wide range of constant
                        shear rates. The shear rate is determined using a micro
                        Particle Image Velocimetry (µPIV) system, while RBC
                        aggregates are visualized using a high speed camera. The
                        videos captured of the RBC aggregates are analyzed using
                        image processing techniques in order to determine the
                        aggregate sizes based on the images intensities.
                    </p>
                </div>
                <div className={styles.researchInfo}>
                    <b>Researchers:</b>
                    <span>R. Mehri, C. Mavriplis and M. Fenech</span>

                    <b>Aritcle Link:</b>
                    <a
                        href="https://www.jove.com/v/52719/controlled-microfluidic-environment-for-dynamic-investigation-red?language%5C%5Cu003dChinese&&"
                        target="_blank"
                        rel="noreferrer">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                </div>
            </div>
        </>
    );
};

export default BloodAggregation;
