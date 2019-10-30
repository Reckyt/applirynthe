import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Map from "./components/map/Map";
import Enigma1 from "./components/enigma/Enigma1";
import Monster1 from "./components/monsters/Monster1";
import Wall1 from "./components/walls/Wall1";
import Exit from "./components/exit/Exit";
import Timer from "./components/timer/Timer";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/map/Map25"
            render={routeProps => (
              <Map {...routeProps} location={this.state.map[24]} />
            )}
          />
          <Route
            path="/map/Map24"
            render={routeProps => (
              <Map {...routeProps} location={this.state.map[23]} />
            )}
          />
          <Route
            path="/map/Map23"
            render={routeProps => (
              <Map {...routeProps} location={this.state.map[22]} />
            )}
          />
          <Route
            path="/map/Map22"
            render={routeProps => (
              <Map {...routeProps} location={this.state.map[21]} />
            )}
          />
          <Route
            path="/map/Map21"
            render={routeProps => (
              <Map {...routeProps} location={this.state.map[20]} />
            )}
          />
          <Route
            path="/map/Map20"
            render={routeProps => (
              <Map {...routeProps} location={this.state.map[19]} />
            )}
          />
          <Route
            path="/map/Map19"
            render={routeProps => (
              <Map {...routeProps} location={this.state.map[18]} />
            )}
          />
          <Route
            path="/map/Map18"
            render={routeProps => (
              <Map {...routeProps} location={this.state.map[17]} />
            )}
          />
          <Route
            path="/map/Map17"
            render={routeProps => (
              <Map {...routeProps} location={this.state.map[16]} />
            )}
          />
          <Route
            path="/map/Map16"
            render={routeProps => (
              <Map {...routeProps} location={this.state.map[15]} />
            )}
          />
          <Route
            path="/map/Map15"
            render={routeProps => (
              <Map {...routeProps} location={this.state.map[14]} />
            )}
          />
          <Route
            path="/map/Map14"
            render={routeProps => (
              <Map {...routeProps} location={this.state.map[13]} />
            )}
          />
          <Route
            path="/map/Map13"
            render={routeProps => (
              <Map {...routeProps} location={this.state.map[12]} />
            )}
          />
          <Route
            path="/map/Map12"
            render={routeProps => (
              <Map {...routeProps} location={this.state.map[11]} />
            )}
          />
          <Route
            path="/map/Map11"
            render={routeProps => (
              <Map {...routeProps} location={this.state.map[10]} />
            )}
          />
          <Route
            path="/map/Map10"
            render={routeProps => (
              <Map {...routeProps} location={this.state.map[9]} />
            )}
          />
          <Route
            path="/map/Map9"
            render={routeProps => (
              <Map {...routeProps} location={this.state.map[8]} />
            )}
          />
          <Route
            path="/map/Map8"
            render={routeProps => (
              <Map {...routeProps} location={this.state.map[7]} />
            )}
          />
          <Route
            path="/map/Map7"
            render={routeProps => (
              <Map {...routeProps} location={this.state.map[6]} />
            )}
          />
          <Route
            path="/map/Map6"
            render={routeProps => (
              <Map {...routeProps} location={this.state.map[5]} />
            )}
          />
          <Route
            path="/map/Map5"
            render={routeProps => (
              <Map {...routeProps} location={this.state.map[4]} />
            )}
          />
          <Route
            path="/map/Map4"
            render={routeProps => (
              <Map {...routeProps} location={this.state.map[3]} />
            )}
          />
          <Route
            path="/map/Map3"
            render={routeProps => (
              <Map {...routeProps} location={this.state.map[2]} />
            )}
          />
          <Route
            path="/map/Map2"
            render={routeProps => (
              <Map {...routeProps} location={this.state.map[1]} />
            )}
          />
          <Route
            path="/map/Map1"
            render={routeProps => (
              <Map {...routeProps} location={this.state.map[0]} />
            )}
          />

          <Route path="/enigma/Enigma1" component={Enigma1} />
          <Route path="/monsters/Monster1" component={Monster1} />
          <Route path="/walls/Wall1" component={Wall1} />
          <Route path="/exit/Exit" component={Exit} />
        </Switch>

        <Timer />
      </div>
    );
  }
}

export default App;
