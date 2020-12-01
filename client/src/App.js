import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Header from "./components/Header";
import Footer from "./components/Footer";


class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
