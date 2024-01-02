import React, { Component } from "react";
import UnControlledForm from "./components/form/UnControlledForm";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Working with react forms</h1>
        {/* <Inputs /> */}
        <UnControlledForm />
      </div>
    );
  }
}
