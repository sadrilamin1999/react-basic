import React, { Component } from "react";

export default class App extends Component {
  state = {
    count: 0,
  };

  intervalId = null;

  decrementHandler = () => {
    this.state.count > 0 && this.setState({ count: this.state.count - 1 });
  };
  incrementHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };

  startTimer = () => {
    if (this.state.count > 0 && !this.intervalId) {
      this.intervalId = setInterval(() => {
        this.setState({ count: this.state.count - 1 }, () => {
          if (this.state.count === 0) {
            alert("Timer finished");
            clearInterval(this.intervalId);
            this.intervalId = null;
          }
        });
      }, 1000);
    }
  };

  stopTimer = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  };

  resetTimer = () => {
    this.setState({ count: 0 });
    clearInterval(this.intervalId);
    this.intervalId = null;
  };
  render() {
    return (
      <div>
        <h1>Simple Timer</h1>
        <div className="container">
          <button onClick={this.decrementHandler}>-</button>
          <span>{this.state.count}</span>
          <button onClick={this.incrementHandler}>+</button>
        </div>
        <div className="container">
          <button onClick={this.startTimer}>Start</button>
          <button onClick={this.stopTimer}>Stop</button>
          <button>Reset</button>
        </div>
      </div>
    );
  }
}
