import { images } from '../../assets/data'

export default function Unicard() {
  return (
    <div className=' my-[10rem]'>
      <div className=" w-[284px]  flex flex-col h-[226px] border border-black box-border ">
      <div className='w-full'>
        <img src={images.uni1} alt="img" />
      </div>
      <div className=' flex flex-col w-full h-full   bg-[#1F94F3] px-4 text-white pt-3'>
        <h1 className=' font-bold'>Colorado State University</h1>
        <p>Tier 1 in research. #2 Best state for Jobs</p>
        <div className=' flex justify-end'>
        <span className=' px-2 rounded-lg bg-white text-black w-10 text-center font-bold'>Us</span>
        </div>
      </div>
    </div>
    </div>
  )
}
