import React from 'react';
import M1 from '../../assets/beef tacos.webp';
import M2 from '../../assets/m2-Pozole-.webp';
import M3 from '../../assets/m3-beeftacos.webp';
import M4 from '../../assets/m4-tostados.webp';
import M5 from '../../assets/m5-Chiles-en-nogada-2e5e44c.webp';
import M6 from '../../assets/m6-grilled-corn-with-chilli-mayonnaise-coriander-and-feta-dc80ef9.webp';
import M7 from '../../assets/m7-Chicken-bean-enchiladas-e7fabb3.webp';
import M8 from '../../assets/m8-Mole-1ba1599.webp';
import M9 from '../../assets/m9-Guacamole-48952eb.webp';
import M10 from '../../assets/m10-tamales.webp';
import './Mexican.css';

const Mexican = ({ onAddToCart }) => {
  const mexicanData = [
    { id: "M1", name: 'Beef Tacos', price: 11.99, image: M1 },
    { id: "M2", name: 'Pozole', price: 5.99, image: M2 },
    { id: "M3", name: 'Tacos', price: 9.99, image: M3 },
    { id: "M4", name: 'Tostados', price: 12.99, image: M4 },
    { id: "M5", name: 'Chiles en Nogada', price: 8.99, image: M5 },
    { id: "M6", name: 'Grilled Corn', price: 10.99, image: M6 },
    { id: "M7", name: 'Enchiladas', price: 7.99, image: M7 },
    { id: "M8", name: 'Mole', price: 9.99, image: M8 },
    { id: "M9", name: 'Guacamole', price: 10.99, image: M9 },
    { id: "M10", name: 'Tamales', price: 6.99, image: M10 },
  ];

  return (
    <div className='Mexican'>
      <h1>Mexican</h1>
      <section className="mexico">
        {mexicanData.map((dish) => (
          <div key={dish.id}>
            <img src={dish.image} alt={dish.name} />
            <p>{dish.name}</p>
            <p className="price">${dish.price.toFixed(2)}</p>
            <p className="rating">⭐⭐⭐⭐</p>
            <button className="add-to-cart" onClick={() => onAddToCart(dish)}>Add to Cart</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Mexican;


