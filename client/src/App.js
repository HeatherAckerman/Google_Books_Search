import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Search from "./pages/Search";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
        </div>
      </Router>
    );
  }
}

export default App;
