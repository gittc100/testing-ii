import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import DashBoard from "./DashBoard/DashBoard.js";
import Display from "./Display/Display.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      balls: 0,
      strikes: 0,
      fouls: 0,
      hits: 0
    };
  }

  reset = () => {
    this.setState({
      ...this.state,
      balls: 0,
      strikes: 0,
      fouls: 0,
      hits: 0
    });
  };

  check = (item, name) => {
    let { strikes, balls } = this.state;
    console.log(item);
    if (strikes === 2 || balls === 3) {
      this.reset();
    } else {
      let val = item + 1;
      console.log(val);
      this.setState({
        ...this.state,
        [name]: val
      });
    }
  };

  // back = () => {
  //   return this.props.history.push("/");
  // };

  addStrike = event => {
    event.preventDefault();
    let name = "strikes";
    let { strikes } = this.state;
    this.check(strikes, name);
  };

  addBall = () => {
    let name = "balls";
    let { balls } = this.state;
    this.check(balls, name);
  };

  addFoul = () => {
    let name = "fouls";
    let { fouls } = this.state;
    this.check(fouls, name);
  };

  addHit = () => {
    let name = "hits";
    let { hits } = this.state;
    this.check(hits, name);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav className="navBar">
            <NavLink to="/" exact>
              Display
            </NavLink>
            <NavLink to="/dash-board">Dash Board</NavLink>
          </nav>
        </header>
        <main>
          <Route
            path="/"
            render={props => (
              <Display
                {...props}
                balls={this.state.balls}
                strikes={this.state.strikes}
                fouls={this.state.fouls}
                hits={this.state.hits}
              />
            )}
            exact
          />
          <Route
            path="/dash-board"
            render={props => (
              <DashBoard
                {...props}
                addStrike={this.addStrike}
                addBall={this.addBall}
                addFoul={this.addFoul}
                addHit={this.addHit}
              />
            )}
          />
        </main>
      </div>
    );
  }
}

export default App;
