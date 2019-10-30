import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Map from "./components/map/Map";
import Enigma1 from "./components/enigma/Enigma1";
import Monster1 from "./components/monsters/Monster1";
import Wall1 from "./components/walls/Wall1";
import Exit from "./components/exit/Exit";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/map/Map" component={Map} />
        <Route path="/enigma/Enigma1" component={Enigma1} />
        <Route path="/monsters/Monster1" component={Monster1} />
        <Route path="/walls/Wall1" component={Wall1} />
        <Route path="/exit/Exit" component={Exit} />
      </Switch>
    </div>
  );
}

export default App;
