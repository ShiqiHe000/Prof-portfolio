import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import IcedWingFrancois from "./SingleResearch/IcedWingFrancois";
import MorphedWingJeremie from "./SingleResearch/MorphedWingJeremie";
import styles from "../../scss/CardTemplates.module.scss";

const MorphedWings = () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };
    return (
        <div className="container">
            <IcedWingFrancois />
            <hr />
            <MorphedWingJeremie />
            <hr />
            <button type="button" onClick={goBack} className={styles.btn}>
                <FontAwesomeIcon icon={faArrowLeft} className={styles.arrow} />
                Go back
            </button>
        </div>
    );
};

export default MorphedWings;
