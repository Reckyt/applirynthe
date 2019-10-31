import React, { Component } from "react";
<<<<<<< HEAD
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
=======
import axios from "axios";
import "../../styles/css/enigma3/enigma3.css";
import { Link } from "react-router-dom";
// import Jigsaw from "../help/Jigsaw";

class Enigma3 extends Component {
  constructor() {
    super();
    this.state = {
      movies: {
        id: 1,
        title: "",
        director: ""
      },
      answer: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(event) {
    this.setState({ answer: event.target.value });
    console.log(this.state.answer);

    /* const answer = event.target.value;
    if (answer === "Wes Craven") {
      return <Link to="www.google.fr"></Link>;
    } */
  }

  submit() {
    if (this.state.answer === "2") {
      document.getElementById("continu").style.display = "flex";
      console.log(this.state.answer);
    } else {
      document.getElementById("retour").style.display = "flex";
      console.log(this.state.answer);
    }
  }

  componentDidMount() {
    axios
      .get("https://hackathon-wild-hackoween.herokuapp.com/movies/6")
      .then(res => {
        console.log(res.data.movie);
        this.setState({
          movies: res.data.movie
        });
      });
>>>>>>> 4f648be44d473be89020b7cab41de05733d3264d
  }

  render() {
    return (
<<<<<<< HEAD
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
=======
      <div className="container_EnigmaTwo">
        <div className="container-img">
          <div className="all-img">
            <img src={require("../../styles/assets/para-2.png")} alt="test" />

            <img
              src={this.state.movies.posterUrl}
              alt={this.state.movies.title}
            />

            <img
              src={require("../../styles/assets/para-3.png")}
              alt={this.state.movies.title}
            />
          </div>

          <input
            type="text"
            placeholder="Entre ta réponse si tu oses..."
            onChange={this.handleChange}
            className="input-answer"
          />

          <div className="div_btn">
            <button type="submit" onClick={this.submit} className="btn-answer">
              Submit
            </button>
          </div>
        </div>

        <div className="answer" id="continu">
          <p>Yeah ! Bien joué !</p>
          <Link to="/exit/Exit">
            <button>Continuer</button>
          </Link>
        </div>
        <div className="answer2" id="retour">
          <p>T'es mort ! Tu seras plus attentif la prochaine fois... </p>
          <Link to="/">
            <button>Recommencer ?</button>
>>>>>>> 4f648be44d473be89020b7cab41de05733d3264d
          </Link>
        </div>
      </div>
    );
  }
}
<<<<<<< HEAD
=======

export default Enigma3;
>>>>>>> 4f648be44d473be89020b7cab41de05733d3264d
