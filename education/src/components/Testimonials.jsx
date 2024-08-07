import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import Slider from "./testimonialSlider/Slider";
// import Slider from "./Slider";

export default function Testimonials() {
  return (
    <>
      <div className=" hidden lg:block   relative bg-banner bg-center bg-contain  bg-no-repeat w-[100vw] h-auto lg:h-[60vh]">

        <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-10/12 bg-[#FAB819] mx-auto flex justify-evenly h-auto">

          {/* first block  */}
          <div className=" flex flex-col items-center py-[1rem]">
            <h1 className=" font-poppins text-[2.2rem] text-[#1B52E0] ">100<span className="text-[1rem] font-bold">%</span></h1>
            <p className=" text-[#5C6066] ">VISA GRANT (2023-24) </p>
          </div>

          {/* second block  */}
          <div className=" flex flex-col items-center py-[1rem]">
            <h1 className=" font-poppins text-[2.2rem] text-[#1B52E0] ">24<span className="text-[1rem] font-bold">x7</span></h1>
            <p className=" text-[#5C6066] ">SERVICE</p>
          </div>

          {/* Third block  */}
          <div className=" flex flex-col items-center py-[1rem]">
            <h1 className=" flex items-baseline font-poppins text-[2.2rem] text-[#1B52E0] ">0<span className="text-[1rem]"><MdOutlineStarBorderPurple500 /></span></h1>
            <p className=" text-[#5C6066]">GOOGLE RATING</p>
          </div>

          {/* fourth block  */}
          <div className=" flex flex-col items-center py-[1rem]">
            <h1 className=" font-poppins text-[2.2rem] text-[#1B52E0] "><span className="text-[1rem]">#</span>100</h1>
            <p className=" text-[#5C6066] ">CONSULTANCY</p>
          </div>
        </div>

      </div>

     <div className=" w-full flex">
       {/* Slider  */}
       <Slider/>
     </div>

      {/* For Mobile screen  */}

      <div className="w-full lg:hidden bg-[#FAB819] mx-auto flex flex-col justify-evenly h-auto">

        {/* first block  */}
        <div className=" flex flex-col items-center py-[1rem]">
          <h1 className=" font-poppins text-[3.2rem] text-[#1B52E0] ">100<span className="text-[1rem] font-bold">%</span></h1>
          <p className=" text-[#5C6066] ">VISA GRANT (2023-24) </p>
        </div>

        {/* second block  */}
        <div className=" flex flex-col items-center py-[1rem]">
          <h1 className=" font-poppins text-[3.2rem] text-[#1B52E0] ">24<span className="text-[1rem] font-bold">x7</span></h1>
          <p className=" text-[#5C6066] ">SERVICE</p>
        </div>

        {/* Third block  */}
        <div className=" flex flex-col items-center py-[1rem]">
          <h1 className=" flex items-baseline font-poppins text-[3.2rem] text-[#1B52E0] ">0<span className="text-[1rem]"><MdOutlineStarBorderPurple500 /></span></h1>
          <p className=" text-[#5C6066]">GOOGLE RATING</p>
        </div>

        {/* fourth block  */}
        <div className=" flex flex-col items-center py-[1rem]">
          <h1 className=" font-poppins text-[3.2rem] text-[#1B52E0] "><span className="text-[1rem]">#</span>100</h1>
          <p className=" text-[#5C6066] ">CONSULTANCY</p>
        </div>
      </div>

    </>
  )
}
