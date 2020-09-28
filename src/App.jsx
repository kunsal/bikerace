import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavbar from "./common/AppNavbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { navigationLinks } from './common/constants/navigation-links';

class App extends Component {
  render() {
    return (
      <Router>
        <AppNavbar containerized />
        <Switch>
          {navigationLinks.map(page => (
            <Route path={page.link} component={page.component} key={page.link} exact={page.exact} />
          ))};
        </Switch>
      </Router>
    );
  }
}

export default App;
