import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar({ likedCount, basketCount }){
  
  return(
    <div>
       <div className="container">
        <div className="first-line">
         <p className='text'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        </div>

        <nav>
          <h2>Exclusive</h2>
          <ul className='site-header-list'>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <Link to={"conx"} href="">Contact</Link>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <Link to={"sign"} href="">Sign Up</Link>
            </li>
          </ul>

        <div className="nav-right">
          <input className='inp' type="text" placeholder='What are you looking for? 🔍' />
          <div className="btn-wr">
        

          <Link to="likes" className="like-icon">
          <span className="like-count">{likedCount}</span>
          ❤️
        </Link>

        <Link to="basket" className="basket-icon">
        <span className='basket-count'>{basketCount}</span>
          🛒
        </Link>

          </div>
        </div>

        </nav>


       </div>

    </div>
  )
}

export default Navbar