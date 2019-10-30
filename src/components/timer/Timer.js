import React, { Component } from "react";
import "../../styles/css/timer/timer.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondes: 59,
      minutes: 4
    };
  }

  render() {
    // secondes
    var x = this;
    var { secondes, minutes } = this.state;
    setTimeout(function() {
      if (secondes === 0 && minutes === 0) {
        return console.log(`you're dead`);
      } else {
        if (secondes > 0) {
          x.setState({ secondes: secondes - 1 });
        } else {
          x.setState({ secondes: 59, minutes: minutes - 1 });
        }
      }
    }, 1000);

    return (
      <div className="count-button">
        <p className="counter">
          {minutes} : {secondes}
        </p>
      </div>
    );
  }
}

export default Timer;
