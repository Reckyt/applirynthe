import React, { Component } from "react";

import Jigsaw from "../help/Jigsaw";
import "../../styles/css/walls/WallBreak1.css";

export default class WallBreak1 extends Component {
  render() {
    return (
      <div className="break1">
        <div className="instructionsWallBreak1">
          <Jigsaw
            quote={
              "Tiens ce mur semble fragile... Peut-être que tu peux le casser. mais depêche toi car un monstre se rapproche !!!"
            }
          />
        </div>
      </div>
    );
  }
}
