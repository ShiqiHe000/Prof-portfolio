import React from 'react'
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "../../scss/CardTemplates.module.scss";
import LoadBalancingShiqiHe from './SingleResearch/LoadBalancingShiqiHe';

const LoadBalancing = () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };

    return (
        <div className="container">
            <LoadBalancingShiqiHe />
            <hr />
            <button type="button" onClick={goBack} className={styles.btn}>
                <FontAwesomeIcon icon={faArrowLeft} className={styles.arrow} />
                Go back
            </button>
        </div>
    );
}

export default LoadBalancing
