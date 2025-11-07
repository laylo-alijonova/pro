import React from "react";
import { useSelector } from "react-redux";

export default function Like() {
  const liked = useSelector((state) => state.shop.liked);
  console.log(liked);

  return (
    <div className="wishlist-wr">
      
        <div className="wishlistt">
          {liked.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt="" />
              <h3>{item.name}</h3>
              <p className="price">${item.price}</p>
              
             
            </div>
          ))}
        </div>
      
    </div>
  );
}