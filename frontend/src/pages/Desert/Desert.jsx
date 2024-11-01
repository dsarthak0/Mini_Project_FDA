import React from 'react';
import './Desert.css';
import D1 from '../../assets/d1-cake.jpg';
import D2 from '../../assets/d2Cookies-min.jpg';
import D3 from '../../assets/d3Biscuits-min.jpg';
import D4 from '../../assets/d4Pastries-min.jpg';
import D5 from '../../assets/d5Candies-min.jpg';
import D6 from '../../assets/d6Pudding-min.jpg';
import D7 from '../../assets/d7Deep-fried-min.jpg';
import D8 from '../../assets/d8ice-Cream-min.jpg';
import D9 from '../../assets/d9Gelatin-min.jpg';
import D10 from '../../assets/d10self-saucing-chocolate-pudding-14262-1.jpg';

const Desert = ({ onAddToCart }) => {
  const dessertData = [
    { id: "D1", name: 'Cake', price: 11.99, image: D1 },
    { id: "D2", name: 'Cookies', price: 5.99, image: D2 },
    { id: "D3", name: 'Biscuits', price: 9.99, image: D3 },
    { id: "D4", name: 'Pastries', price: 12.99, image: D4 },
    { id: "D5", name: 'Candies', price: 8.99, image: D5 },
    { id: "D6", name: 'Pudding', price: 10.99, image: D6 },
    { id: "D7", name: 'Deep Fried Min', price: 7.99, image: D7 },
    { id: "D8", name: 'Ice Cream', price: 9.99, image: D8 },
    { id: "D9", name: 'Chocolate Pudding', price: 10.99, image: D9 },
    { id: "D10", name: 'Gelatin', price: 6.99, image: D10 },
  ];

  return (
    <div className='Deserts'>
      <h1>Deserts</h1>
      <section className="desert">
        {dessertData.map((dessert) => (
          <div key={dessert.id}>
            <img src={dessert.image} alt={dessert.name} />
            <p>{dessert.name}</p>
            <p className="price">${dessert.price.toFixed(2)}</p>
            <p className="rating">⭐⭐⭐⭐</p>
            <button className="add-to-cart" onClick={() => onAddToCart(dessert)}>Add to Cart</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Desert;

