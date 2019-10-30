import React, { Component } from "react";

import Jigsaw from '../help/Jigsaw';

import "../../styles/css/home/Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        < Jigsaw quote={"Je peux dire nombre de choses, comme parler de la situation économique du Soudan entre 1887 et 1956, période estimée phare par bon nombre d'historiens économiques spécialistes du continent africain."} />

        <a href="/map/Map13">Play</a>
      </div>
    );
  }
}
