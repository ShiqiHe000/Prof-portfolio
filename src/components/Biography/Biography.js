import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faLink,
    faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import styles from "./Biography.module.scss";
import bioPhoto from "../../imgs/bio-photo.jpg";
import { ReactComponent as WaveSvg } from "../../imgs/wave.svg";

const Biography = () => {
    return (
        <div
            className={`scrollType svgBackgroundContainer`}
            id="biography">
            <WaveSvg className="svgBackground" />
            <div className={`container ${styles.gridContainer}`}>
                <h1 className={styles.title}>Biography</h1>
                <div className={styles.rightColumn}>
                    <img
                        src={bioPhoto}
                        alt="Biography"
                        className={styles.personalPhoto}
                    />
                    <div className={styles.mediaLinks}>
                        <h5>Media Links</h5>
                        <div className={styles.icons}>
                            <a href="mailto:catherine.mavriplis@uottawa.ca">
                                <FontAwesomeIcon
                                    className={styles.icon}
                                    icon={faEnvelope}
                                />
                            </a>
                            <div className={styles.phone}>
                                <FontAwesomeIcon
                                    className={`${styles.icon}`}
                                    icon={faPhoneAlt}
                                />
                            </div>
                            <a
                                href="http://www.cwse-on.ca/"
                                target="_blank"
                                rel="noreferrer">
                                <FontAwesomeIcon
                                    className={styles.icon}
                                    icon={faLink}
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/catherine-mavriplis/?originalSubdomain=ca"
                                target="_blank"
                                rel="noreferrer">
                                <FontAwesomeIcon
                                    className={styles.icon}
                                    icon={["fab", "linkedin"]}
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <h2 className={styles.firstName}>Catherine</h2>
                <div className={styles.background}>
                    <h2 className={styles.lastName}>Mavriplis</h2>
                    <div className={styles.cardsGrid}>
                        <div className={styles.card}>
                            <Link to="/positions">Positions</Link>
                        </div>
                        <div className={styles.card}>
                            <Link to="/education">Education</Link>
                        </div>
                        <div className={styles.card}>
                            <Link to="/fieldsOfInterest">
                                Fileds of Interest
                            </Link>
                        </div>
                        <div className={styles.card}>
                            <HashLink smooth to="/#research">
                                Researches
                            </HashLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Biography;
