import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import History from "../History/History";
import Contact from "../Contact/Contact";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="subnav" className="subnav_links">
          <Link to="/about">
            <h3>About</h3>
          </Link>

          <Link to="/about/history" className="subnav_links">
            <h3>History</h3>
          </Link>

          <Link to="about/contact" className="subnav_links">
            <h3>Contact</h3>
          </Link>
        </div>
        <div className="box">
          <Switch>
            <Route component={History} path="/about/history" />
            <Route component={Contact} path="/about/contact" />
            <Route></Route>
          </Switch>
        </div>
      </div>
    );
  }
}
