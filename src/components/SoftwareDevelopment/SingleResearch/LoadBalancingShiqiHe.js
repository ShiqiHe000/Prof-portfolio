import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../../../scss/ResearchPage.module.scss";
import LBdemo from "../../../imgs/softwareDevelopment/LB.gif";
import HilbertCurve from "../../../imgs/softwareDevelopment/Hilbert_curve.mp4";
import research from "../../../scss/ResearchShowcase.module.scss";

const LoadBalancingShiqiHe = () => {
    return (
        <>
            <h1 className={styles.title}>
                Dynamic Load Balancing for a hp-adaptive Discontinuous Galerkin
                Wave Equation Solver via Spacing-Filling Curve and Advanced Data
                Structure
            </h1>
            <h3>
                Dynamic Load-Balancing Method for Adaptive High Order Methods
            </h3>

            <div className={research.figureContainer}>
                <div className={research.figureTitle}>
                    Adaptive Mesh + Dynamic Load-balancing
                    <br />
                    <span>
                        (Randomly refining mesh, the workload is balcing between
                        processors represented by differernt color)
                    </span>
                </div>
                <img
                    src={LBdemo}
                    alt="load-balcing demo"
                    className={research.LBdemo}
                />
            </div>

            <div className={styles.descriptionContainer}>
                <div>
                    <h4 className={styles.abstractTitle}>Abstract</h4>
                    <p>
                        Dynamic load imbalance is incurred by the adaptivity of
                        the program, which degrades the performance of the
                        supercomputers. A space-filling curve (SFC) based
                        repartitioning algorithm is developed to periodically
                        redistribute workload among processors. A hash table
                        data structure is developed for the Adaptive Mesh
                        Refinement Method (AMR). The load-balancing algorithm is
                        designed to execute quickly with low memory usage.
                    </p>
                </div>
                <div className={styles.researchInfo}>
                    <b>Researchers:</b>
                    <span>S. He and C. Mavriplis</span>
                    <b>GitHub:</b>
                    <span>
                        <a
                            href="https://github.com/ShiqiHe000/DG_wave_c"
                            target="_blank"
                            rel="noreferrer">
                            <FontAwesomeIcon icon={["fab", "github"]} />
                        </a>
                    </span>
                </div>
            </div>

            <h3>What is Hilbert Curve?</h3>
            <iframe
                src="https://www.youtube.com/embed/3s7h2MHQtxc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className={`${research.videoPosition} ${research.youtubeVideo}`}>
                Your browser does not support Embedded YouTube video
            </iframe>

            <h3>How to Repartition the Workload by a Curve?</h3>
            <div className={research.figureContainer}>
                <p>
                    weave the curve through your computational mesh, then by
                    unravelling the curve, you reduce the multidimensional
                    repartitioning problem to a one-dimensional one. Last step,
                    you cut the curve into equal segments - you get the
                    repartitioning result!
                </p>
                <video
                    src={HilbertCurve}
                    className={`${research.videoPosition} ${research.video}`}
                    controls
                    type="video/mp4">
                    You browser does not support video tag
                </video>
            </div>
        </>
    );
};

export default LoadBalancingShiqiHe;
