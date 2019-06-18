import * as React from 'react'
import {Link, withRouter} from "react-router-dom";
import './menu.sass'

const Menu = ({location}) => (
  <ul className="menu">
    <Link to='/' className={`menu-item ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
    <Link to='/orders' className={`menu-item ${location.pathname === '/orders' ? 'active' : ''}`}>Orders</Link>
    <Link to='/customers' className={`menu-item ${location.pathname === '/customers' ? 'active' : ''}`}>Customers</Link>
  </ul>
);

export default withRouter(Menu);