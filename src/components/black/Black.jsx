import leftImg from "../../assets/Frame.png"
import rightImg from "../../assets/par.jpg"
import img6 from "../../assets/Services.png"
import img7 from "../../assets/Services (1).png"
import img8 from "../../assets/Services (2).png"
import "./Black.css"

function Black(){
  return(
    <div>
    <div style={{display:"flex", gap:"20px", margin:"30px 0 30px " , flexWrap:"wrap", width:"100%"}} className='imgs-wr'>
      <img className='parfume' src={leftImg} alt="" />
      <img className='parfume' src={rightImg} alt="" />
    </div>

    <div className="icons">
      <div className="deliver">
      <img src={img8} alt="" />
      <h5>FREE AND FAST DELIVERY</h5>
      <p>Free delivery for all orders over $140</p>
      </div>

      <div className="deliver">
      <img src={img7} alt="" />
      <h5>FREE AND FAST DELIVERY</h5>
      <p>Free delivery for all orders over $140</p>
      </div>

      <div className="deliver">
      <img src={img6} alt="" />
      <h5>FREE AND FAST DELIVERY</h5>
      <p>Free delivery for all orders over $140</p>
      </div>
    </div>

    </div>
  )
}

export default Black