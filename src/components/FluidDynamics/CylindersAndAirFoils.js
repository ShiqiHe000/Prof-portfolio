import React from "react";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import CircularCylinder from "./SingleResearch/CircularCylinder";
import HighLiftWing from "./SingleResearch/HighLiftWing";
import SquareCylinder from "./SingleResearch/SquareCylinder";
import styles from "../../scss/CardTemplates.module.scss";

const CylindersAndAirFoils = () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };

    return (
        <div className="container">
            <HighLiftWing />
            <hr />
            <CircularCylinder />
            <hr />
            <SquareCylinder />
            <hr />
            <button type="button" onClick={goBack} className={styles.btn}>
                <FontAwesomeIcon icon={faArrowLeft} className={styles.arrow} />
                Go back
            </button>
        </div>
    );
};

export default CylindersAndAirFoils;
