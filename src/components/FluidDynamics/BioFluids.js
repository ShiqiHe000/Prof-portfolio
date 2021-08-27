import React from "react";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import BloodAggregation from "./SingleResearch/BloodAggregation";
import styles from "../../scss/CardTemplates.module.scss";

const BioFluids = () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };

    return (
        <div className="container">
            <BloodAggregation />
            <hr />
            <button type="button" onClick={goBack} className={styles.btn}>
                <FontAwesomeIcon icon={faArrowLeft} className={styles.arrow} />
                Go back
            </button>
        </div>
    );
};

export default BioFluids;
