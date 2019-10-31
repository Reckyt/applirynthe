import React, { Component } from "react";
import axios from "axios";
import "../../styles/css/enigma2/enigma2.css";
import { Link } from "react-router-dom";
// import Jigsaw from "../help/Jigsaw";

class Enigma2 extends Component {
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
    if (this.state.answer === "wes craven") {
      document.getElementById("continu").style.display = "flex";
      console.log(this.state.answer);
    } else {
      document.getElementById("retour").style.display = "flex";
      console.log(this.state.answer);
    }
  }

  componentDidMount() {
    axios
      .get("https://hackathon-wild-hackoween.herokuapp.com/movies/3")
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
        <div className="container-img">
          <img
            src={this.state.movies.posterUrl}
            alt={this.state.movies.title}
            className="img-question-movie"
          />

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
          <p>
            La puissance de Wes Craven est avec toi pour t'accompagner dans ton
            aventure ! Courage !
          </p>
          <Link to="/map/Map22">
            <button>Continuer</button>
          </Link>
        </div>
        <div className="answer2" id="retour">
          <p>Sorry bro... Ghostface kill you.</p>
          <Link to="/">
            <button>Recommencer ?</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Enigma2;
