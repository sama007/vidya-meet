import React from 'react';
import './App.css';
import NavBarVidya from './navbar/navbar';
import Home from './home/home';
import Conference from './conference/conference'
import Room from "./conference/room";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const NormalApp = () => (
  <div>
    <NavBarVidya />
    <Switch>
      <Route path="/conference">
        <Conference />
      </Route>
      <Route path="/">
        <Home />
      </Route>

    </Switch>
  </div>
)

function App() {
  return (
    <React.Fragment>
    <Router>
      <Switch>
       <Route exact path="/conference/room/:meetingid">
        <Room />
      </Route>
      <Route>
        <NormalApp />
      </Route>
      </Switch>
    </Router>
    </React.Fragment>
  );
}

export default App;
