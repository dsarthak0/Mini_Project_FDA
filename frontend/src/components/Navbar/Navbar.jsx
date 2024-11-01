import React from 'react';
import './Navbar.css';
import logo from '../../assets/logoo.jpeg';
import basket from '../../assets/basket_icon.png';

const Navbar = ({ cartCount, onNavigate, userName }) => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" onClick={() => onNavigate('home')} />
      <ul className="navbar-menu">
        <li onClick={() => onNavigate('home')}>Home</li>
        
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <img src={basket} alt="Basket" onClick={() => onNavigate('cart')} />
          {cartCount > 0 && <div className="dot">{cartCount}</div>}
        </div>
        <button onClick={() => onNavigate(userName ? 'home' : 'signup')}>
          {userName ? `Hi, ${userName}` : 'Sign Up'}
        </button>
        {!userName && (
          <button onClick={() => onNavigate('login')}>
            Log In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;











