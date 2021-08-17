import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faDoorOpen,
    faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

import { ReactComponent as ContactSvg } from "../../imgs/contact.svg";
import { ReactComponent as Background } from "../../imgs/Taieri.svg";
import styles from "./Contact.module.scss";

const Contact = () => {
    return (
        <div className={`scrollType ${styles.container}`}>
            <Background className={styles.background} />
            <div className="container">
                <h1 className={styles.title}>Contacts</h1>
                <ContactSvg className={styles.illutration} />
                <div className={`${styles.card} ${styles.card1}`}>
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className={styles.icon}
                    />
                    <span className={styles.info}>
                        catherine.mavriplis@uOttawa.ca
                    </span>
                </div>

                <div className={`${styles.card} ${styles.card2}`}>
                    <FontAwesomeIcon
                        icon={faPhoneAlt}
                        className={styles.icon}
                    />
                    <span className={styles.info}>613-562-5800 ext. 8961</span>
                </div>

                <div className={`${styles.card} ${styles.card3}`}>
                    <FontAwesomeIcon
                        icon={faDoorOpen}
                        className={styles.icon}
                    />
                    <span className={styles.info}>Office: CBY A331</span>
                </div>
            </div>
        </div>
    );
};

export default Contact;
