import React from "react";

import styles from "../../../scss/ResearchPage.module.scss";
import gpuAndCpu from "../../../imgs/softwareDevelopment/gpu-diff-cpu.jpeg";
import research from "../../../scss/ResearchShowcase.module.scss";

const GpuGuillaume = () => {
    return (
        <>
            <h1 className={styles.title}>
                GPU Implementation of Adaptive High Order Spectral Discontinuous
                Galerkin Methods
            </h1>
            <h3>Parallel Programing on GPU</h3>
            <img
                src={gpuAndCpu}
                alt="The difference between GPU and CPU"
                className={research.controlledWidth}
            />
            <div className={styles.descriptionContainer}>
                <div>
                    <h4 className={styles.abstractTitle}>Abstract</h4>
                    <p>
                        None.
                    </p>
                </div>
                <div className={styles.researchInfo}>
                    <b>Researchers:</b>
                    <span>G. Tousignant and C. Mavriplis</span>
                </div>
            </div>
        </>
    );
};

export default GpuGuillaume;
