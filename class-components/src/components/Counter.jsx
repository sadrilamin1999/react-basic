import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
  };
  decrementHandler = () => {
    this.state.count > 0 && this.setState({ count: this.state.count - 1 });
  };
  incrementCounter = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <button onClick={this.decrementHandler}>Decrement</button>
        <span>{this.state.count}</span>
        <button onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}
