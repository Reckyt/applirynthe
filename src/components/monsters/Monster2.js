import React, { Component } from "react";
import "../../styles/css/monsters/monster2.css";
import { Link } from "react-router-dom";
import Jigsaw from "../help/Jigsaw";

class Monsters2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color1: true,
      color2: true,
      color3: true,
      color4: true
    };
    this.check1 = this.check1.bind(this);
    this.check2 = this.check2.bind(this);
    this.check3 = this.check3.bind(this);
    this.check4 = this.check4.bind(this);
    this.submit = this.submit.bind(this);
  }

  check1() {
    this.state.color1
      ? (document.getElementById("check1").style.backgroundColor = "grey")
      : (document.getElementById("check1").style.backgroundColor = "black");
    this.setState({ color1: !this.state.color1 });
    document.getElementById("checkTwo").checked = false;
    document.getElementById("checkThree").checked = false;
    document.getElementById("checkFour").checked = false;
    document.getElementById("check2").style.backgroundColor = "black";
    document.getElementById("check3").style.backgroundColor = "black";
    document.getElementById("check4").style.backgroundColor = "black";
    this.setState({ color2: true });
    this.setState({ color3: true });
    this.setState({ color4: true });
  }

  check2() {
    this.state.color2
      ? (document.getElementById("check2").style.backgroundColor = "grey")
      : (document.getElementById("check2").style.backgroundColor = "black");
    this.setState({ color2: !this.state.color2 });
    document.getElementById("checkOne").checked = false;
    document.getElementById("checkThree").checked = false;
    document.getElementById("checkFour").checked = false;
    document.getElementById("check1").style.backgroundColor = "black";
    document.getElementById("check3").style.backgroundColor = "black";
    document.getElementById("check4").style.backgroundColor = "black";
    this.setState({ color1: true });
    this.setState({ color3: true });
    this.setState({ color4: true });
  }

  check3() {
    this.state.color3
      ? (document.getElementById("check3").style.backgroundColor = "grey")
      : (document.getElementById("check3").style.backgroundColor = "black");
    this.setState({ color3: !this.state.color3 });
    document.getElementById("checkTwo").checked = false;
    document.getElementById("checkOne").checked = false;
    document.getElementById("checkFour").checked = false;
    document.getElementById("check1").style.backgroundColor = "black";
    document.getElementById("check2").style.backgroundColor = "black";
    document.getElementById("check4").style.backgroundColor = "black";
    this.setState({ color1: true });
    this.setState({ color2: true });
    this.setState({ color4: true });
  }

  check4() {
    this.state.color4
      ? (document.getElementById("check4").style.backgroundColor = "grey")
      : (document.getElementById("check4").style.backgroundColor = "black");
    this.setState({ color4: !this.state.color4 });
    document.getElementById("checkTwo").checked = false;
    document.getElementById("checkThree").checked = false;
    document.getElementById("checkOne").checked = false;
    document.getElementById("check1").style.backgroundColor = "black";
    document.getElementById("check2").style.backgroundColor = "black";
    document.getElementById("check3").style.backgroundColor = "black";
    this.setState({ color1: true });
    this.setState({ color2: true });
    this.setState({ color3: true });
  }

  submit() {
    if (document.getElementById("checkThree").checked === true) {
      document.getElementById("continu").style.display = "flex";
    } else {
      document.getElementById("retour").style.display = "flex";
    }
  }

  render() {
    return (
      <div className="Monsters2">
        <div className="Monsters_None2" id="continu">
          <p>Quelle puissance, le Zombie es mort ... encore</p>
          <Link to="/map/Map1">
            <button>Continuer</button>
          </Link>
        </div>

        <div className="Monsters_None" id="retour">
          <p>Tu es désormais zombifié, dommaaaage !</p>
          <Link to="/">
            <button>Recommencer ?</button>
          </Link>
        </div>

        <div className="Monsters_Inputs">
          <div className="Possible_Answers">
            <div className="Monsters_Input1" id="check1">
              <p className="Monsters_Input_Text">
                Tu l'invites à manger un morceau
              </p>
              <input
                type="checkbox"
                onClick={this.check1}
                id="checkOne"
                className="Monsters_Input_Check"
                value="Ta belle-mère"
              />
            </div>

            <div className="Monsters_Input2" id="check2">
              <p className="Monsters_Input_Text">
                Il à l'air triste, un calin lui ferai du bien
              </p>
              <input
                type="checkbox"
                onClick={this.check2}
                id="checkTwo"
                className="Monsters_Input_Check"
              />
            </div>

            <div className="Monsters_Input3" id="check3">
              <p className="Monsters_Input_Text">
                Tu lui défonces le cerveau avec tes poings
              </p>
              <input
                type="checkbox"
                onClick={this.check3}
                id="checkThree"
                className="Monsters_Input_Check"
              />
            </div>

            <div className="Monsters_Input4" id="check4">
              <p className="Monsters_Input_Text">
                Tu lui plantes un pieu dans le coeur
              </p>
              <input
                type="checkbox"
                onClick={this.check4}
                id="checkFour"
                className="Monsters_Input_Check"
              />
            </div>
          </div>

          <div className="div_button">
            <button
              type="submit"
              className="Monsters_Submit"
              onClick={this.submit}
            >
              SUBMIT
            </button>
          </div>
        </div>

        <Jigsaw quote={"Un zombie est face à toi, que fas-tu ?"} />
      </div>
    );
  }
}

export default Monsters2;
