import React, { useState } from 'react';
import './Pizza.css';
import BBQ from '../../assets/bbqpizza.jpg';
import Schezwan from '../../assets/schezzwan margherita.jpg';
import TandooriPaneer from '../../assets/tandooripaneerpizza.jpg';
import ChickenTikka from '../../assets/chickentikkapizza.jpg';
import VeggieSupreme from '../../assets/veggie supreme pizza.jpg';
import MurgMakhini from '../../assets/murg makhini pizza.jpg';
import CheesyMushrrom from '../../assets/cheesymushroom.jpg';
import Tandoori from '../../assets/tandoori pizza.jpg';
import MexicanFeista from '../../assets/mexicanfeistapizza.jpg';
import Margherita from '../../assets/margapizza.jpg';
import AmericanCheesy from '../../assets/americsancheesypizza.jpg';

const Pizza = ({onAddToCart}) => {
  

  const pizzaData = [
    { id: "P1", name: 'BarBeque', price: 11.99, image: BBQ },
    { id: "P2", name: 'Schezwan', price: 5.99, image: Schezwan },
    { id: "P3", name: 'Tandoori Paneer', price: 9.99, image: TandooriPaneer },
    { id: "P4", name: 'Chicken Tikka', price: 12.99, image: ChickenTikka },
    { id: "P5", name: 'Veggie Supreme', price: 8.99, image: VeggieSupreme },
    { id: "P6", name: 'Murg Makhini', price: 10.99, image: MurgMakhini },
    { id: "P7", name: 'Cheesy Mushroom', price: 7.99, image: CheesyMushrrom },
    { id: "P8", name: 'Tandoori', price: 9.99, image: Tandoori },
    { id: "P9", name: 'Mexican Feista', price: 10.99, image: MexicanFeista },
    { id: "P10", name: 'Margherita', price: 6.99, image: Margherita },
    { id: "P11", name: 'American Cheesy', price: 8.99, image: AmericanCheesy },
  ];

  return (
    <div className='Pizzas'>
      <h1>Pizzas</h1>
      <section className="pizza">
        {pizzaData.map((pizza) => (
          <div key={pizza.id} className="pizza-item">
            <img src={pizza.image} alt={pizza.name} />
            <p>{pizza.name}</p>
            <p className="price">${pizza.price.toFixed(2)}</p>
            <p className="rating">
              <span role="img" aria-label="4-star rating">⭐⭐⭐⭐</span>
            </p>
            <button className="add-to-cart" onClick={() => onAddToCart(pizza)}>Add to Cart</button>
          </div>
        ))}
      </section>
     
    </div>
  );
};

export default Pizza;






