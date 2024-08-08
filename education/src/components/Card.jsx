/* eslint-disable react/prop-types */
import { FaLinkedin, FaGooglePlusG, FaImage,FaQuoteLeft } from 'react-icons/fa';


export default function Card({ name, description, image, university }) {
  return (
    <div className="slider-card max-w-sm mx-auto bg-blue-900 text-white rounded-xl p-6 relative shadow-lg">
    <div><FaQuoteLeft className=' text-yellow-400 text-[2rem]'/></div>
      <div className="absolute top-4 left-4 text-yellow-400 text-3xl">
        {/* <span>&ldquo;</span> */}
      </div>
      <p className="mt-10 text-sm">
        {description}
      </p>
      <div className="mt-4 flex justify-center space-x-3 text-yellow-400">
        <FaLinkedin className="text-2xl cursor-pointer" />
        <FaGooglePlusG className="text-2xl cursor-pointer" />
        <FaImage className="text-2xl cursor-pointer" />
      </div>
      <div className="mt-4 flex flex-col items-center">
        <div className=' w-20'>
          <img
            className=" rounded-full border-2 border-white"
            src={image} // Placeholder image link
            alt="Anshita Pasari" width="80px"
          />
        </div>
        <h5 className="mt-4 text-lg font-bold text-yellow-400">{name}</h5>
        <p className="text-sm">{university}</p>
      </div>
    </div>
  )
}
