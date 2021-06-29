import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import StartScreen from "../StartScreen";
import UserDetails from "../components/UserDetails";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StartScreen} />
        <Route path="/:id" component={UserDetails} />
        <Route path="/userDetails" component={UserDetails} />

        {/* <Route exact path="*" component={NotFound} /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
