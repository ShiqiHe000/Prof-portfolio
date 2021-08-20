import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

import { ReactComponent as Background } from "../../imgs/Vorderrhein.svg";
import { ReactComponent as SoftwareDevelopment } from "../../imgs/code-development.svg";
import { ReactComponent as Aircraft } from "../../imgs/aircraft.svg";
import styles from "./Research.module.scss";

const Research = () => {
    const codeCard = useRef();
    const fluidCard = useRef();
    const codeIllutration = useRef();
    const aircraftIllutration = useRef();

    useEffect(() => {
        codeCard.current.addEventListener("mouseenter", () => {
            gsap.to(codeIllutration.current, {
                scale: 1.05,
                repeat: 3,
                yoyo: true,
                ease: "power2.in",
                duration: 0.5,
            });
        });

        fluidCard.current.addEventListener("mouseenter", () => {
            const tl = gsap.timeline({ ease: "power4.out" });
            tl.to(aircraftIllutration.current, {
                opacity: 0,
                duration: 0.2,
            });
            tl.to(aircraftIllutration.current, {
                xPercent: 50,
                opacity: 0.1,
                duration: 0.2,
            });
            tl.to(aircraftIllutration.current, {
                xPercent: 0,
                opacity: 1,
            });
        });
    }, []);

    return (
        <div className="svgBackgroundContainer scrollType">
            <Background className="svgBackground" />
            <div className={`container`} id="research">
                <h1 className="title">Research</h1>

                <div className={styles.cardContainer}>
                    <div
                        className={`${styles.card} ${styles.card1}`}
                        ref={codeCard}>
                        <h2 className={`${styles.title} ${styles.mainTitle}`}>
                            Software Development
                        </h2>
                        <h4 className={`${styles.title} ${styles.subtitle}`}>
                            Adaptive High-order Numerical Methods
                        </h4>
                        <SoftwareDevelopment
                            className={styles.illustration}
                            ref={codeIllutration}
                        />
                        <Link
                            to="software-development"
                            className={`${styles.btn} ${styles.btnLeft}`}>
                            Learn More
                        </Link>
                    </div>

                    <div
                        className={`${styles.card} ${styles.card2}`}
                        ref={fluidCard}>
                        <h2 className={`${styles.title} ${styles.mainTitle}`}>
                            Fluid Dynamics
                        </h2>
                        <h4 className={`${styles.title} ${styles.subtitle}`}>
                            Aerospace, Biofluid, combustion ...
                        </h4>
                        <Aircraft
                            className={styles.illustration}
                            ref={aircraftIllutration}
                        />
                        <Link
                            to="/fluid-dynamics"
                            className={`${styles.btn} ${styles.btnRight}`}>
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Research;
