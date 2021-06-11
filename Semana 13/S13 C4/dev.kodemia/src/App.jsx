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
import Login from './screens/Login/index'
import LoginClass from "./screens/Login/indexClass";
import CharDetail from "./screens/CharDetail";
import SinglePost from "./screens/SinglePost";

import Excercises from './screens/Excercises'
import AddPost from "./screens/AddPost";

class App extends React.Component {
  render() {
    return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/posts/:id'>
            <SinglePost />
          </Route>
          <Route exact path='/create-post'>
            <AddPost />
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
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/login-class' component={LoginClass}/>
          <Route exact path='/excercises'>
            <Excercises />
          </Route>
          <Route exact path='/char-detail/:id'>
            <CharDetail />
          </Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
