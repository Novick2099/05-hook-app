import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { AboutScreen } from "./AboutScreen";
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";
import { NavBar } from "./NavBar";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        {/* todo A <Switch> looks throught its children <Route>s and renders
        the first one that matches the current URL */}
        <Switch>
          {/* todo exact para forzar a que la url sea exacta*/}
          <Route exact path="/" component={HomeScreen} />
          <Route path="/about" component={AboutScreen} />
          <Route path="/login" component={LoginScreen} />

          {/*Cuando la ruta no se encuentra, se redirecciona hacia lo especificado por el redirect*/}
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
