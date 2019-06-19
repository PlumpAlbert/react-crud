import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menu from "../menu";
import Home from "../home";
import CRUD from "../crud";
// import Orders from "../orders";
// import Customers from "../customers";
import "./app.sass";

/**
 * The main component.
 * Used for routing between multiple "pages" of application
 */
const App = () => (
  <BrowserRouter>
    <div className="app">
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/orders"
          render={() => <CRUD title="Orders" items={[]} />}
        />
        <Route
          path="/customers"
          render={() => <CRUD title="Customers" items={[]} />}
        />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
