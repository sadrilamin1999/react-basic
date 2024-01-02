import React, { Component } from "react";

export default class UnControlledForm extends Component {
  render() {
    return (
      <div>
        <form>
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
