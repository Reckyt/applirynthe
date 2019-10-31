import React, { Component } from "react";

import Jigsaw from "../help/Jigsaw";
import "../../styles/css/walls/WallBreak2.css";

export default class WallBreak2 extends Component {
  render() {
    return (
      <div className="break2">
        <div className="instructionsWallBreak2">
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
