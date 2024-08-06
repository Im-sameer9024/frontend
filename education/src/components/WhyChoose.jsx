import { images } from "../assets/data"

export default function WhyChoose() {
  return (
    <div className="w-[100vw] h-auto my-[3rem]">
      <div className="w-10/12 mx-auto">
        {/* heading section  */}
        <div className=" space-y-5" >
          <h1 className=" text-center font-poppins text-[#1F94F3] font-bold text-[2rem]">WHY CHOOSE US</h1>
          <p className=" font-jost text-center text-slate-500 ">Endless possibilities begin here</p>
        </div>

        {/* Grid section  */}
        <div className=" lg:grid-cols-4 grid grid-cols-1 gap-4  my-[2rem]">

          {/* grid-1  */}
          <div className="bg-slate-300 rounded-xl relative ">
            <div className=" w-full h-full" >
              <img src={images.choose1} alt="" className=" rounded-xl w-full h-full" />
            </div>
            <div className=" rounded-xl text-white h-full w-full bg-black bg-opacity-40 top-0 bottom-0 flex  flex-col justify-end gap-1 px-3 pb-3 absolute">
              <p className=" font-jost">Serverd</p>
              <h1 className=" text-[2rem] font-inria">750+</h1>
              <p className=" font-jost">Student from <span className=" font-bold">21 countries</span></p>
            </div>
          </div>

          {/* grid-2  */}

          <div className="bg-slate-300 rounded-xl row-span-2">
            <div className="bg-slate-300 rounded-xl relative ">
              <div >
                <img src={images.choose2} alt="" className=" rounded-xl w-full h-full" />
              </div>
              <div className=" rounded-xl text-white w-full bg-black bg-opacity-40 top-0 bottom-0 flex  flex-col justify-end gap-1 px-3 pb-3 absolute">
              <h1 className=" text-[2rem] font-inria">120+</h1>
                <p className=" font-jost">Student got the university of <br />their choice</p>
                
              </div>
            </div>
          </div>

          {/* grid-3  */}

          <div className="bg-slate-300 rounded-xl relative ">
            <div className=" w-full h-full" >
              <img src={images.choose3} alt="" className=" rounded-xl w-full h-full" />
            </div>
            <div className=" rounded-xl text-white h-full w-full bg-black bg-opacity-40 top-0 bottom-0 flex  flex-col justify-end gap-1 px-3 pb-3 absolute">
              
              <h1 className=" text-[2rem] font-inria">900+</h1>
              <p className=" font-jost">acceptance in 2024 </p>
            </div>
          </div>

          {/* grid-4  */}

          <div className="bg-slate-300 rounded-xl relative row-span-2 ">
            <div className=" w-full h-full" >
              <img src={images.choose4} alt="" className=" object-cover rounded-xl w-full h-full" />
            </div>
            <div className=" rounded-xl text-white h-full w-full bg-black bg-opacity-40 top-0 bottom-0 flex  flex-col justify-end gap-1 px-3 pb-3 absolute">
              
              <h1 className=" text-[2rem] font-inria">10x</h1>
              <p className=" font-jost">more likely to be accepted to elite universities in the US</p>
            </div>
          </div>

          {/* grid-5 */}

          <div className="bg-slate-300 rounded-xl relative ">
            <div className=" w-full h-full" >
              <img src={images.choose5} alt="" className=" rounded-xl w-full h-full" />
            </div>
            <div className=" rounded-xl text-white h-full w-full bg-black bg-opacity-40 top-0 bottom-0 flex  flex-col justify-end gap-1 px-3 pb-3 absolute">
              
              <h1 className=" text-[2rem] font-inria">120+</h1>
              <p className=" font-jost">elite university admissions</p>
            </div>
          </div>

          {/* grid-6  */}

          <div className="bg-slate-300 rounded-xl relative ">
            <div className=" w-full h-full" >
              <img src={images.choose6} alt="" className=" rounded-xl w-full h-full" />
            </div>
            <div className=" rounded-xl text-white h-full w-full bg-black bg-opacity-40 top-0 bottom-0 flex  flex-col justify-end gap-1 px-3 pb-3 absolute">
              
              <h1 className=" text-[2rem] font-inria">3,400+</h1>
              <p className=" font-jost"> acceptance over 10 years</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}