import "./Banner.css"
import img from "../../assets/hero.png"

function Banner(){
  return (
    <div className='banner'>
      <div className="sidebar">
      <ul>
        <li>
          <a className='a' href="">Woman's fashion</a>
        </li>
        <li>
          <a className='a' href="">Men's fashion</a>
        </li>
        <li>
          <a className='a' href="">Electronics</a>
        </li>
        <li>
          <a className='a' href="">Home & Lifestyle</a>
        </li>
        <li>
          <a className='a' href="">Medicine</a>
        </li>
        <li>
          <a className='a' href="">Sports & Outdoor</a>
        </li>
        <li>
          <a className='a' href="">Baby & Toys</a>
        </li>
        <li>
          <a className='a' href="">Groceries & Pets</a>
        </li>
        <li>
          <a className='a' href="">Health & Beauty</a>
        </li>
      </ul>

      </div>

      <div className="banner2">
      <div className="text">
        <div className="logo">
          <img
            src="https://cdn.pixabay.com/photo/2022/09/11/06/01/apple-7446229_640.png"
            alt="apple"
          />
          <p>iPhone 14 Series</p>
        </div>

        <h2>Up to 10%<br />off Voucher</h2>

        <button>Shop Now →</button>

        <div className="dots">
          <span></span>
          <span></span>
          <span className="active"></span>
          <span></span>
        </div>
      </div>

      <div className="img">
        <img
          src={img}
          alt="iphone"
        />
      </div>
    </div>

    </div>
  )
}

export default Banner