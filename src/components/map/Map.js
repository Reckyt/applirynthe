import React, { Component } from "react";
import {Link} from 'react-router-dom';

import '../../styles/css/map/Map.css';

export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.clickOnWall1=this.clickOnWall1.bind(this);
        this.clickOnWall2=this.clickOnWall2.bind(this);
        this.clickOnWall3=this.clickOnWall3.bind(this);
        this.clickOnWall4=this.clickOnWall4.bind(this);
        this.clickOnWall5=this.clickOnWall5.bind(this);
        this.clickOnWall6=this.clickOnWall6.bind(this);
        this.back=this.back.bind(this);
    }

    componentDidMount() {
        this.setState({location: this.props.position})
    }

    clickOnWall1() {
        document.getElementById("retour1").style.display = "flex";
        }
    
    clickOnWall2() {
        document.getElementById("retour2").style.display = "flex";
        }

    clickOnWall3() {
        document.getElementById("retour3").style.display = "flex";
        }
    
    clickOnWall4() {
        document.getElementById("retour4").style.display = "flex";
        }

    clickOnWall5() {
        document.getElementById("retour5").style.display = "flex";
        }
        
    clickOnWall6() {
        document.getElementById("retour6").style.display = "flex";
        }

    back() {
        document.getElementById("retour5").style.display = "none";
    }

    render() {
        return (
            <div className="Map">
            <div className="parent">

                <div className="div1" >
                    {(this.props.location === 1) 
                        ? <img className="Map-Icon" alt="You" src={require('../../styles/assets/userAvatar.png')} /> 
                        : (this.props.location === 6 || this.props.location === 2) 
                            ? <a href="/monsters/Monster2"> <img className="Map-Icon" alt="Case 1" src={require('../../styles/assets/zombie.png')} /> </a>
                            : "" }
                </div>

                <div className="div2" onClick={this.clickOnWall1}>  
                    {(this.props.location === 2) 
                        ? <img className="Map-Icon" alt="You" src={require('../../styles/assets/userAvatar.png')} /> 
                        : (this.props.location === 1 || this.props.location === 3 || this.props.location === 7) 
                            ? <a href="/map/Map2"><img className="Map-Icon" alt="Case 1" src={require('../../styles/assets/questionMark.png')} /></a>
                            : "" }
                </div>

                <div className="div3">  
                    {(this.props.location === 3) 
                        ? <img className="Map-Icon" alt="You" src={require('../../styles/assets/userAvatar.png')} /> 
                        : (this.props.location === 2 || this.props.location === 4 || this.props.location === 8)
                            ? <a href="/map/Map3"><img className="Map-Icon" alt="Case 1" src={require('../../styles/assets/questionMark.png')} /></a>
                            : "" }
                </div>

                <div className="div4">  
                    {(this.props.location === 4) 
                        ? <img className="Map-Icon" alt="You" src={require('../../styles/assets/userAvatar.png')} /> 
                        : (this.props.location === 3 || this.props.location === 5 || this.props.location === 9)
                            ? <a href="/monsters/Monster1"><img className="Map-Icon" alt="Case 1" src={require('../../styles/assets/alienIcon.png')} /></a>
                            : "" }
                </div>

                <div className="div5">  
                    {(this.props.location === 5) 
                        ? <img className="Map-Icon" alt="You" src={require('../../styles/assets/userAvatar.png')} /> 
                        : (this.props.location === 4 || this.props.location === 10)
                            ? <a href="/map/Map5"><img className="Map-Icon" alt="Case 1" src={require('../../styles/assets/questionMark.png')} /></a>
                            : "" }                
                </div>

                <div className="div6">  
                    {(this.props.location === 6) 
                        ? <img className="Map-Icon" alt="You" src={require('../../styles/assets/userAvatar.png')} /> 
                        : (this.props.location === 1 || this.props.location === 7 || this.props.location === 11)
                            ? <a href="/map/Map6"><img className="Map-Icon" alt="Case 1" src={require('../../styles/assets/questionMark.png')} /></a>
                            : "" }
                </div>

                <div className="div7">  
                    {(this.props.location === 7) 
                        ? <img className="Map-Icon" alt="You" src={require('../../styles/assets/userAvatar.png')} /> 
                        : (this.props.location === 2 || this.props.location === 6 || this.props.location === 8 || this.props.location === 12)
                            ? <a href="/map/Map7"><img className="Map-Icon" alt="Case 1" src={require('../../styles/assets/questionMark.png')} /></a>
                            : "" }
                </div>

                <div className="div8">  
                    {(this.props.location === 8) 
                        ? <img className="Map-Icon" alt="You" src={require('../../styles/assets/userAvatar.png')} /> 
                        : (this.props.location === 3 || this.props.location === 7 || this.props.location === 9 || this.props.location === 13)
                            ? <a href="/enigma/Enigma1"><img className="Map-Icon" alt="Case 1" src={require('../../styles/assets/questionMark.png')} /></a>
                            : "" }
                </div>

                <div className="div9" onClick={this.clickOnWall2}>  
                    {(this.props.location === 9) 
                        ? <img className="Map-Icon" alt="You" src={require('../../styles/assets/userAvatar.png')} /> 
                        : (this.props.location === 4 || this.props.location === 8 || this.props.location === 10 || this.props.location === 14)
                            ? <img className="Map-Icon" alt="Case 1" src={require('../../styles/assets/wall.png')} />
                            : "" }
                </div>

                <div className="div10"> 
                    {(this.props.location === 10) 
                        ? <img className="Map-Icon" alt="You" src={require('../../styles/assets/userAvatar.png')} /> 
                        : (this.props.location === 5 || this.props.location === 9 || this.props.location === 15)
                            ? <a href="/walls/WallBreak1"><img className="Map-Icon" alt="Case 1" src={require('../../styles/assets/wall.png')} /></a>
                            : "" }
                </div>

                <div className="div11" onClick={this.clickOnWall3}> 
                    {(this.props.location === 11) 
                        ? <img className="Map-Icon" alt="You" src={require('../../styles/assets/userAvatar.png')} /> 
                        : (this.props.location === 6 || this.props.location === 16 || this.props.location === 12)
                            ? <a href="/map/Map11"><img className="Map-Icon" alt="Case 1" src={require('../../styles/assets/questionMark.png')} /></a>
                            : "" }
                </div>

                <div className="div12">
                    {(this.props.location === 12) 
                        ? <img className="Map-Icon" alt="You" src={require('../../styles/assets/userAvatar.png')} /> 
                        : (this.props.location === 11 || this.props.location === 7 || this.props.location === 13 || this.props.location === 17)
                            ? <a href="/map/Map12"><img className="Map-Icon" alt="Case 1" src={require('../../styles/assets/questionMark.png')} /></a>
                            : "" }
                </div>

                <div className="div13">
                    {(this.props.location === 13) 
                        ? <img className="Map-Icon" alt="You" src={require('../../styles/assets/userAvatar.png')} /> 
                        : (this.props.location === 12 || this.props.location === 8 || this.props.location === 14 || this.props.location === 18)
                            ? <a href="/map/Map13"><img className="Map-Icon" alt="Case 1" src={require('../../styles/assets/questionMark.png')} /></a>
                            : "" }
                </div>

                <div className="div14" onClick={this.clickOnWall4}>
                    {(this.props.location === 14) 
                        ? <img className="Map-Icon" alt="You" src={require('../../styles/assets/userAvatar.png')} /> 
                        : (this.props.location === 13 || this.props.location === 9 || this.props.location === 15 || this.props.location === 19)
                            ? <img className="Map-Icon" alt="Case 1" src={require('../../styles/assets/wall.png')} />
                            : "" }
                </div>

                <div className="div15">
                    {(this.props.location === 15) 
                        ? <img className="Map-Icon" alt="You" src={require('../../styles/assets/userAvatar.png')} /> 
                        : (this.props.location === 14 || this.props.location === 10 || this.props.location === 20)
                            ? <a href="/map/Map15"><img className="Map-Icon" alt="Case 1" src={require('../../styles/assets/questionMark.png')} /></a>
                            : "" }    
                </div>

                <div className="div16">
                    {(this.props.location === 16) 
                        ? <img className="Map-Icon" alt="You" src={require('../../styles/assets/userAvatar.png')} /> 
                        : (this.props.location === 11 || this.props.location === 17 || this.props.location === 21)
                            ? <a href="/map/Map16"><img className="Map-Icon" alt="Case 1" src={require('../../styles/assets/questionMark.png')} /></a>
                            : "" }    
                </div>

                <div className="div17">
                    {(this.props.location === 17) 
                        ? <img className="Map-Icon" alt="You" src={require('../../styles/assets/userAvatar.png')} /> 
                        : (this.props.location === 12 || this.props.location === 16 || this.props.location === 18 || this.props.location === 22)
                            ? <a href="/monsters/Monster3"><img className="Map-Icon" alt="Case 1" src={require('../../styles/assets/questionMark.png')} /></a>
                            : "" }
                </div>

                <div className="div18" onClick={this.clickOnWall5}>
                    {(this.props.location === 18) 
                        ? <img className="Map-Icon" alt="You" src={require('../../styles/assets/userAvatar.png')} /> 
                        : (this.props.location === 13 || this.props.location === 17 || this.props.location === 19 || this.props.location === 23)
                            ? <img className="Map-Icon" alt="Case 1" src={require('../../styles/assets/wall.png')} />
                            : "" }
                </div>

                <div className="div19" onClick={this.clickOnWall6}>
                    {(this.props.location === 19) 
                        ? <img className="Map-Icon" alt="You" src={require('../../styles/assets/userAvatar.png')} /> 
                        : (this.props.location === 14 || this.props.location === 18 || this.props.location === 20 || this.props.location === 24)
                            ? <img className="Map-Icon" alt="Case 1" src={require('../../styles/assets/wall.png')} />
                            : "" }
                </div>

                <div className="div20">
                    {(this.props.location === 20) 
                        ? <img className="Map-Icon" alt="You" src={require('../../styles/assets/userAvatar.png')} /> 
                        : (this.props.location === 15 || this.props.location === 19 || this.props.location === 25)
                            ? <a href="/map/Map20"><img className="Map-Icon" alt="Case 1" src={require('../../styles/assets/questionMark.png')} /></a>
                            : "" }
                </div>

                <div className="div21">
                    {(this.props.location === 21) 
                        ? <img className="Map-Icon" alt="You" src={require('../../styles/assets/userAvatar.png')} /> 
                        : (this.props.location === 16 || this.props.location === 22)
                            ? <a href="/map/Map21"><img className="Map-Icon" alt="Case 1" src={require('../../styles/assets/questionMark.png')} /></a>
                            : "" }
                </div>

                <div className="div22">
                    {(this.props.location === 22) 
                        ? <img className="Map-Icon" alt="You" src={require('../../styles/assets/userAvatar.png')} /> 
                        : (this.props.location === 21 || this.props.location === 17 || this.props.location === 23)
                            ? <a href="/map/Map22"><img className="Map-Icon" alt="Case 1" src={require('../../styles/assets/questionMark.png')} /></a>
                            : "" } 
                </div>

                <div className="div23">
                    {(this.props.location === 23) 
                        ? <img className="Map-Icon" alt="You" src={require('../../styles/assets/userAvatar.png')} /> 
                        : (this.props.location === 22 || this.props.location === 18 || this.props.location === 24)
                            ? <a href="/walls/WallBreak2"><img className="Map-Icon" alt="Case 1" src={require('../../styles/assets/wall.png')} /></a>
                            : "" } 
                </div>

                <div className="div24">
                    {(this.props.location === 24) 
                        ? <img className="Map-Icon" alt="You" src={require('../../styles/assets/userAvatar.png')} /> 
                        : (this.props.location === 23 || this.props.location === 19 || this.props.location === 25)
                            ? <a href="/enigma/Enigma3"><img className="Map-Icon" alt="Case 1" src={require('../../styles/assets/questionMark.png')} /></a>
                            : "" } 
                </div>

                <div className="div25">
                {(this.props.location === 25) 
                        ? <img className="Map-Icon" alt="You" src={require('../../styles/assets/userAvatar.png')} /> 
                        : (this.props.location === 24 || this.props.location === 20)
                            ? <a href="/exit/Exit"><img className="Map-Icon" alt="Case 1" src={require('../../styles/assets/exit.png')} /></a>
                            : "" } 
                </div>
                <div className="backWhereYouFrom" id="retour1">
                    <p>Ho mince, un mur...</p>
                    <Link to="/">
                        <button>Revenir en arrière</button>
                    </Link>
                </div>
                <div className="backWhereYouFrom" id="retour2">
                    <p>Ho mince, un mur...</p>
                    <Link to="/">
                        <button>Revenir en arrière</button>
                    </Link>
                </div>
                <div className="backWhereYouFrom" id="retour3">
                    <p>Ho mince, un mur...</p>
                    <Link to="/">
                        <button>Revenir en arrière</button>
                    </Link>
                </div>
                <div className="backWhereYouFrom" id="retour4">
                    <p>Ho mince, un mur...</p>
                        <button onClick={this.back}>Revenir en arrière</button>
                </div>
                <div className="backWhereYouFrom" id="retour5">
                    <p>Ho mince, un mur...</p>
                        <button>Revenir en arrière</button>
                </div>
                <div className="backWhereYouFrom" id="retour6">
                    <p>Ho mince, un mur...</p>
                    <Link to="/">
                        <button>Revenir en arrière</button>
                    </Link>
                </div>
                </div>
            </div>  
        );  
    }
}

