import React  from 'react';
import './Rolls.css';
import Roll1 from '../../assets/paneer roll.png';
import Roll2 from '../../assets/chickenroll.png';
import Roll3 from '../../assets/veg roll.png';
import Roll4 from '../../assets/mtroll.png';
import Roll5 from '../../assets/muttonroll.png';
import Roll6 from '../../assets/chowmeinroll.png';
import Roll7 from '../../assets/springroll.png';
import Roll8 from '../../assets/scroll.png';
import Roll9 from '../../assets/paneer roll.png';

const Rolls = ({ onAddToCart }) => {
  const rollData = [
    { id: "R1", name: 'Paneer Roll', price: 11.99, image: Roll1 },
    { id: "R2", name: 'Chicken Roll', price: 5.99, image: Roll2 },
    { id: "R3", name: 'Veg Roll', price: 9.99, image: Roll3 },
    { id: "R4", name: 'Mt Roll', price: 12.99, image: Roll4 },
    { id: "R5", name: 'Mutton Roll', price: 8.99, image: Roll5 },
    { id: "R6", name: 'Chowmein Roll', price: 10.99, image: Roll6 },
    { id: "R7", name: 'Spring Roll', price: 7.99, image: Roll7 },
    { id:"R8", name: 'Sc Roll', price: 9.99, image: Roll8 },
    { id: "R9", name: 'Paneer Roll', price: 10.99, image: Roll9 },
  ];

  return (
    <div className='Rolls'>
      <h1>Rolls</h1>
      <section className="rolls">
        {rollData.map((roll) => (
          <div key={roll.id}>
            <img src={roll.image} alt={roll.name} />
            <p>{roll.name}</p>
            <p className="price">${roll.price.toFixed(2)}</p>
            <p className="rating">⭐⭐⭐⭐</p>
            <button className="add-to-cart" onClick={() => onAddToCart(roll)}>Add to Cart</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Rolls;


