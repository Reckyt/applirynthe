import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../styles/css/enigma/Enigma3.css";
import Jigsaw from "../help/Jigsaw";

export default class Enigma3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnigma1Resolved: true,
      title: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    return (
      <div className="popcorn">
        <div className="instructionsEnigma3">
          <Jigsaw
            quote={
              "Si tu trouves une référence de film, tape le titre correspondant"
            }
          />
        </div>
        <div className="div_pop"></div>
        <div className="div_flex">
          <div className="reponse3">
            <input
              id="reponse3"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
            ></input>
          </div>
          <Link to="/map/Map12">
            <button
              type="submit"
              className="EnigmaSubmit3"
              onClick={this.submit}
            >
              Submit
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
