import { images } from "../assets/data"

export default function TopDestinations() {
  return (
    <div className="w-[100vw] h-auto my-[3rem]">
      <div className="w-10/12 mx-auto">
      {/* heading section  */}
      <div className=" space-y-5" >
          <h1 className=" text-center font-poppins text-[#1F94F3] font-bold text-[2rem]">TOP 5 STUDY ABROAD DESTINATIONS</h1>
          <p className=" font-jost text-center text-slate-500 ">Where do you want to study?</p>
        </div>

        {/* Flags section  */}
        <div className="w-full my-[4rem] flex justify-between">
         
         {/* Flag 1  */}
         <div className=" w-2/12 flex flex-col items-center gap-3 ">
          <div>
            <img src={images.flag1} alt="" />
          </div>
          <h1 className=" font-semibold">Study in USA</h1>
         </div>

         {/* Flag 2  */}
         <div className=" w-2/12 flex flex-col items-center gap-3 ">
          <div>
            <img src={images.flag2} alt="" />
          </div>
          <h1 className=" font-semibold">Study in USA</h1>
         </div>

         {/* Flag 3  */}
         <div className=" w-2/12 flex flex-col items-center gap-3 ">
          <div>
            <img src={images.flag3} alt="" />
          </div>
          <h1 className=" font-semibold">Study in USA</h1>
         </div>

         {/* Flag 4  */}
         <div className=" w-2/12 flex flex-col items-center gap-3 ">
          <div>
            <img src={images.flag4} alt="" />
          </div>
          <h1 className=" font-semibold">Study in USA</h1>
         </div>

         {/* Flag 5  */}
         <div className=" w-2/12 flex flex-col items-center gap-3 ">
          <div>
            <img src={images.flag5} alt="" />
          </div>
          <h1 className=" font-semibold">Study in USA</h1>
         </div>

        </div>

      </div>
    </div>
  )
}
