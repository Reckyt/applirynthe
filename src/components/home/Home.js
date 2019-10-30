import React, { Component } from "react";

import jigsaw from "../../styles/assets/jigsaw.png";
import "../../styles/css/home/Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <img className="jigsaw" src={jigsaw} alt="jigsaw" />
        <input
          type="text"
          id="name"
          name="name"
          required
          minlength="4"
          maxlength="42"
          placeholder="Quel est ton nom mon mignon ?"
        />
        <button className="home_play">Viens jouer avec moi</button>
      </div>
    );
  }
}
