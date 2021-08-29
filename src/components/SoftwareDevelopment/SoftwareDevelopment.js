import React, { useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import styles from "../../scss/CardTemplates.module.scss";
import carousels from "../../scss/Carousel.module.scss";
import { ReactComponent as Background } from "../../imgs/Vorderrhein.svg";
import drivenCavity from "../../imgs/softwareDevelopment/driven-cavity.png";
import GPU from "../../imgs/softwareDevelopment/GPU.jpeg";
import wave from "../../imgs/softwareDevelopment/LB-wave.png";
import { shufflePics } from "../../js/CarouselTransfer";
import NavierStoke from "./NavierStoke";
import LoadBalancing from "./LoadBalancing";

const SoftwareDevelopment = () => {
    const { url } = useRouteMatch();

    const picContainer = useRef();
    const researchList = useRef();
    useEffect(() => {
        if (picContainer.current) {
            shufflePics(
                picContainer.current,
                researchList.current,
                carousels.active
            );
        }
    });
    return (
        <Switch>
            <Route exact path={url}>
                <div className="svgBackgroundContainer">
                    <Background className="svgBackground" />
                    <div className="container">
                        <h1 className={`${styles.title} ${styles.mainTitle}`}>
                            Software Development
                        </h1>

                        <div className={carousels.grid}>
                            <div className={carousels.pics} ref={picContainer}>
                                <img src={GPU} alt="GPU" data-gpu />
                                <img
                                    src={wave}
                                    alt="load-balancing for reflective wave"
                                    data-lb
                                />
                                <img
                                    src={drivenCavity}
                                    alt="driven cavity"
                                    data-driven-cavity
                                />
                            </div>
                            <ul className={carousels.lists} ref={researchList}>
                                <li
                                    data-name="driven-cavity"
                                    className={carousels.active}>
                                    <Link to={`${url}/hp-adaptive-NS`}>
                                        hp-adaptive High-Order Method On
                                        Navier-Stoke Equations
                                    </Link>
                                </li>
                                <li data-name="lb">
                                    <Link to={`${url}/load-balancing`}>Parallel Load-Balancing</Link>
                                </li>
                                <li data-name="gpu">
                                    GPU implementation on Adaptive High-Order
                                    Method
                                </li>
                            </ul>
                        </div>

                        <HashLink
                            smooth
                            to="/#research"
                            className={styles.btn}
                            data-card>
                            <FontAwesomeIcon
                                icon={faArrowLeft}
                                className={styles.arrow}
                            />
                            Go Back
                        </HashLink>
                    </div>
                </div>
            </Route>
            <Route path={`${url}/hp-adaptive-NS`}>
                <NavierStoke />
            </Route>
            <Route path={`${url}/load-balancing`}>
                <LoadBalancing />
            </Route>
        </Switch>
    );
};

export default SoftwareDevelopment;
