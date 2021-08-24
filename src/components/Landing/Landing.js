import React, { useEffect, useRef } from "react";
import styles from "./Landing.module.scss";
import { drawBackground } from "./StartBackground";
import {titleAnimation, cardFadeIn} from '../../js/cardAnimation';

const Landing = () => {
    const canvas = useRef();

    useEffect(() => {
        drawBackground(canvas.current);
        titleAnimation(`.${styles.title}`, `.${styles.studyRleam} li`);
        // cardFadeIn(`.${styles.studyRleam} li`);
    }, []);

    return (
        <div className={`${styles.container} scrollType`} id="landing">
            <div className={styles.nameContainer}>
                <h1 className={styles.title}>Catherine</h1>
                <h1 className={styles.title}>Mavriplis</h1>
            </div>
            <ul className={styles.studyRleam}>
                <li>Fluid Dynamics</li>
                <li>Mechanical Engineering</li>
                <li>High-Performance Computing</li>
                <li>Aerospace, Biofluid, Combustion...</li>
                <li>Adaptive High-order Numercial Methods</li>
                <li>NSERC Chair for Women in Science and Engineering</li>
            </ul>
            <canvas ref={canvas} className={styles.canvas}></canvas>
        </div>
    );
};

export default Landing;
