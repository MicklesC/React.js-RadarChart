import React from "react";
// import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./js/pages/HomePage";
import AssessmentTest from "./js/pages/AssessmentTest";
import ContactPage from "./js/pages/ContactPage";
import LoginPage from "./js/pages/LoginPage";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const routes = (
  <React.Fragment>
    <Route path="/">
      <HomePage />
    </Route>
    <Route path="Assessment">
      <AssessmentTest />
    </Route>
    <Route path="Contact">
      <ContactPage />
    </Route>
    <Route path="Login">
      <LoginPage />
    </Route>
  </React.Fragment>
);
