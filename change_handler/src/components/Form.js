import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changedvalue: "",
    };
  }
  changeHandler = (e) => {
    this.setState({
      changedvalue: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.changeHandler} />
        <p>{this.state.changedvalue}</p>
      </div>
    );
  }
}
