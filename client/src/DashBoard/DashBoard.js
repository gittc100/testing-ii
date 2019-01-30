import React, { Component } from "react";
import "../App.css";
class DashBoard extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <>
        <div className="dash">
          <h2>Player At Bat: Dash Board</h2>
          <button onClick={this.props.addStrike}>Strike!</button>
          <button onClick={this.props.addBall}>Ball!</button>
          <button onClick={this.props.addFoul}>Foul!</button>
          <button onClick={this.props.addHit}>Hit!</button>
        </div>
      </>
    );
  }
}

export default DashBoard;
