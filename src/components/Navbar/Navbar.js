import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAward } from "@fortawesome/free-solid-svg-icons";
import { NavHashLink } from "react-router-hash-link";

import styles from "./Navbar.module.scss";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const toggleNavbar = () => setShowNavbar(!showNavbar);

    return (
        <div className={styles.navBackground}>
            <nav className={styles.navContainer}>
                <FontAwesomeIcon icon={faAward} className={styles.icon} />
                <FontAwesomeIcon
                    icon={faBars}
                    className={`${styles.icon} ${styles.burgerIcon}`}
                    onClick={() => toggleNavbar()}
                />
                <ul
                    className={`${styles.navItems} ${
                        showNavbar ? styles.active : ""
                    }`}>
                    <li>
                        <NavHashLink
                            to="/#landing"
                            onClick={toggleNavbar}
                            activeClassName="selected"
                            smooth>
                            Home
                        </NavHashLink>
                    </li>
                    <li>
                        <NavHashLink
                            to="/#biography"
                            onClick={toggleNavbar}
                            activeClassName="selected"
                            smooth>
                            Biography
                        </NavHashLink>
                    </li>
                    <li>
                        <NavHashLink
                            to="/#research"
                            onClick={toggleNavbar}
                            activeClassName="selected"
                            smooth>
                            Research
                        </NavHashLink>
                    </li>
                    <li>
                        <NavHashLink
                            to="/#publications"
                            onClick={toggleNavbar}
                            activeClassName="selected"
                            smooth>
                            Publications
                        </NavHashLink>
                    </li>
                    <li>
                        <NavHashLink
                            to="/#contact"
                            onClick={toggleNavbar}
                            activeClassName="selected"
                            smooth>
                            Contacts
                        </NavHashLink>
                    </li>
                </ul>
            </nav>
            <div
                className={`${styles.background} ${
                    showNavbar ? "" : styles.noDisplay
                }`}
                onClick={toggleNavbar}></div>
        </div>
    );
};

export default Navbar;
