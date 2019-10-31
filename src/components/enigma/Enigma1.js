import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../styles/css/enigma/Enigma1.css";
import play from "../../styles/assets/play.png";
import exorciste from "../../styles/assets/exorciste.mp3";

export default class Enigma1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnigma1Resolved: true
    };
  }

  play = () => {
    document.getElementById("audio").play();
  };

  render() {
    return (
      <div className="enigma1">
        <div className="div_play">
          <img
            className="play"
            src={play}
            alt="exorciste"
            onClick={this.play}
          />
          <audio id="audio" controls src={exorciste}></audio>
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
