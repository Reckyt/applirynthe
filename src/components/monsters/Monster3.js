import React, { Component } from 'react';
import "../../styles/css/monsters/monster3.css";
import { Link } from 'react-router-dom'
import Jigsaw from '../help/Jigsaw'

class Monsters3 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            color1: true,
            color2: true,
            color3: true,
            color4: true

        }
        this.check1 = this.check1.bind(this)
        this.check2 = this.check2.bind(this)
        this.check3 = this.check3.bind(this)
        this.check4 = this.check4.bind(this)
        this.submit = this.submit.bind(this)
    }

    check1 (){
        this.state.color1 ? document.getElementById("check1").style.backgroundColor = "grey" :document.getElementById("check1").style.backgroundColor = "black"
        this.setState({color1: !this.state.color1})
        document.getElementById("checkTwo").checked = false
        document.getElementById("checkThree").checked = false
        document.getElementById("checkFour").checked = false
        document.getElementById("check2").style.backgroundColor = "black"
        document.getElementById("check3").style.backgroundColor = "black"
        document.getElementById("check4").style.backgroundColor = "black"
        this.setState({color2: true})
        this.setState({color3: true})
        this.setState({color4: true})
    }

    check2 (){
        this.state.color2 ? document.getElementById("check2").style.backgroundColor = "grey" :document.getElementById("check2").style.backgroundColor = "black"
        this.setState({color2: !this.state.color2})
        document.getElementById("checkOne").checked = false
        document.getElementById("checkThree").checked = false
        document.getElementById("checkFour").checked = false
        document.getElementById("check1").style.backgroundColor = "black"
        document.getElementById("check3").style.backgroundColor = "black"
        document.getElementById("check4").style.backgroundColor = "black"
        this.setState({color1: true})
        this.setState({color3: true})
        this.setState({color4: true})
        
    }

    check3 (){
        this.state.color3 ? document.getElementById("check3").style.backgroundColor = "grey" :document.getElementById("check3").style.backgroundColor = "black"
        this.setState({color3: !this.state.color3})
        document.getElementById("checkTwo").checked = false
        document.getElementById("checkOne").checked = false
        document.getElementById("checkFour").checked = false
        document.getElementById("check1").style.backgroundColor = "black"
        document.getElementById("check2").style.backgroundColor = "black"
        document.getElementById("check4").style.backgroundColor = "black"
        this.setState({color1: true})
        this.setState({color2: true})
        this.setState({color4: true})
        
    }

    check4 (){
        this.state.color4 ? document.getElementById("check4").style.backgroundColor = "grey" :document.getElementById("check4").style.backgroundColor = "black"
        this.setState({color4: !this.state.color4})
        document.getElementById("checkTwo").checked = false
        document.getElementById("checkThree").checked = false
        document.getElementById("checkOne").checked = false
        document.getElementById("check1").style.backgroundColor = "black"
        document.getElementById("check2").style.backgroundColor = "black"
        document.getElementById("check3").style.backgroundColor = "black"
        this.setState({color1: true})
        this.setState({color2: true})
        this.setState({color3: true})
        
    }

    submit() {
        if (document.getElementById("checkOne").checked === true) {
            document.getElementById("continu").style.display = "flex";
        } else {
            document.getElementById("retour").style.display = "flex"
        }

    }

    render(){
        return(
            <div className="Monsters3">
                <Jigsaw quote={"Tu rencontres Dracula dans la maison. Quelle décision prends-tu ?"}/>
                <div className="Monsters_None" id="continu">
                    <Link to="/map/Map17"><button>CONTINUE</button></Link>
                </div>
                <div className="Monsters_None" id="retour">
                    <p>VOUS ETES MORT !!</p>
                    <Link to="/"><button>MENU</button></Link>
                </div>
                <div className="Monsters_Input1" id="check1">
                    <p className="Monsters_Input_Text">Tu lui plantes un pieu dans le coeur</p>
                    <input type="checkbox" onClick={this.check1}   id="checkOne" className="Monsters_Input_Check" value="Ta belle-mère"/>
                    
                </div>
                <div className="Monsters_Input2" id="check2">
                <p className="Monsters_Input_Text">Tu t'évanouis</p>
                    <input type="checkbox" onClick={this.check2}  id="checkTwo" className="Monsters_Input_Check" />
                </div>
                <div className="Monsters_Input3" id="check3">
                <p className="Monsters_Input_Text">Tu appelles Kévin qui le "casse en deux"</p>
                    <input type="checkbox" onClick={this.check3}   id="checkThree" className="Monsters_Input_Check" />
                </div>
                <div className="Monsters_Input4" id="check4">
                <p className="Monsters_Input_Text">Tu le combats a l'épée</p>
                    <input type="checkbox" onClick={this.check4}   id="checkFour" className="Monsters_Input_Check" />
                </div>
                <div className="div_button">
                    <button type="submit" className="Monsters_Submit" onClick={this.submit}>SUBMIT</button>
                </div>
            </div>
        )
    }
}

export default Monsters3
