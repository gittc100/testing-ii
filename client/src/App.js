import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import DashBoard from "./DashBoard/DashBoard.js";
import Display from "./Display/Display.js";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink to="/" exact>
              Display
            </NavLink>
            <NavLink to="/dash-board">Dash Board</NavLink>
          </nav>
        </header>
        <main>
          <Route path="/" component={Display} exact/>
          <Route path="/dash-board" component={DashBoard} />
        </main>
      </div>
    );
  }
}

export default App;
