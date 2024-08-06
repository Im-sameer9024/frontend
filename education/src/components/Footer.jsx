import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import footlogo from '../assets/footlogo.png'
export default function Footer() {
  return (
    <div className=" w-[100vw] h-auto bg-[#1C1F2A] text-white">
      <div className="w-10/12 mx-auto md:flex-row md:justify-between flex flex-col justify-between py-[2rem]">
        {/* left section  */}

        <div className=" w-8/12 flex flex-col gap-7 font-jost">
          <div>
            <img src={footlogo} alt="logo" width={210} height={56} />
          </div>
          <div>
            <h1>Where will your studies take you?</h1>
            <p>At educations.com, we believe that students who study abroad become the next generation of globally-minded adventurers and leaders - and we want more of you to do it! Every year, our search engine helps over 8 million students connect with some of the best universities and schools around the world.</p>
            <ul className=" md:flex-row md:text-[0.9rem] flex flex-col gap-3 my-4">
              <li className=" underline">Home</li>
              <li  className=" underline">Services</li>
              <li  className=" underline">About Us</li>
              <li  className=" underline">Contact Us</li>
              <li  className=" underline">Universities</li>
              <li  className=" underline">Testimonials</li>
            </ul>
          </div>

        </div>

        {/* Right section  */}
        <div className="w-4/12 flex justify-center items-center ">
          <ul className=" flex gap-4 ml-[4rem]">
            <li>
              <FaInstagram className=" text-[2rem]" />
            </li>
            <li>
              <FaFacebook className=" text-[2rem]" />
            </li>
            <li>
              <FaTwitter className=" text-[2rem]" />
            </li>
            <li>
              <FaLinkedin className=" text-[2rem]" />
            </li>
          </ul>

        </div>
      </div>

    </div>
  )
}
