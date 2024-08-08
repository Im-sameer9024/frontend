import { useState } from 'react'
import { images } from '../../../assets/data'

export default function Professional() {

  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)


  return (
    <div>

      <div className="w-10/12 mx-auto my-[3rem]">
        {/* heading section  */}
        <div className=" space-y-5" >
          <h1 className=" text-center font-poppins text-[#1F94F3] font-bold text-[2rem]">The Best of Professionals</h1>
          <p className=" font-jost text-center text-slate-500 ">We offer international students a pathway to study in leading universities. But it’s more than a pathway. We go beyond other foundation programmes – helping you to grow as a person and as a thinker, providing an experience that will stay with you for life.</p>
        </div>

        {/* second section  */}
        <div className=' mt-[2rem] flex-col gap-[2rem] md:flex-wrap md:flex-row  flex flex-wrap justify-between'>

          {/* first  */}
          <div onMouseEnter={()=>setShow1(true)} onMouseLeave={()=> setShow1(false)} className=' md:w-3/12 relative w-full rounded-xl shadow-xl'>
            <img src={images.team} alt="img" className='rounded-xl shadow-xl ' />
            <div className={` cursor-pointer light-black flex rounded-xl justify-end px-5 pb-[2rem] text-center flex-col  top-0 h-full w-full text-white absolute bg-black bg-opacity-35 ${show1 ? 'block' :'hidden'} `}>
              <h1 className='font-bold text-[1.5rem]'>Linda asand</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, quod.</p>

            </div>
          </div>

          {/* second  */}
          <div onMouseEnter={()=>setShow2(true)} onMouseLeave={()=> setShow2(false)} className='md:w-3/12 relative w-full rounded-xl shadow-xl'>
            <img src={images.team} alt="img"  className='rounded-xl shadow-xl ' />
            <div className={` cursor-pointer light-black flex rounded-xl justify-end px-5 pb-[2rem] text-center flex-col  top-0 h-full w-full text-white absolute bg-black bg-opacity-35 ${show2 ? 'block' :'hidden'} `}>
              <h1 className='font-bold text-[1.5rem]'>Linda asand</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, quod.</p>

            </div>
          </div>

          {/* third  */}
          <div onMouseEnter={()=>setShow3(true)} onMouseLeave={()=> setShow3(false)} className=' md:w-3/12 relative w-full rounded-xl shadow-xl'>
            <img src={images.team} alt="img"  className='rounded-xl shadow-xl ' />
            <div className={` cursor-pointer light-black flex rounded-xl justify-end px-5 pb-[2rem] text-center flex-col  top-0 h-full w-full text-white absolute bg-black bg-opacity-35 ${show3 ? 'block' :'hidden'} `}>
              <h1 className='font-bold text-[1.5rem]'>Linda asand</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, quod.</p>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
