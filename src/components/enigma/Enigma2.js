import React, { Component } from "react";
import axios from "axios";
import "../../styles/css/enigma2/enigma2.css";

class Enigma2 extends Component {
  constructor() {
    super();
    this.state = {
      movies: {
        id: 1,
        title: "",
        director: ""
      }
    };
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
        </div>
        <div></div>
      </div>
    );
  }
}

export default Enigma2;
