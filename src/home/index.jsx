import * as React from 'react'
import './home.sass'

const Home = props => {
  console.log(props);
  return (
    <div className="home">
      <h1 className='product-header'>Welcome to The Store&trade;</h1>
      <p className="product-description">
        This is an awesome description for this store.
      </p>
      <button>Click me</button>
    </div>
  );
};

export default Home;