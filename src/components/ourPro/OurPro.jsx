import { carts } from '../../mock'
import { Link } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa6";
import { useDispatch } from 'react-redux';

function OurPro({ onLike , onbasket }){
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
       <div style={{display:"flex", gap:"10px"}} className='wr'>
      <div className="today"></div>
      <p className='title'>Our Products</p>
      </div>

      <h2 className='title2'>Explore Our Products</h2>

<div className="cards">
        {carts.map((item) => (
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


            <div style={{display:"flex", gap:"10px", marginTop:"140px"}} className='wr'>
      <div className="today"></div>
      <p className='title'>Features</p>
      </div>

      <h2 className='title2'>New Arrival</h2>




    </div>
  )
}

export default OurPro