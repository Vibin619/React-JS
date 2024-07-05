// App.js

import React, { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import Community from './Community';
import GameDetail from './GameDetail';
import Cart from './Cart';

const Home = ({ addToCart }) => {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost/steam/steam.php")
      .then(response => response.json())
      .then(data => setGames(data))
      .catch(error => console.error('Error fetching games:', error));
  }, []);

  const handleClick = (id) => {
    navigate(`/game/${id}`);
  }

  return (
    <>
      <h1 id="steam" className="text-capitalize text-center mt-3"><span id="multi-color">Steam</span></h1>
      <div className="container text-center">
        <div className="row">
          {games.slice(0, 3).map(game => (
            <div className="col" key={game.product_id}>
              <div className="card" style={{ width: "18rem" }} onClick={() => handleClick(game.product_id)}>
                <img src={game.product_img} className="card-img-top" alt={game.product_name} height="250px" style={{ backgroundColor: '#f8f9fa' }} />
                <div id="cont" className="card-body">
                  <h5 className="card-title">{game.product_name}</h5>
                  <p className="card-text">₹{game.product_price}</p>
                  <button onClick={(e) => {e.stopPropagation(); addToCart(game)}} className="btn btn-primary">Buy</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <br />
        <div className="row">
          {games.slice(3).map(game => (
            <div className="col" key={game.product_id}>
              <div className="card" style={{ width: "18rem" }} onClick={() => handleClick(game.product_id)}>
                <img src={game.product_img} className="card-img-top" alt={game.product_name} height="250px" style={{ backgroundColor: '#f8f9fa' }} />
                <div id="cont" className="card-body">
                  <h5 className="card-title">{game.product_name}</h5>
                  <p className="card-text">₹{game.product_price}</p>
                  <button onClick={(e) => {e.stopPropagation(); addToCart(game)}} className="btn btn-primary">Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <br />
      </div>
    </>
  );
}

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (game) => {
    setCart([...cart, game]);
  }

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/community" element={<Community />} />
        <Route path="/game/:id" element={<GameDetail />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
    </>
  );
}

export default App;
