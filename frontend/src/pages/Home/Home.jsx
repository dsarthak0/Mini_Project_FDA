import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Pop from '../../components/popdishes/Pop';
import Footer from '../../components/footer/footer';
import Cart from '../Cart/Cart';
import Signup from '../Signup/Signup';
import Login from '../Login'; 
import Payment from '../../pages/Payment/Payment';
import AllDishes from '../dishesData'; 

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [currentView, setCurrentView] = useState('home');
  const [userName, setUserName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [isUserSignedUp, setIsUserSignedUp] = useState(false);

  const handleSignupSuccess = (name) => {
    setUserName(name);
    setIsUserSignedUp(true);
    setCurrentView('home'); 
  };

  const handleLoginSuccess = (name) => {
    setUserName(name);
    setCurrentView('home'); 
  };

  const handleAddToCart = (dish) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === dish.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...dish, quantity: 1 }];
      }
    });

    setCartCount((prevCount) => prevCount + 1);
    console.log(`${dish.name} added to cart.`);
  };

  const navigateTo = (view) => {
    setCurrentView(view); 
  };

  const handleSearch = () => {
    const filtered = AllDishes.filter(dish =>
      dish.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredDishes(filtered);
    setCurrentView('searchResults'); 
  };

  return (
    <div>
      <Navbar
        cartCount={cartCount}
        onNavigate={navigateTo}
        userName={userName}
      />
      <Header
        searchQuery={searchQuery}
        onSearchChange={(e) => setSearchQuery(e.target.value)}
        onSearch={handleSearch}
      />

     
      {currentView === 'signup' && (
        <Signup onSignupSuccess={handleSignupSuccess} onNavigate={navigateTo} />
      )}
      
      {currentView === 'login' && (
        <Login onLoginSuccess={handleLoginSuccess} onNavigate={navigateTo} />
      )}


      {currentView === 'home' && <Pop onAddToCart={handleAddToCart} />}
      {currentView === 'cart' && <Cart cartItems={cartItems} />}
      {currentView === 'payment' && (
        <Payment 
          cartItems={cartItems} 
          totalAmount={cartItems.reduce((total, item) => total + item.price * item.quantity, 0)} 
          isUserSignedUp={isUserSignedUp} 
          onNavigate={navigateTo} 
        />
      )}
      {currentView === 'searchResults' && (
        <div className="search-results">
          {filteredDishes.length > 0 ? (
            filteredDishes.map((dish) => (
              <div key={dish.id} className="dish-card">
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
                <button onClick={() => handleAddToCart(dish)}>Add to Cart</button>
              </div>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Home;













