import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menu from "../menu";
import Home from "../home";
import CRUD from "../crud";
import orders from "./orders";
import customers from "./customers";
import "./app.sass";

/**
 * The main component.
 * Used for routing between multiple "pages" of application
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders,
      customers
    };
  }

  updateOrders = newOrders => this.setState({ orders: newOrders });

  updateCustomers = newCustomers => this.setState({ customers: newCustomers });

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
                  displayCount={this.state.orders.length}
                  key="orders"
                  title="Orders"
                  items={this.state.orders}
                />
              )}
            />
            <Route
              path="/customers"
              render={() => (
                <CRUD
                  key="customers"
                  title="Customers"
                  items={this.state.customers}
                  updateItems={this.updateCustomers}
                  canCreate={true}
                  canEdit={true}
                  canDelete={true}
                />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  };
}

export default App;
