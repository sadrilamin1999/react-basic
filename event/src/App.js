import React, { Component } from "react";

export default class App extends Component {
  state = {
    name: "",
  };
  clickHandler = (e) => console.log("Clicked");
  inputHandler = (e) => {
    this.setState({ name: e.target.value });
  };
  focusHandler = (e) => {
    console.log("focused");
  };
  blurHandler = (e) => {
    !this.state.name && alert("Empty");

    console.log("blured");
  };
  render() {
    return (
      <div>
        <h1>Event Handling</h1>
        <button onClick={this.clickHandler}>Click</button>
        <br />
        <input
          onChange={this.inputHandler}
          onFocus={this.focusHandler}
          onBlur={this.blurHandler}
          type="text"
          placeholder="Your name"
        />
        {this.state.name.length > 0 && <h2>Welcome, {this.state.name}</h2>}
      </div>
    );
  }
}
