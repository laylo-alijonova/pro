import "./Today.css"
import { FaRegHeart } from "react-icons/fa6";
import { products } from '../../mock';
import { Link } from 'react-router-dom';

import { toggleLike, addToCart } from '../../redux/ShopSlice';
import { useSelector, useDispatch } from 'react-redux';

function Today({onlike, onbasket}){
  
  const dispatch = useDispatch();
 
  const handleLike = (item) => {
    dispatch(toggleLike(item));
    onlike();
  };
  
 

  const handleClick = (item) => {
    dispatch(addToCart(item)); 
    onbasket();             
  };

  return(
    <div>
      <div className="" >
      <div style={{display:"flex", gap:"10px"}} className='wr'>
      <div className="today"></div>
      <p className='title'>Today's</p>
      </div>

      <div className="flash">
        <h2 className='title2'>Flash Sales</h2>

        <div className="day">
          <p>Days</p>
          <h3 className='num'>03</h3>
        </div>

        <p className='line'>:</p>

        <div className="day">
          <p>Hours</p>
          <h3 className='num'>23</h3>
        </div>

        <p className='line'>:</p>

        <div className="day">
          <p>Minutes</p>
          <h3 className='num'>19</h3>
        </div>

        <p className='line'>:</p>


        <div className="day">
          <p>Seconds</p>
          <h3 className='num'>56</h3>
        </div>


      </div>

      </div>

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

      <button className='view'>View All Products</button>

    </div>
  )
}

export default Today