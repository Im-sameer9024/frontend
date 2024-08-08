/* eslint-disable react/no-unescaped-entities */
import {images} from '../../../assets/data'

export default function Whoare() {
  return (
    <div className="w-[100vw] h-auto my-[5rem]">
      <div className="w-10/12 mx-auto">
        <div >
          <h1 className=" text-center font-poppins text-[#1F94F3] font-bold text-[2rem]">WHO WE ARE</h1>
          <p className=" font-jost text-center ">Road Map to Study Abroad</p>
        </div>
        <div className="w-full flex my-[2rem] items-center justify-between">
          <div className=' w-6/12 font-jost'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>

          </div>
          <div className='w-5/12'>
            <img src={images.whoareimg} alt="img" className=' rounded-xl shadow-xl' />
          </div>

        </div>
      </div>

    </div>
  )
}
