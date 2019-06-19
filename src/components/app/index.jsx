import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menu from "../menu";
import Home from "../home";
import CRUD from "../crud";
import orders from "./orders";
// import Customers from "../customers";
import "./app.sass";

/**
 * The main component.
 * Used for routing between multiple "pages" of application
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders
    };
  }

  updateOrders = newOrders => {
    console.log("Updating orders:", newOrders);
    this.setState({ orders: newOrders });
  };

  render = () => {
    return (
      <BrowserRouter>
        <div className="app">
          <Menu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/orders"
              render={() => (
                <CRUD
                  title="Orders"
                  items={this.state.orders}
                  updateItems={this.updateOrders}
                  canEdit={true}
                  canDelete={true}
                />
              )}
            />
            <Route
              path="/customers"
              render={() => <CRUD title="Customers" items={[]} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  };
}

export default App;
