import React, { useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import styles from "../../scss/CardTemplates.module.scss";
import carousels from "../../scss/Carousel.module.scss";
import { ReactComponent as Background } from "../../imgs/Vorderrhein.svg";
import wings from "../../imgs/fluidDynamics/JFM2019.jpg";
import icing from "../../imgs/fluidDynamics/icing.jpg";
import bloodCell from "../../imgs/fluidDynamics/blood-cell.jpg";
import { shufflePics } from "../../js/CarouselTransfer";
import CylindersAndAirFoils from "./CylindersAndAirFoils";
import MorphedWings from "./MorphedWings";
import BioFluids from "./BioFluids";

const FluidDynamics = () => {
    const { url, path } = useRouteMatch();

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
            <Route exact path={path}>
                <div className="svgBackgroundContainer">
                    <Background className="svgBackground" />
                    <div className="container">
                        <h1 className={`${styles.title} ${styles.mainTitle}`}>
                            Fluid Dynamics
                        </h1>

                        <div className={carousels.grid}>
                            <div className={carousels.pics} ref={picContainer}>
                                <img
                                    src={bloodCell}
                                    alt="Red blood cell aggregation"
                                    data-3
                                />
                                <img
                                    src={icing}
                                    alt="Icing on airfoils"
                                    data-2
                                />
                                <img
                                    src={wings}
                                    alt="flow pass a cylinder"
                                    data-1
                                />
                            </div>
                            <ul className={carousels.lists} ref={researchList}>
                                <li data-name="1" className={carousels.active}>
                                    <Link to={`${url}/cylinder-and-airfoils`}>
                                        Transition to Turbulence and Transition
                                        from 2D to 3D on cylinders, airfoils and
                                        wings
                                    </Link>
                                </li>
                                <li data-name="2">
                                    <Link to={`${url}/iced-airfoils`}>
                                        Numerical Simulation on Morphing Wings
                                    </Link>
                                </li>
                                <li data-name="3">
                                    <Link to={`${url}/bio-fluids`}>
                                        Red Blood Cell Aggregation and Blood
                                        Viscosity in Microcirculation
                                    </Link>
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
            <Route path={`${path}/cylinder-and-airfoils`}>
                <CylindersAndAirFoils />
            </Route>
            <Route path={`${path}/iced-airfoils`}>
                <MorphedWings />
            </Route>
            <Route path={`${path}/bio-fluids`}>
                <BioFluids />
            </Route>
        </Switch>
    );
};

export default FluidDynamics;
