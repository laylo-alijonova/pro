import { products } from '../../mock'
import { FaRegHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import "./Month.css"

function Month({ onLike , onbasket }){
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
                  <Link to={"rasm"}>
                  <img src={item.image} alt={item.name} className="image" />
                  </Link>
                  <FaRegHeart onClick={onLike} />
                  <h3>{item.name}</h3>
                  <p>
                    <b>${item.price}</b>{" "}
                    <span className="old-price">${item.oldPrice}</span>
                  </p>
                  <p>⭐⭐⭐</p>
                  <button className="btn" onClick={onbasket}>Add to Cart</button>
                </div>
              ))}
            </div>


    </div>
  )
}

export default Month