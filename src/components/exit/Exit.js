import React, { Component } from "react";

export default class Exit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExitResolved : true
    }
  }


  render() {
    return (
      <div>
          <img alt="placeholder" src="https://la-bas.org/IMG/arton5412.gif?1548418135" />
          <a href="/map/Map12">Fini</a>
      </div>
    );
  }
}