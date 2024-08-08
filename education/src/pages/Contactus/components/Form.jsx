import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Form() {
  return (
    <div className="w-[100vw] h-auto bg-gray-100 py-[3rem]" >

      <div className="w-full mx-auto lg:flex-row lg:w-10/12 lg:mx-auto lg:justify-between flex flex-col">

        {/* section-1  */}
      <div className=" lg:w-7/12 flex justify-center items-center w-full bg-gray-100">
        <div className=" p-8 rounded-lg w-full">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Got a question? Ask our team!</h2>
          <p className="text-gray-600 mb-6">Fill out the contact form and we will get back to you with the right answer.</p>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name*" className="border border-gray-300 p-2 rounded w-full" />
              <input type="text" placeholder="Last Name*" className="border border-gray-300 p-2 rounded w-full" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="email" placeholder="Email*" className="border border-gray-300 p-2 rounded w-full" />
              <input type="text" placeholder="Phone*" className="border border-gray-300 p-2 rounded w-full" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <select className="border border-gray-300 p-2 rounded w-full">
                <option>State of residence</option>
                <option>State 1</option>
                <option>State 2</option>
                <option>State 3</option>
                {/* Add more states as needed */}
              </select>
              <input type="text" placeholder="Subject" className="border border-gray-300 p-2 rounded w-full" />
            </div>
            <textarea placeholder="Your Message" className="border border-gray-300 p-2 rounded w-full h-32"></textarea>
            <div className=" flex">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 mx-auto text-white px-6 py-2 rounded-full  mt-4">Send Message</button>
            </div>
          </form>
        </div>
      </div>

      {/* section 2  */}
        <div className=" lg:w-4/12 bg-white w-10/12 mx-auto border-t-[#1F94F3] border-t-4 px-[2rem] py-[1rem] space-y-[1rem] ">
        <div className=" text-slate-500">
          <h1><b>Lorem ipsum dolor</b> sit amet.</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa.</p>
        </div>
        <hr />
        {/* number  */}
        <div className=" flex gap-4 items-center">
          <div className="w-[50px] h-[50px] bg-slate-100 rounded-full border flex justify-center items-center">
            <FaPhoneAlt className=" text-[#1F94F3]"/>
          </div>
          <p>+91 98234-43244</p>
        </div>

        <hr />
        {/* Mail  */}
        <div className=" flex gap-4 items-center">
          <div className="w-[50px] h-[50px] bg-slate-100 rounded-full border flex justify-center items-center">
            <FaEnvelope className=" text-[#1F94F3]"/>
          </div>
          <p>info@careerthrive.com </p>
        </div>

        <hr />
        {/* whatapps  */}
        <div className=" flex gap-4 items-center">
          <div className="w-[50px] h-[50px] bg-slate-100 rounded-full border flex justify-center items-center">
            <FaWhatsapp className=" text-[#1F94F3]"/>
          </div>
          <p>+91 98234-43244</p>
        </div>

        <hr />
        {/* location  */}
        <div className=" flex gap-4 items-center">
          <div className="w-[50px] h-[50px] bg-slate-100 rounded-full border flex justify-center items-center">
            <FaMapMarkerAlt className=" text-[#1F94F3]"/>
          </div>
          <p>+91 98234-43244</p>
        </div>
        <hr />
        <div className=" flex space-x-6 justify-center">
           <div className=" bg-slate-100 w-10 h-10 border flex justify-center items-center rounded-full">
            <FaFacebookF/>
           </div>
           <div className=" bg-slate-100 w-10 h-10 border flex justify-center items-center rounded-full">
            <FaTwitter/>
           </div>
           <div className=" bg-slate-100 w-10 h-10 border flex justify-center items-center rounded-full">
            <FaLinkedinIn/>
           </div>

        </div>

        </div>
      </div>
    </div>
  )
}
