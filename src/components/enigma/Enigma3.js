import React, { Component } from "react";
import axios from "axios";
import "../../styles/css/enigma3/enigma3.css";
import { Link } from "react-router-dom";
import Jigsaw from "../help/Jigsaw";

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
  }

  render() {
    return (
      <div className="container_EnigmaTwo">
        <div className="jigsawEnigma3">
          <Jigsaw
            quote={"Sauras-tu trouver la bonne affiche, gna gna gna !!!"}
          />
        </div>
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
          <Link to="/map/Map24">
            <button>Continuer</button>
          </Link>
        </div>
        <div className="answer2" id="retour">
          <p>T'es mort ! Tu seras plus attentif la prochaine fois... </p>
          <Link to="/">
            <button>Recommencer ?</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Enigma3;
