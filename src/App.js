import "./scss/main.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Positions from "./components/BiographyCards/Positions";
import MainIntro from "./components/MainIntro/MainIntro";
import Education from "./components/BiographyCards/Education";
import InterestedFields from "./components/BiographyCards/InterestedFields";

library.add(fab);

const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <MainIntro />
                    </Route>
                    <Route exact path="/positions">
                        <Positions />
                    </Route>
                    <Route exact path="/education">
                        <Education />
                    </Route>
                    <Route exact path="/fieldsOfInterest">
                        <InterestedFields />
                    </Route>
                </Switch>
            </Router>
        </>
    );
};

export default App;
