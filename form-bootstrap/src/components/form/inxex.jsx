import React, { Component } from "react";

export default class Inputs extends Component {
  state = {
    name: "",
    country: "",
    bio: "",
    birthDay: "",
    gender: "",
    agree: false,
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  checkHandler = (e) => {
    this.setState({
      agree: e.target.checked,
    });
  };
  render() {
    const { name, country, bio, birthDay, agree } = this.state;
    return (
      <div>
        <input
          onChange={this.changeHandler}
          className="form-control my-2"
          name="name"
          value={name}
          type="text"
          placeholder="Enter your name"
        />
        <select
          onChange={this.changeHandler}
          className="form-control my-2"
          name="country"
          value={country}
        >
          <option>Select Country</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Paskithan">Paskithan</option>
          <option value="Turkey">Turkey</option>
          <option value="Russia">Russia</option>
        </select>
        <textarea
          onChange={this.changeHandler}
          className="form-control my-2"
          name="bio"
          value={bio}
          type="text"
          placeholder="Write about your self"
        ></textarea>
        <input
          onChange={this.changeHandler}
          className="form-control my-2"
          name="birthDay"
          value={birthDay}
          type="date"
        />
        <div>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={this.changeHandler}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={this.changeHandler}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="other"
            onChange={this.changeHandler}
          />
          Other
        </div>
        <div>
          <input
            type="checkbox"
            name="agree"
            checked={agree}
            onChange={this.checkHandler}
          />{" "}
          I am agree to all terms.
        </div>
        <button onClick={() => console.log(this.state)}>Submit</button>
      </div>
    );
  }
}
