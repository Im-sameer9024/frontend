import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { StoreContext } from "../Context-API/StoreContext";
import { RxHamburgerMenu } from "react-icons/rx";
// import { FaUser } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";


export default function Navbar() {

  const [showTopBar, setShowTopBar] = useState(true)
  const { images } = useContext(StoreContext)
  const [showNav, setShowNav] = useState(false)



  return (
    <div className="w-[100vw] h-auto">
      {
        showTopBar
        &&
        <div className=" topNav text-white  font-light w-full bg-[#1C1F2A] py-1.5 text-[0.8rem]">
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

      <div className="w-11/12 py-3 flex justify-between mx-auto items-center">

        {/* left section  */}

        <div className=" flex gap-[4rem] items-center">

          {/* logo  */}
          <div>
            <img src={images.NavLogo} alt="" />
          </div>

          {/* Pages list  */}
          <ul className=" list lg:flex xl:gap-[3rem] lg:gap-3 lg:text-[1rem] hidden">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/about">About us</NavLink>
            <NavLink to="/contact">Contact us</NavLink>
            <NavLink to="/university">Universities</NavLink>
            <NavLink to="/testimonial">Testimonials</NavLink>
          </ul>
        </div>

        {/* Right section  */}

        <div className=" hidden  lg:flex items-center justify-center">
          <button className=" lg:px-[1rem] lg:text[1rem] px-[3rem] py-3 rounded-3xl text-white bg-[#1F94F3] hover:bg-[#077bda] font-poppins">
            Help Me Study abroad
          </button>
        </div>

        {/* Burger icon  */}
        <div className=' lg:hidden'>
          <button onClick={() => setShowNav(!showNav)}>
            <RxHamburgerMenu className=' text-[1.5rem] ' />
          </button>
        </div>

      </div>

      {/* for mobile screen  */}

      <div id='Navbar' className={` z-30 w-[100vw] h-[100vh] bg-slate-200 absolute top-0 ${showNav ? "block" : "hidden"} flex flex-col justify-between `}>

        {/* Navbar in side section  */}

        <div className=" w-full ">
          {/* section-1  */}
          <div className=' mx-auto  pl-[2rem] justify-between items-center  gap-4 flex py-[2rem]'>
            <div>
              <img src={images.NavLogo} alt="" />
            </div>

            <div onClick={() =>setShowNav(!showNav)} className="pr-4">
              <IoClose className=" font-bold text-[2rem]" />
            </div>
          </div>

          {/* section-2  */}
          <div className=' text-[1.2rem] flex flex-col space-y-[1rem] font-bold'>
            <hr className=' border-black border ' />
            <NavLink to="/" className=' pl-[2rem]'>Home</NavLink>
            <hr className=' border-black border' />
            <NavLink to="/services" className=' pl-[2rem]'>Services</NavLink>
            <hr className=' border-black border' />
            <NavLink to="/about" className=' pl-[2rem]'>About us</NavLink>
            <hr className=' border-black border' />
            <NavLink to="/university" className=' pl-[2rem]'>Universities</NavLink>
            <hr className=' border-black border' />
            <NavLink to="/testimonial" className=' pl-[2rem]'>Testimonials</NavLink>
          </div>
        </div>

        {/* buttons  */}

        <div className=" flex items-center my-[2rem] justify-center">
          <button className=" px-[3rem] py-3 rounded-3xl text-white bg-[#1F94F3] hover:bg-[#077bda] font-poppins">
            Help Me Study abroad
          </button>
        </div>



      </div>


    </div>
  )
}