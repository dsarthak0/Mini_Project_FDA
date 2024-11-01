import React from 'react';
import './Salad.css';
import S1 from '../../assets/s1-tossed.webp';
import S2 from '../../assets/s2-caesar.webp';
import S3 from '../../assets/s3-leafygreen.webp';
import S4 from '../../assets/s4-greek.webp';
import S5 from '../../assets/s5-fatoush.webp';
import S6 from '../../assets/s6-nicoise.webp';
import S7 from '../../assets/s7-cobb.webp';
import S8 from '../../assets/s8-chicken.webp';

const Salad = ({ onAddToCart }) => {
  const saladData = [
    { id: "S1", name: 'Tossed', price: 11.99, image: S1 },
    { id: "S2", name: 'Caesar', price: 5.99, image: S2 },
    { id: "S3", name: 'Leafy Green', price: 9.99, image: S3 },
    { id: "S4", name: 'Greek', price: 12.99, image: S4 },
    { id: "S5", name: 'Fatoush', price: 8.99, image: S5 },
    { id: "S6", name: 'Nicoise', price: 10.99, image: S6 },
    { id: "S7", name: 'Chicken Salad', price: 7.99, image: S7 },
    { id: "S8", name: 'Tandoori', price: 9.99, image: S8 },
  ];

  return (
    <div className='Salad'>
      <h1>Salad</h1>
      <section className="salad">
        {saladData.map((salad) => (
          <div key={salad.id}>
            <img src={salad.image} alt={salad.name} />
            <p>{salad.name}</p>
            <p className="price">${salad.price.toFixed(2)}</p>
            <p className="rating">⭐⭐⭐⭐</p>
            <button className="add-to-cart" onClick={() => onAddToCart(salad)}>Add to Cart</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Salad;

