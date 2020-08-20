import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import SocialFollow from "./SocialFollow";

class Main extends Component {
    render() {
    return (
        <HashRouter>
        <div>
         <div class="white"><h1>Shriti Chandra</h1></div>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">About</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
          </div>
          <SocialFollow />
        </div>
        </HashRouter>
    );
    }
}

export default Main;

