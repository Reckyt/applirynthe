import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../../styles/css/exit/Exit.css'

export default class Exit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }

  }
  render() {
    return (
      <div className="Exit">
        <div className="Exit_Text">
          <i>"Maxime il faut arrêter votre délire de maison hantée. Suivez-moi, il est temps de prendre vos cachets !"</i>
        </div>
        <button className="Exit_Button"><Link to="/" className="link">Redevenir fou !!!</Link></button>
          
      </div>
    );
  }
}
