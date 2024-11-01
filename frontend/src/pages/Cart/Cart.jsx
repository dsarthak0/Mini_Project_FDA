
import React from 'react';
import './Cart.css'; 
import Payment from '../Payment/Payment'; 

const Cart = ({ cartItems, onNavigate }) => {
  
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const totalAmount = calculateTotalAmount(); 

  return (
    <div className='Cart'>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p className="price">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
          <h2>Total Amount: ${totalAmount.toFixed(2)}</h2> 
          <Payment totalAmount={totalAmount} cartItems={cartItems} onNavigate={onNavigate} /> 
        </>
      )}
    </div>
  );
};

export default Cart;








