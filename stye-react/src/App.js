import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";

const myHeader = {
  color: "blue",
  fontSize: "48px",
};

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 style={myHeader}>Hello React style app</h1>
        <Button />
      </div>
    );
  }
}
