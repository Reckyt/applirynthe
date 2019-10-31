import React, { Component } from "react";

import "../../styles/css/enigma/Enigma3.css";
import Jigsaw from '../help/Jigsaw'

export default class Enigma3 extends Component {
  render() {
    return (
    <div className="popcorn">
        <div className="instructionsEnigma3">
        <Jigsaw quote={"Si tu trouves une référence de film, tape le titre correspondant"} />
        </div>
    </div>
    );
  }
}
