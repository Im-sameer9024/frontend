import { images } from '../../../assets/data'

export default function Ourservices() {
  return (
    <div className="w-[100vw] h-auto">
      <div className="w-10/12 flex flex-col mx-auto py-[3rem]">

        {/* Heading section  */}
        <div>
          <h1 className=" text-center font-poppins text-[#1F94F3] font-bold text-[2rem]">OUT SERVICES</h1>
          <p className=" font-jost text-center ">Road Map to Study Abroad</p>
        </div>

        {/* second sections  */}

        <div className=' flex flex-col lg:flex-row mx-auto justify-evenly gap-4 w-full h-auto my-[3rem] '>

          {/* left side section  */}
          <div className=" w-full flex  flex-col gap-[6rem] text-center items-center ">

            {/* service1 img  */}
            <div className=' w-[20rem]'>
              <img src={images.service1} alt="" />
            </div>
            {/* text section  */}
            <div>
              <h1 className=' font-poppins font-bold text-[1.3rem]'>Short Listing & Application</h1>
              <p className=' font-jost'>We Thoroughly Assess Your Profile And Help You Select The Best
                Countries, Universities & Courses Meeting Your Goals.</p>
            </div>

            {/* service3 img  */}
            <div className=' w-[20rem]'>
              <img src={images.service3} alt="" />
            </div>
            {/* text section  */}
            <div>
              <h1 className=' font-poppins font-bold text-[1.3rem]'>Scholarship & Education Loan</h1>
              <p className=' font-jost'>We Help You Get Scholarship And Education Loan. We Also Offer
                Guaranteed SIO Scholarship Of Up To Rs. 20,000.</p>

            </div>


            {/* service5 img  */}
            <div className=' w-[20rem]'>
              <img src={images.service5} alt="" />
            </div>
            {/* text section  */}
            <div>
              <h1 className=' font-poppins font-bold text-[1.3rem]'>Pre Departure Assistance</h1>
              <p className=' font-jost'>We Help You Book Flight Ticket, Accommodation, Forex Card,
                International SIM Card, And More, Before You Go.</p>

            </div>

          </div>

          {/* Middle section  */}
          <div className=" hidden lg:flex flex-col gap-[16rem] item-center  bg-sky-400 w-1 ">
            {/* first block  */}
            <div className='bg-sky-400 ml-[-6px] w-4 h-4 rotate-45 mt-[6rem] relative'>
              <div className=' absolute bottom-[-6px] left-4 bg-sky-400 rotate-45 w-1 h-[3rem]'></div>
            </div>

            {/* second block  */}
            <div className='bg-sky-400 relative ml-[-6px] w-4 h-4 rotate-45'>
              <div className=' absolute top-[-6px] right-4 bg-sky-400 rotate-45 w-1 h-[3rem]'></div>
            </div>

            {/* third block  */}
            <div className='bg-sky-400 ml-[-6px] w-4 h-4 rotate-45 mt-[-3.5rem] relative'>
              <div className=' absolute bottom-[-6px] left-4 bg-sky-400 rotate-45 w-1 h-[3rem]'></div>
            </div>

            {/* fourth block  */}
            <div className='bg-sky-400 relative ml-[-6px] w-4 h-4 rotate-45'>
              <div className=' absolute top-[-6px] right-4 bg-sky-400 rotate-45 w-1 h-[3rem]'></div>
            </div>

            {/* fifth block  */}
            <div className='bg-sky-400 relative ml-[-6px] w-4 h-4 rotate-45 mt-[-2.7rem]'>
              <div className=' absolute bottom-[-6px] left-4 bg-sky-400 rotate-45 w-1 h-[3rem]'></div>
            </div>

            {/* sixth block  */}
            <div className='bg-sky-400 ml-[-6px] w-4 h-4 rotate-45 mt-[-1rem] relative'>
              <div className=' absolute top-[-6px] right-4  bg-sky-400 rotate-45 w-1 h-[3rem]'></div>
            </div>
          </div>

          {/* right side section  */}
          <div className=" text-center items-center w-full flex  flex-col gap-[6rem] mt-[4rem] ">

            {/* text section  */}
            <div>
              <h1 className=' font-poppins font-bold text-[1.3rem]'>Counselling</h1>
              <p className=' font-jost'>We Provide Online And Offline Counselling At A Time Of Your
                Convenience; And Understand Your Study Abroad Goals. </p>

            </div>

            {/* service1 img2  */}
            <div className=' w-[20rem]'>
              <img src={images.service2} alt="" />
            </div>


            {/* text section  */}
            <div>
              <h1 className=' font-poppins font-bold text-[1.3rem]'>Online & Offline Coaching</h1>
              <p className=' font-jost'>We Provide Excellent Offline & Online Coaching For IELTS/ TOEFL/ PTE/
                GRE/ GMAT/ SAT at the most affordable fee.</p>

            </div>


            {/* service4 img  */}
            <div className=' w-[20rem]'>
              <img src={images.service4} alt="" />
            </div>

            {/* text section  */}
            <div>
              <h1 className=' font-poppins font-bold text-[1.3rem]'>VISA Application</h1>
              <p className=' font-jost'>We Apply For Your Visa At Your Convenient Time, In Your Presence Or By
                Screen-Sharing To Ensure 100% Transparency.</p>
            </div>



            {/* service3 img6  */}
            <div className=' w-[20rem]'>
              <img src={images.service6} alt="" />
            </div>

          </div>
        </div>

      </div>
    </div>


  )
}
