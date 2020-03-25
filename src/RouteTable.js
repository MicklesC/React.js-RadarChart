import React from "react";
// import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AssessmentTest from "./pages/AssessmentTest";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
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
