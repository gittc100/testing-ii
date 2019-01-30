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
          <h2 data-testid="title">Player At Bat</h2>
          <label>Balls:</label>
          <p data-testid="balls">{this.props.balls}</p>
          <label>Strikes:</label>
          <p data-testid="strikes">{this.props.strikes}</p>
          <label>Fouls:</label>
          <p data-testid="fouls">{this.props.fouls}</p>
          <label>Hits:</label>
          <p data-testid="hits">{this.props.hits}</p>
        </div>
      </>
    );
  }
}

export default Display;
