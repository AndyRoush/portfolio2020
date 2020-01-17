import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Nav from "./components/navbar/Nav";
import Bio from "./components/bio/Bio";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";

import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/bio" component={Bio} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/experience" component={Experience} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
