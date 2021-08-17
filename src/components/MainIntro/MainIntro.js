import React from "react";
import Biography from "../Biography/Biography";
import Contact from "../Contact/Contact";
import Landing from "../Landing/Landing";
import Publications from "../Publications/Publications";
import Research from "../Research/Research";

const MainIntro = () => {
    return (
        <div className="scrollControl">
            <Landing />
            <Biography />
            <Research />
            <Publications />
            <Contact />
        </div>
    );
};

export default MainIntro;
