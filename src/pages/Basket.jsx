import React from "react";


function Basket({ basket }) {
  return (
    <div className="basket-wrapper">
      <h2 className="basket-title">Basket</h2>

      {basket.length === 0 ? (
        <p className="no-basket">Your basket is empty.</p>
      ) : (
        <div className="basket-grid">
          {basket.map((item) => (
            <div key={item.id} className="basket-card">
              <img src={item.image} alt={item.name} className="basket-img" />
              <div className="basket-info">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Basket;
