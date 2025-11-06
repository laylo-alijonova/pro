import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Like() {
  const dispatch = useDispatch();
  const liked = useSelector((state) => state.shop.liked);
  console.log(liked);
  
  const handleUnlike = (itemId) => {
  
    console.log(`Mahsulot ID: ${itemId} yoqtirishdan olib tashlandi (Unlike action yuborildi)`);
    
  };

  return (
    <div className="wishlist-wr">
      <h2>❤️ Yoqtirilgan mahsulotlar ({liked.length})</h2>
      
      {/* 3. Agar ro'yxat bo'sh bo'lsa xabar ko'rsatish */}
      {liked.length === 0 ? (
        <p>Hozircha yoqtirilgan mahsulotlar yo'q.</p>
      ) : (
        <div className="wishlistt">
          {liked.map((item) => (
            <div key={item.id} className="card">
              <img style={{width:"350px", height:"350px"}} src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p className="price">${item.price}</p>
              
              {/* 4. Yoqtirishni bekor qilish (Unlike) tugmasi */}
              <button 
                onClick={() => handleUnlike(item.id)} // <-- item.id ni funksiyaga uzatamiz
                style={{
                  padding: "10px", 
                  backgroundColor: "red", 
                  color: "white", 
                  border: "none", 
                  cursor: "pointer", 
                  marginTop: "10px"
                }}
              >
                Yoqtirishdan Olib Tashlash (Unlike)
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}