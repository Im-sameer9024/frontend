import { useContext } from "react"
import { StoreContext } from "../Context-API/StoreContext"


export default function Counseling() {

  const { images } = useContext(StoreContext)

  return (
    <div className="w-[100vw] h-auto bg-[#F0F0F0]">
      <div className="w-10/12 mx-auto py-[3rem]">
        <div>
          <h1 className=" text-center font-poppins text-[#1F94F3] font-bold text-[2rem]">THE COUNSELING PROCESS</h1>
          <p className=" font-jost text-center ">Professional-Streamlined-Simple</p>
        </div>
        {/* steps  */}
        <div className=" flex justify-between mt-[3rem]">
        
          {/* step-1  */}
          <div className="w-2/12 flex flex-col items-center gap-3 text-center">
            <div className="bg-[#1F94F3] w-[3.5rem] font-bold text-white text-[2rem] rounded-full flex justify-center items-center h-[3.5rem]">1</div>
            <div>
              <img src={images.step1} alt="step1" />
            </div>
            <p className=" font-jost">Free Expert
              Counseling Service</p>
          </div>

          {/* step-2  */}
          <div className="w-2/12 flex flex-col items-center gap-3 text-center">
            <div className="bg-[#1F94F3] w-[3.5rem] font-bold text-white text-[2rem] rounded-full flex justify-center items-center h-[3.5rem]">2</div>
            <div>
              <img src={images.step2} alt="step1" />
            </div>
            <p className=" font-jost">Identify Course,
              Country & University</p>
          </div>


          {/* step-3  */}
          <div className="w-2/12 flex flex-col items-center gap-3 text-center">
            <div className="bg-[#1F94F3] w-[3.5rem] font-bold text-white text-[2rem] rounded-full flex justify-center items-center h-[3.5rem]">3</div>
            <div>
              <img src={images.step3} alt="step1" />
            </div>
            <p className=" font-jost">International Test
              Preparation</p>
          </div>

          {/* step-4  */}
          <div className="w-2/12 flex flex-col items-center gap-3 text-center">
            <div className="bg-[#1F94F3] w-[3.5rem] font-bold text-white text-[2rem] rounded-full flex justify-center items-center h-[3.5rem]">4</div>
            <div>
              <img src={images.step4} alt="step1" />
            </div>
            <p className=" font-jost">FApplication Editing &
              Processing</p>
          </div>

          {/* step-5 */}
          <div className="w-2/12 flex flex-col items-center gap-3 text-center">
            <div className="bg-[#1F94F3] w-[3.5rem] font-bold text-white text-[2rem] rounded-full flex justify-center items-center h-[3.5rem]">5</div>
            <div>
              <img src={images.step5} alt="step1" />
            </div>
            <p className=" font-jost">Funding, Visa & Pre-
              Departure Prep.</p>
          </div>

        </div>
      </div>

    </div>
  )
}
