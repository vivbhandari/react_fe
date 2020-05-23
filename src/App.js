import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Users from "./components/users";
import User from "./components/user";
import NavBar from "./components/navbar";
import Home from "./components/home";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/users" exact component={Users} />
          <Route path="/user/:id" render={(props) => <User {...props} />} />
          <Redirect to="/"></Redirect>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
