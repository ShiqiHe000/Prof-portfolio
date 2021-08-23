import React from "react";
import { Link } from "react-router-dom";

import styles from "./Publication.module.scss";

const PublicationModule = ({ name, url, illutraction }) => {

    return (
        <Link className={styles.card} to={url}>
            <h3>{name}</h3>
            <img src={illutraction} alt="publication category" />
        </Link>
    );
};

export default PublicationModule;
