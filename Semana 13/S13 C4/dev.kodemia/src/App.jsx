import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import ListChallenge from "./components/List Challenge/ListChallenge";

import Home from './screens/Home/index'
import ListChallenge2 from "./components/List Challenge/ListChallenge2";
import "./styles/index.css";

class App extends React.Component {
  render() {
    return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/test'>
            <h1>Prueba funcionando!!!</h1>
          </Route>
          <Route exact path='/list-challenge'>
            <ListChallenge />
          </Route>
          <Route exact path='/list-challenge2'>
            <ListChallenge2 />
          </Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
