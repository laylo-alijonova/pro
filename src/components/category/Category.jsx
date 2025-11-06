import "./Category.css"
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { MdOutlineCameraAlt } from "react-icons/md";
import { LuHeadphones } from "react-icons/lu";
import { TbDeviceGamepad } from "react-icons/tb";

function Category(){
  return(
    <div>
      <div className="category">
      <div className="today"></div>
      <p className='title'>Categories</p>
      </div>
      <h3 className='browse'>Browse By Category</h3>

      <div className="carts">
        <div className="phone">
        <HiOutlineDevicePhoneMobile className='phone-icon' />
          <p>Phones</p>
        </div>

        <div className="phone">
        <HiOutlineComputerDesktop className='phone-icon' />
          <p>Phones</p>
        </div>

        <div className="phone">
        < BsSmartwatch className='phone-icon' />
          <p>Phones</p>
        </div>

        <div className="phone">
        <MdOutlineCameraAlt  className='phone-icon' />
          <p>Phones</p>
        </div>

        <div className="phone">
        <LuHeadphones  className='phone-icon' />
          <p>Phones</p>
        </div>

        <div className="phone">
        <TbDeviceGamepad className='phone-icon' />
          <p>Phones</p>
        </div>

      </div>
        <br />
        <br />
        <br />
        <hr />
        <br />
        <br />
    </div>
  )
}

export default Category