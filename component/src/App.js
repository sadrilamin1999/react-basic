import React, { Component } from "react";
import RegularComponent from "./components/RegularComponent";
import PureComponent from "./components/PureComponent";

export default class App extends Component {
  state = {
    name: "Sadril",
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Sadril",
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h1>Welcome to React</h1>
        <RegularComponent name={this.state.name} />
        <PureComponent name={this.state.name} />
      </div>
    );
  }
}
