import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../Context-API/StoreContext";


export default function Navbar() {

  const [showTopBar, setShowTopBar] = useState(true)
  const {images} = useContext(StoreContext)
  

  return (
    <div className="w-[100vw] h-auto">
      {
        showTopBar
        &&
        <div className=" topNav text-white  font-light w-full bg-[#1C1F2A] py-1.5">
          <ul className=" font-inria flex justify-end px-8 gap-4">
            <Link>News & Articles</Link>
            |
            <Link>Facebook</Link>
            |
            <Link>Instagram</Link>
            |
            <button onClick={() => setShowTopBar(false)}>x</button>
          </ul>

        </div>
      }

{/* Main Navbar section  */}

      <div className="w-11/12 py-3 flex justify-between mx-auto">

      {/* left section  */}

        <div className=" flex gap-[4rem] items-center">

          {/* logo  */}
          <div>
            <img src={images.NavLogo} alt="" />
          </div>

          {/* Pages list  */}
          <ul className=" flex gap-[2rem]">
            <Link>Home</Link>
            <Link>Services</Link>
            <Link>About us</Link>
            <Link>Contact us</Link>
            <Link>Universities</Link>
            <Link>Testimonials</Link>
          </ul>
        </div>

        {/* Right section  */}

        <div className="flex items-center justify-center">
          <button className=" px-[3rem] py-3 rounded-3xl text-white bg-[#1F94F3] hover:bg-[#077bda] font-poppins">
            Help Me Study abroad
          </button>
        </div>

      </div>

    </div>
  )
}
