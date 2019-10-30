import React from 'react';
import Monsters from '../src/components/monsters/Monster1'
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/monster" component={Monsters} />
      </Switch>
    </div>
  );
}

export default App;
