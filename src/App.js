import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/HomePage";
import Contact from "./pages/ContactPage";
// import HomePage from "../../pages/HomePage";
// import AssessmentTest from "../../pages/AssessmentTest";
// import ContactPage from "../../pages/ContactPage";
// import LoginPage from "../../pages/LoginPage";
// import { withStyles } from "@material-ui/core/styles";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
