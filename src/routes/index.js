import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import StartScreen from "../screens/StartScreen";
import UserDetails from "../components/UserDetails";
import { NotFound } from "../screens/NotFound";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StartScreen} />
        <Route path="/userDetails/:id" component={UserDetails} />
        <Route path="/userDetails" component={UserDetails} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
