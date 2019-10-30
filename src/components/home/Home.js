import React, { Component } from "react";
import { Link } from "react-router-dom";

<<<<<<< HEAD
import jigsaw from "../../styles/assets/jigsaw.png";
=======
import Jigsaw from '../help/Jigsaw';

>>>>>>> ba5ee8caebe9ca43c395eee82e847ffb3029b080
import "../../styles/css/home/Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
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
          <Link className="link_map" href="/map/Map13">
            <button className="home_play"> Viens jouer avec moi</button>
          </Link>
        </div>
=======
        < Jigsaw quote={"Je peux dire nombre de choses, comme parler de la situation économique du Soudan entre 1887 et 1956, période estimée phare par bon nombre d'historiens économiques spécialistes du continent africain."} />

        <a href="/map/Map13">Play</a>
>>>>>>> ba5ee8caebe9ca43c395eee82e847ffb3029b080
      </div>
    );
  }
}
