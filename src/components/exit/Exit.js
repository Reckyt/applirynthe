import React, { Component } from "react";
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import '../../styles/css/exit/Exit.css'

export default class Exit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
=======
import { Link } from "react-router-dom";
import "../../styles/css/exit/Exit.css";
export default class Exit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
>>>>>>> 4f648be44d473be89020b7cab41de05733d3264d
  }
  render() {
    return (
      <div className="Exit">
        <div className="Exit_Text">
<<<<<<< HEAD
          <i>"[username] il faut arrêter votre délire de maison hantée. Suivez-moi, il est temps de prendre vos cachets !"</i>
        </div>
        <button className="Exit_Button"><Link to="/" className="link">Redevenir fou !!!</Link></button>
          
=======
          <i>
            "[username] il faut arrêter votre délire de maison hantée.
            Suivez-moi, il est temps de prendre vos cachets !"
          </i>
        </div>
        <button className="Exit_Button">
          <Link to="/" className="link">
            Redevenir fou !!!
          </Link>
        </button>
>>>>>>> 4f648be44d473be89020b7cab41de05733d3264d
      </div>
    );
  }
}
