import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./src/components/Home/Home";
import About from "./src/components/About/About";

export default (
  <Switch>
    <Route conponent={Home} exact path="/" />
    <Route conponent={About} path="/about" />
  </Switch>
);
