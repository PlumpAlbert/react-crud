import * as React from 'react'
import './home.sass'

const Home = props => {
  console.log(props);
  return (
    <div className="home">
      <div className="product">
        <h1 className='product-header'>
          Welcome to{' '}
          <span className="product-name">Green Store</span>
          <sup> &trade;</sup>
        </h1>
        <div className="content">
          <p className="product-description">
            It doesn't matter if you're a vegan or paleo or omnivore. Maybe you like kale or pizza or mochi, or maybe
            you
            value local. That's cool. No matter what you're into, <span className="product-name">Green Store</span> is
            the
            place to find the tastiest, best version of it. Whatever it is.
          </p>
          <img
            src="https://images.vexels.com/media/users/3/127670/isolated/preview/1c400fa105ae69ed69e526f8a4a96a76-flat-flower-plant-tub-by-vexels.png"
            alt="" className="product-logo"/>
        </div>
        <button className='btn'>GO SHOPPING!</button>
      </div>
    </div>
  );
};

export default Home;