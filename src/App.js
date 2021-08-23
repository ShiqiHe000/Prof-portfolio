import "./scss/main.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Positions from "./components/BiographyCards/Positions";
import MainIntro from "./components/MainIntro/MainIntro";
import Education from "./components/BiographyCards/Education";
import InterestedFields from "./components/BiographyCards/InterestedFields";
import SoftwareDevelopment from "./components/SoftwareDevelopment/SoftwareDevelopment";
import FluidDynamics from "./components/FluidDynamics/FluidDynamics";
import JournalArticles from "./components/Publications/Journals/JournalArticles";
import NotMatch from "./components/NotMatch/NotMatch";
import JournalIssues from "./components/Publications/Journals/JournalIssues";
import Books from "./components/Publications/Books/Books";
import BookChapters from "./components/Publications/Books/BookChapters";

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
                    <Route exact path="/software-development">
                        <SoftwareDevelopment />
                    </Route>
                    <Route exact path="/fluid-dynamics">
                        <FluidDynamics />
                    </Route>
                    <Route exact path="/publications/journalArticles">
                        <JournalArticles />
                    </Route>
                    <Route exact path="/publications/journalIssues">
                        <JournalIssues />
                    </Route>
                    <Route exact path="/publications/books">
                        <Books />
                    </Route>
                    <Route exact path="/publications/bookChapters">
                        <BookChapters />
                    </Route>
                    <Route path="*">
                        <NotMatch />
                    </Route>
                </Switch>
            </Router>
        </>
    );
};

export default App;
