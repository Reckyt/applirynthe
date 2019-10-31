import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../styles/css/walls/WallIncassable.css";
import Jigsaw from "../help/Jigsaw";
import ReturnMap from "./ReturnMap";

export default class WallIncassable extends Component {
  render() {
    return (
      <div className="wall">
        <div className="instructionsWall">
          <Jigsaw
            quote={"Ho !! un mur... Cela ne semble pas être le bon chemin..."}
          />
          <Link to="">
            <ReturnMap />
          </Link>
        </div>
      </div>
    );
  }
}
