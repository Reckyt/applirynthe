import React, { Component } from "react";
import '../../styles/css/map/Map.css';

export default class Map extends Component {

    componentDidMount() {
        this.setState({location: this.props.position})
    }

    render() {
        return (
            <div className="parent">

                <div className="div1">
                    {(this.props.location === 1) 
                        ? "YOU" 
                        : (this.props.location === 6 || this.props.location === 2) 
                            ? <a href="/map/Map1">go</a>
                            : "go" }
                </div>

                <div className="div2">  
                    {(this.props.location === 2) 
                        ? "YOU" 
                        : (this.props.location === 1 || this.props.location === 3 || this.props.location === 7) 
                            ? <a href="/map/Map2">go</a>
                            : "go" }
                </div>

                <div className="div3">  
                    {(this.props.location === 3) 
                        ? "YOU" 
                        : (this.props.location === 2 || this.props.location === 4 || this.props.location === 8)
                            ? <a href="/map/Map3">go</a>
                            : "go" }
                </div>

                <div className="div4">  
                    {(this.props.location === 4) 
                        ? "YOU" 
                        : (this.props.location === 3 || this.props.location === 5 || this.props.location === 9)
                            ? <a href="/map/Map4">go</a>
                            : "go" }
                </div>

                <div className="div5">  
                    {(this.props.location === 5) 
                        ? "YOU" 
                        : (this.props.location === 4 || this.props.location === 10)
                            ? <a href="/map/Map5">go</a>
                            : "go" }                
                </div>

                <div className="div6">  
                    {(this.props.location === 6) 
                        ? "YOU" 
                        : (this.props.location === 1 || this.props.location === 7 || this.props.location === 11)
                            ? <a href="/map/Map6">go</a>
                            : "go" }
                </div>

                <div className="div7">  
                    {(this.props.location === 7) 
                        ? "YOU" 
                        : (this.props.location === 2 || this.props.location === 6 || this.props.location === 8 || this.props.location === 12)
                            ? <a href="/map/Map7">go</a>
                            : "go" }
                </div>

                <div className="div8">  
                    {(this.props.location === 8) 
                        ? "YOU" 
                        : (this.props.location === 3 || this.props.location === 7 || this.props.location === 9 || this.props.location === 13)
                            ? <a href="/map/Map8">go</a>
                            : "go" }
                </div>

                <div className="div9">  
                    {(this.props.location === 9) 
                        ? "YOU" 
                        : (this.props.location === 4 || this.props.location === 8 || this.props.location === 10 || this.props.location === 14)
                            ? <a href="/map/Map9">go</a>
                            : "go" }
                </div>

                <div className="div10"> 
                    {(this.props.location === 10) 
                        ? "YOU" 
                        : (this.props.location === 5 || this.props.location === 9 || this.props.location === 15)
                            ? <a href="/map/Map10">go</a>
                            : "go" }
                </div>

                <div className="div11"> 
                    {(this.props.location === 11) 
                        ? "YOU" 
                        : (this.props.location === 6 || this.props.location === 16 || this.props.location === 12)
                            ? <a href="/map/Map11">go</a>
                            : "go" }
                </div>

                <div className="div12">
                    {(this.props.location === 12) 
                        ? "YOU" 
                        : (this.props.location === 11 || this.props.location === 7 || this.props.location === 13 || this.props.location === 17)
                            ? <a href="/map/Map12">go</a>
                            : "go" }
                </div>

                <div className="div13">
                    {(this.props.location === 13) 
                        ? "YOU" 
                        : (this.props.location === 12 || this.props.location === 8 || this.props.location === 14 || this.props.location === 18)
                            ? <a href="/map/Map13">go</a>
                            : "go" }
                </div>

                <div className="div14">
                    {(this.props.location === 14) 
                        ? "YOU" 
                        : (this.props.location === 13 || this.props.location === 9 || this.props.location === 15 || this.props.location === 19)
                            ? <a href="/map/Map14">go</a>
                            : "go" }
                </div>

                <div className="div15">
                    {(this.props.location === 15) 
                        ? "YOU" 
                        : (this.props.location === 14 || this.props.location === 10 || this.props.location === 20)
                            ? <a href="/map/Map15">go</a>
                            : "go" }    
                </div>

                <div className="div16">
                    {(this.props.location === 16) 
                        ? "YOU" 
                        : (this.props.location === 11 || this.props.location === 17 || this.props.location === 21)
                            ? <a href="/map/Map16">go</a>
                            : "go" }    
                </div>

                <div className="div17">
                    {(this.props.location === 17) 
                        ? "YOU" 
                        : (this.props.location === 12 || this.props.location === 16 || this.props.location === 18 || this.props.location === 22)
                            ? <a href="/map/Map17">go</a>
                            : "go" }
                </div>

                <div className="div18">
                    {(this.props.location === 18) 
                        ? "YOU" 
                        : (this.props.location === 13 || this.props.location === 17 || this.props.location === 19 || this.props.location === 23)
                            ? <a href="/map/Map18">go</a>
                            : "go" }
                </div>

                <div className="div19">
                    {(this.props.location === 19) 
                        ? "YOU" 
                        : (this.props.location === 14 || this.props.location === 18 || this.props.location === 20 || this.props.location === 24)
                            ? <a href="/map/Map19">go</a>
                            : "go" }
                </div>

                <div className="div20">
                    {(this.props.location === 20) 
                        ? "YOU" 
                        : (this.props.location === 15 || this.props.location === 19 || this.props.location === 25)
                            ? <a href="/map/Map20">go</a>
                            : "go" }
                </div>

                <div className="div21">
                    {(this.props.location === 21) 
                        ? "YOU" 
                        : (this.props.location === 16 || this.props.location === 22)
                            ? <a href="/map/Map21">go</a>
                            : "go" }
                </div>

                <div className="div22">
                    {(this.props.location === 22) 
                        ? "YOU" 
                        : (this.props.location === 21 || this.props.location === 17 || this.props.location === 22)
                            ? <a href="/map/Map22">go</a>
                            : "go" } 
                </div>

                <div className="div23">
                    {(this.props.location === 23) 
                        ? "YOU" 
                        : (this.props.location === 22 || this.props.location === 18 || this.props.location === 23)
                            ? <a href="/map/Map23">go</a>
                            : "go" } 
                </div>

                <div className="div24">
                    {(this.props.location === 24) 
                        ? "YOU" 
                        : (this.props.location === 23 || this.props.location === 19 || this.props.location === 25)
                            ? <a href="/map/Map24">go</a>
                            : "go" } 
                </div>

                <div className="div25">
                {(this.props.location === 25) 
                        ? "YOU" 
                        : (this.props.location === 24 || this.props.location === 20)
                            ? <a href="/map/Map25">go</a>
                            : "go" } 
                </div>

            </div>  
        );  
    }
}