import React from "react";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "../../scss/CardTemplates.module.scss";
import DevMotor from "./SingleResearch/DevMotor";

const NavierStoke = () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };

    return (
        <div className="container">
            <DevMotor />
            <button type="button" onClick={goBack} className={styles.btn}>
                <FontAwesomeIcon icon={faArrowLeft} className={styles.arrow} />
                Go back
            </button>
        </div>
    );
};

export default NavierStoke;
