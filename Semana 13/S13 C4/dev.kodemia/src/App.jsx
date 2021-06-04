import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './screens/Home/index'
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
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
