import React, { Component } from "react";

export default class UnControlledForm extends Component {
  submitHandler = (e) => {
    e.preventDefault();
    const data = {};
    data.name = e.target.name.value;
    data.email = e.target.email.value;
    data.password = e.target.password.value;
    console.log(data);
    e.target.reset();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            className="form-control my-2"
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <input
            className="form-control my-2"
            type="email"
            name="email"
            placeholder="xyx@gmail.com"
          />
          <input
            className="form-control my-2"
            type="password"
            name="password"
            placeholder="**** "
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
