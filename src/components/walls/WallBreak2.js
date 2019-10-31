import React, { Component } from "react";
import { Link } from 'react-router-dom'

import Jigsaw from "../help/Jigsaw";
import "../../styles/css/walls/WallBreak2.css";

export default class WallBreak2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timesYouClicked : 0,
      waterLevel : 0
    };
    this.spinWheel = this.spinWheel.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
}

  componentWillUnmount() {
    clearInterval(this.timerID);
}

tick() {
  if (this.state.waterLevel > 100) {
    document.getElementById('drowned').style.display="flex";
  } else {
    this.setState({waterLevel: this.state.waterLevel+5});
    document.getElementById('water').style.height=this.state.waterLevel+"vh";  
  }
}

  spinWheel() {
    document.getElementById('wheel').style.transform="rotate("+this.state.timesYouClicked*5+"deg)";
    this.setState({timesYouClicked : this.state.timesYouClicked + 1})
    if (this.state.timesYouClicked === 50) {
      document.getElementById('fadeOut').style.opacity="1";      
      document.getElementById('fadeOut').style.pointerEvents="auto";
      setTimeout(function() {
        window.location.href = "/map/Map23";
      }, 2000);
    }
  }


  render() {
    return (
      <div className="break2">
        <div className="instructionsWallBreak2">
          <Jigsaw
            quote={
              "Dépêche-toi de tourner l'écoutille... la salle se remplit d'eau, et j'ai cru voir un aileron..."
            }
          />
        </div>
        <div className="WallDoor">
          <div id="water" className="water"></div>
          <div id="fadeOut" className="fadeOut"></div>
          <div id="drowned" className="drowned">
              <p>Tu t'es noyé. Et fait bouffer par un requin. Dommage, hein.</p>
              <Link to="/"><button className="drownedButton">Recommencer ?</button></Link>
          </div>

          <div className="WallDoor-Door">
            <img onClick={this.spinWheel} alt="wheel" className="wheel" id="wheel" src={require('../../styles/assets/wheel.png')} />
          </div>
        </div>
      </div>
    );
  }
}
