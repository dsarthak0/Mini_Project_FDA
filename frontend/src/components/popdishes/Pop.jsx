import React, { useState } from 'react';
import './Pop.css';
import Rolls from '../../assets/rolls.jpeg';
import Salad from '../../assets/saald.jpeg';
import Deserts from '../../assets/desert.jpeg';
import Mexican from '../../assets/mexican.jpg';
import Pizza from '../../assets/pizza.jpg';
import tacos from '../../assets/beef tacos.webp';
import buns from '../../assets/buns.webp';
import greeksalad from '../../assets/greek salad.webp';
import pasta from '../../assets/pasta.jpeg';
import margapizza from '../../assets/margapizza.jpg';
import RollsComponent from '../../pages/Rolls/Rolls';
import Mexicans from '../../pages/Mexican/Mexican';
import Pizzaa from '../../pages/PizzaPage/Pizza';
import Salads from '../../pages/salad/Salad';
import Desertss from '../../pages/Desert/Desert';

const Pop = ({ onAddToCart }) => {
  const [showRolls, setShowRolls] = useState(false);
  const [showPizza, setShowPizza] = useState(false);
  const [showSalads, setShowSalads] = useState(false);
  const [showMexicans, setShowMexicans] = useState(false);
  const [showDeserts, setShowDeserts] = useState(false);

  const handleRollsClick = () => setShowRolls(true);
  const handlePizzaClick = () => setShowPizza(true);
  const handleSaladClick = () => setShowSalads(true);
  const handleMexicanClick = () => setShowMexicans(true);
  const handleDesertsClick = () => setShowDeserts(true);

  if (showRolls) return <RollsComponent onAddToCart={onAddToCart} />;
  if (showMexicans) return <Mexicans onAddToCart={onAddToCart} />;
  if (showPizza) return <Pizzaa onAddToCart={onAddToCart} />;
  if (showSalads) return <Salads onAddToCart={onAddToCart} />;
  if (showDeserts) return <Desertss onAddToCart={onAddToCart} />;

  return (
    <>
      <div className='types'>
        <h1>Explore Our Menu</h1>
        <section className="pop">
          <div><img src={Rolls} alt="Rolls" /><p onClick={handleRollsClick}>Rolls</p></div>
          <div><img src={Mexican} alt="Mexican" /><p onClick={handleMexicanClick}>Mexican</p></div>
          <div><img src={Salad} alt="Salad" /><p onClick={handleSaladClick}>Salad</p></div>
          <div><img src={Pizza} alt="Pizza" /><p onClick={handlePizzaClick}>Pizza</p></div>
          <div><img src={Deserts} alt="Deserts" /><p onClick={handleDesertsClick}>Deserts</p></div>
        </section>
      </div>

      <div className="popular">
        <h1>Our Most Popular Dishes</h1>
        <section className="dish">
          {[
            { id: 1, name: 'Tacos', price: 10.99, image: tacos },
            { id: 2, name: 'Buns', price: 5.99, image: buns },
            { id: 3, name: 'Greek Salad', price: 8.99, image: greeksalad },
            { id: 4, name: 'Pasta', price: 12.99, image: pasta },
            { id: 5, name: 'Margarita Pizza', price: 14.99, image: margapizza },
          ].map((dish) => (
            <div key={dish.id}>
              <img src={dish.image} alt={dish.name} />
              <p>{dish.name}</p>
              <p className="price">${dish.price.toFixed(2)}</p>
              <p className="rating">⭐⭐⭐⭐</p>
              <button className="add-to-cart" onClick={() => onAddToCart(dish)}>
                Add to Cart
              </button>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Pop;







