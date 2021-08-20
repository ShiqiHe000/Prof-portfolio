import React from "react";

import styles from "./Publication.module.scss";

const PublicationModule = ({name, url, illutraction}) => {
    return (
        <a className={styles.card} href={url}>
            <h3>{name}</h3>
            <img src={illutraction} alt="publication category" />
        </a>
    );
};

export default PublicationModule;
