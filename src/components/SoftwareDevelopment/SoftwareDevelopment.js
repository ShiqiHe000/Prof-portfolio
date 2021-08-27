import React, { useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "../../scss/CardTemplates.module.scss";
import carousels from "../../scss/Carousel.module.scss";
import { ReactComponent as Background } from "../../imgs/Vorderrhein.svg";
import drivenCavity from "../../imgs/softwareDevelopment/driven-cavity.png";
import GPU from "../../imgs/softwareDevelopment/GPU.jpeg";
import wave from "../../imgs/softwareDevelopment/LB-wave.png";
import { shufflePics } from "../../js/CarouselTransfer";

const SoftwareDevelopment = () => {
    const picContainer = useRef();
    const researchList = useRef();
    useEffect(() => {
        shufflePics(
            picContainer.current,
            researchList.current,
            carousels.active
        );
    }, []);
    return (
        <div className="svgBackgroundContainer">
            <Background className="svgBackground" />
            <div className="container">
                <h1 className={`${styles.title} ${styles.mainTitle}`}>
                    Software Development
                </h1>

                <div className={carousels.grid}>
                    <div className={carousels.pics} ref={picContainer}>
                        <img src={GPU} alt="GPU" data-gpu />
                        <img
                            src={wave}
                            alt="load-balancing for reflective wave"
                            data-lb
                        />
                        <img
                            src={drivenCavity}
                            alt="driven cavity"
                            data-driven-cavity
                        />
                    </div>
                    <ul className={carousels.lists} ref={researchList}>
                        <li
                            data-name="driven-cavity"
                            className={carousels.active}>
                            hp-adaptive High-Order Method On Navier-Stoke
                            Equations
                        </li>
                        <li data-name="lb">Parallel Load-Balancing</li>
                        <li data-name="gpu">
                            GPU implementation on Adaptive High-Order Method
                        </li>
                    </ul>
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
