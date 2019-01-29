import React, { Component } from "react";
import "../App.css";
class Display extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="display">
          <h2>Player At Bat</h2>
          <p>Balls: {this.props.state.balls}</p>
          <p>Strikes: {this.props.state.strikes}</p>
          <p>Fouls: {this.props.state.fouls}</p>
          <p>Hits: {this.props.state.hits}</p>
        </div>
      </>
    );
  }
}

export default Display;
