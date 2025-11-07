import React from "react";
import { useSelector } from "react-redux";

export default function Basket() {
  const cart = useSelector((state) => state.shop.cart);
console.log(cart);

  return (
    <div className="wishlist-container">
      <h2>Basket</h2>
    
        <div className="wishlist-grid">
          {cart.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image}  />
              <h3>{item.name}</h3>
              <p className="price">${item.price}</p>
            </div>
          ))}
        </div>
      
    </div>
  );
};