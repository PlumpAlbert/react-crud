import * as React from "react";
import "./home.sass";

/**
 * The Home component.
 * Renders landing page of this app
 */
const Home = () => (
  <div className="home">
    <h1 className="product-header">
      Welcome to <span className="product-name">Green Store</span>
    </h1>
    <div className="content">
      <p className="product-description">
        It doesn't matter if you're a vegan or paleo or omnivore. Maybe you like
        kale or pizza or mochi, or maybe you value local. That's cool. No matter
        what you're into, <span className="product-name">Green Store</span> is
        the place to find the tastiest, best version of it. Whatever it is.
      </p>
      <img
        src="https://images.vexels.com/media/users/3/127670/isolated/preview/1c400fa105ae69ed69e526f8a4a96a76-flat-flower-plant-tub-by-vexels.png"
        alt=""
        className="product-logo"
      />
    </div>
    <button className="btn">GO SHOPPING!</button>
    <footer>
      All rights reserved. Copyrighted by Green Store<sup>&trade;</sup>
    </footer>
  </div>
);

export default Home;
