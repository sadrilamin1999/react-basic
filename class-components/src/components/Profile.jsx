import React, { Component } from "react";
import Bio from "./bio/Bio";
import Skills from "./bio/Skills";
import Links from "./bio/Links";

export default class Profile extends Component {
  sadril = {
    name: "Sadril Amin",
    title: "Software Developer",
    skills: ["Java", "Phyton", "Dango"],
  };
  render() {
    return (
      <div className="bio-container">
        <Bio name={this.sadril.name} title={this.sadril.title} />
        <Skills skills={this.sadril.skills} />
        <Links />
      </div>
    );
  }
}
