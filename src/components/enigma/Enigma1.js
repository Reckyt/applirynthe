import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../styles/css/enigma/Enigma1.css";
import play from "../../styles/assets/play.png";
import exorciste from "../../styles/assets/exorciste.mp3";
import Jigsaw from "../help/Jigsaw";

export default class Enigma1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnigma1Resolved: true,
      title: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  play = () => {
    document.getElementById("audio").play();
  };

  handleChange(event) {
    if (event.target.value.includes("*")) {
      return;
    }
    this.setState({ title: event.target.value });
  }

  render() {
    return (
      <div className="enigma1">
        <div className="instructions">
          <Jigsaw quote={"Quel est le film correspondant à cette musique ?"} />
        </div>
        <div className="div_play">
          <img
            className="play"
            src={play}
            alt="exorciste"
            onClick={this.play}
          />
          <audio id="audio" controls src={exorciste}></audio>
        </div>
        <div className="reponse">
          <input
            id="reponse"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          ></input>
        </div>
        <Link to="/map/Map12">
          <button
            type="submit"
            className="Monsters_Submit"
            onClick={this.submit}
          >
            Submit
          </button>
        </Link>
      </div>
    );
  }
}
