import React, {useEffect, useRef} from "react";
import styles from "./Landing.module.scss";
import {drawBackground} from './StartBackground';

const Landing = () => {

    const canvas = useRef();

    useEffect(() => {
        // drawBackground(canvas.current);
    }, []);

    return (
        <div className={`${styles.container} scrollType`} id="landing">
            <h1 className={styles.title}>Catherine Mavriplis</h1>
            <canvas ref={canvas} className={styles.canvas}></canvas>
        </div>
    );
};

export default Landing;
