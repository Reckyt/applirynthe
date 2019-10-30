import React, { Component } from 'react';
import "../../styles/css/monsters/Monster1.css"

class Monsters extends Component{
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
    }

    check1 (){
        this.state.color1 ? document.getElementById("check1").style.backgroundColor = "red" :document.getElementById("check1").style.backgroundColor = "white"
        this.setState({color1: !this.state.color1})
        document.getElementById("checkTwo").checked = false
        document.getElementById("checkThree").checked = false
        document.getElementById("checkFour").checked = false
        document.getElementById("check2").style.backgroundColor = "white"
        document.getElementById("check3").style.backgroundColor = "white"
        document.getElementById("check4").style.backgroundColor = "white"
        this.setState({color2: true})
        this.setState({color3: true})
        this.setState({color4: true})
    }

    check2 (){
        this.state.color2 ? document.getElementById("check2").style.backgroundColor = "red" :document.getElementById("check2").style.backgroundColor = "white"
        this.setState({color2: !this.state.color2})
        document.getElementById("checkOne").checked = false
        document.getElementById("checkThree").checked = false
        document.getElementById("checkFour").checked = false
        document.getElementById("check1").style.backgroundColor = "white"
        document.getElementById("check3").style.backgroundColor = "white"
        document.getElementById("check4").style.backgroundColor = "white"
        this.setState({color1: true})
        this.setState({color3: true})
        this.setState({color4: true})
        
    }

    check3 (){
        this.state.color3 ? document.getElementById("check3").style.backgroundColor = "red" :document.getElementById("check3").style.backgroundColor = "white"
        this.setState({color3: !this.state.color3})
        document.getElementById("checkTwo").checked = false
        document.getElementById("checkOne").checked = false
        document.getElementById("checkFour").checked = false
        document.getElementById("check1").style.backgroundColor = "white"
        document.getElementById("check2").style.backgroundColor = "white"
        document.getElementById("check4").style.backgroundColor = "white"
        this.setState({color1: true})
        this.setState({color2: true})
        this.setState({color4: true})
        
    }

    check4 (){
        this.state.color4 ? document.getElementById("check4").style.backgroundColor = "red" :document.getElementById("check4").style.backgroundColor = "white"
        this.setState({color4: !this.state.color4})
        document.getElementById("checkTwo").checked = false
        document.getElementById("checkThree").checked = false
        document.getElementById("checkOne").checked = false
        document.getElementById("check1").style.backgroundColor = "white"
        document.getElementById("check2").style.backgroundColor = "white"
        document.getElementById("check3").style.backgroundColor = "white"
        this.setState({color1: true})
        this.setState({color2: true})
        this.setState({color3: true})
        
    }

    render(){
        return(
            <div className="Monsters">
                <div className="Monsters_Input" id="check1">
                    <input type="checkbox" onClick={this.check1}   id="checkOne" className="Monsters_Input_Check" />
                </div>
                <div className="Monsters_Input" id="check2">
                    <input type="checkbox" onClick={this.check2}  id="checkTwo" className="Monsters_Input_Check" />
                </div>
                <div className="Monsters_Input" id="check3">
                    <input type="checkbox" onClick={this.check3}   id="checkThree" className="Monsters_Input_Check" />
                </div>
                <div className="Monsters_Input" id="check4">
                    <input type="checkbox" onClick={this.check4}   id="checkFour" className="Monsters_Input_Check" />
                </div>
            </div>
        )
    }
}

export default Monsters