import { carts } from '../../mock'
import { Link } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa6";

function OurPro({ onLike , onbasket }){
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