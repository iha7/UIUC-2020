import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddData from "./components/add-Data.component";
import appComponent from "./components/app.component";
import appList from "./components/app-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/home" className="navbar-brand">
            Money Talks
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home Page
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add Data
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={appList} />
            <Route exact path="/add" component={AddData} />
            <Route path="/home/:id" component={appComponent} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;