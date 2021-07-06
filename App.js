import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/loginForm";
import Register from "./components/registerForm";

class App extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/" component={Login} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
