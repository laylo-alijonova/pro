import "./Rasm.css"
import image from "../../assets/pioner.jpg"

function Rasm(){
  return(
    <div>

      <div className="black">

        <div className="left">
          <p style={{color:"green", marginBottom:"32px"}}>Categories</p>
          <h4>Enhance Your</h4>
          <h4>Music Experience</h4>
          <div className="dumaloq">
            <div className="birinchi">
              <p style={{textAlign:"center"}}>23</p>
              <p>Hours</p>
            </div>

            <div className="birinchi">
              <p style={{textAlign:"center"}}>05</p>
              <p>Days</p>
            </div>

            <div className="birinchi">
              <p style={{textAlign:"center"}}>58</p>
              <p>Minutes</p>
            </div>

            <div className="birinchi">
              <p style={{textAlign:"center"}}>35</p>
              <p>Seconds</p>
            </div>


          </div>

          <button className='buy'>Buy Now!</button>
        </div>

        <img className='black-image' style={{marginTop:"-20px"}} src={image} alt="" />

      </div>

    </div>
  )
}

export default Rasm