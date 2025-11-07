import { products } from '../../mock'
import { FaRegHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import "./Month.css"

function Month({ onLike , onbasket }){

  const dispatch = useDispatch();
 
  const handleLike = (item) => {
    dispatch(toggleLike(item));
    onLike();
  };
  
 

  const handleClick = (item) => {
    dispatch(addToCart(item)); 
    onbasket();             
  };

  return(
    <div>
       <div className="category">
      <div className="today"></div>
      <p className='title'>This month</p>
      </div>
      <h3 className='browse'>Best Selling Products</h3>


      <div className="cards">
        {products.map((item) => (
          <div key={item.id} className="card">
            <div className="discount">-{item.discount}%</div>
            <Link to={`/product/${item.id}`}>
  <img src={item.image} alt={item.name} className="image" />
</Link>
            <div 
              className="like-icon" 
              onClick={() => handleLike(item)} 
              style={{ cursor: 'pointer', position: 'absolute', top: '10px', right: '10px' }}
            >
             
                <FaRegHeart style={{ color: 'gray' }} /> 
              
            </div>
            <h3>{item.name}</h3>
            <p>
              <b>${item.price}</b>{" "}
              <span className="old-price">${item.oldPrice}</span>
            </p>
            <p>⭐⭐⭐</p>
            <div onClick={() => handleClick(item)}>
            <button  className="add-btn" >
                🛒 Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>


    </div>
  )
}

export default Month