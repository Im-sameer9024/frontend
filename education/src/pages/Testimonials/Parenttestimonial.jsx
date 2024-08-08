import { MdOutlinePlayCircle } from "react-icons/md";

export default function Parenttestimonial() {
  return (
    <div>
      <div>
          <h1  className=" text-center font-poppins text-[#1F94F3] font-bold text-[2rem]">THE COUNSELING PROCESS</h1>
          <p  className=" font-jost text-center text-slate-500 ">Professional-Streamlined-Simple</p>
        </div>


        <div className=" w-10/12 gap-9 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-[3rem] place-items-center ">

        {/* 1 */}
        <div className=" w-[18rem] h-[12rem] flex justify-center items-center  bg-[#D9D9D9]">
          <MdOutlinePlayCircle className=" text-[8rem]"/>
        </div>
        
        {/* 2 */}
        <div className=" w-[18rem] h-[12rem] flex justify-center items-center  bg-[#D9D9D9]">
          <MdOutlinePlayCircle className=" text-[8rem]"/>
        </div>

        {/* 3 */}
        <div className=" w-[18rem] h-[12rem] flex justify-center items-center  bg-[#D9D9D9]">
          <MdOutlinePlayCircle className=" text-[8rem]"/>
        </div>

        {/* 4 */}
        <div className=" w-[18rem] h-[12rem] flex justify-center items-center  bg-[#D9D9D9]">
          <MdOutlinePlayCircle className=" text-[8rem]"/>
        </div>


        {/* 5 */}
        <div className=" w-[18rem] h-[12rem] flex justify-center items-center  bg-[#D9D9D9]">
          <MdOutlinePlayCircle className=" text-[8rem]"/>
        </div>


        {/* 6 */}
        <div className=" w-[18rem] h-[12rem] flex justify-center items-center  bg-[#D9D9D9]">
          <MdOutlinePlayCircle className=" text-[8rem]"/>
        </div>
        

      </div>
    </div>
  )
}
