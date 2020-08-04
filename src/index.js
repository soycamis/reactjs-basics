import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from "./pages/Index";
import BadgeNew from "./pages/BadgeNew";
import Badges from "./pages/Badges";

import "./index.css";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/reactjs-basics/" component={Index} />
        <Route exact path="/reactjs-basics/badges" component={Badges} />
        <Route exact path="/reactjs-basics/badges/new" component={BadgeNew} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
