import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import CardGenerator from "./CardGenerator";

import "../stylesheets/App.scss";

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/cardGenerator" component={CardGenerator} />
        </Switch>
      </>
    );
  }
}

export default App;
