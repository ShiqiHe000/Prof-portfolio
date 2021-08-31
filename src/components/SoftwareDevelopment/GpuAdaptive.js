import React from 'react'
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "../../scss/CardTemplates.module.scss";
import GpuGuillaume from './SingleResearch/GpuGuillaume';

const GpuAdaptive = () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };

    return (
        <div className="container">
            <GpuGuillaume />
            <hr />
            <button type="button" onClick={goBack} className={styles.btn}>
                <FontAwesomeIcon icon={faArrowLeft} className={styles.arrow} />
                Go back
            </button>
        </div>
    );
}

export default GpuAdaptive
