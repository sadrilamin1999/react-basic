import React, { Component } from "react";
import Bio from "./bio/Bio";
import Skills from "./bio/Skills";
import Links from "./bio/Links";

export default class Profile extends Component {
  render() {
    return (
      <div className="bio-container">
        <Bio />
        <Skills />
        <Links />
      </div>
    );
  }
}
