import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Menu from './menu';
import Home from '../home';
import Orders from '../orders';
import Customers from '../customers';
import "./App.sass";

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Menu />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/orders' component={Orders}/>
        <Route path='/customers' component={Customers}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
