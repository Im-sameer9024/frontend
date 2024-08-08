/* eslint-disable react/prop-types */


export default function Unicard({badge,title,description,image}) {
  return (
    <div>
      <div className=" w-[284px]  flex flex-col h-[226px] border border-black box-border ">
      <div className='w-full'>
        <img src={image} alt="img" />
      </div>
      <div className=' flex flex-col w-full h-full   bg-[#1F94F3] px-4 text-white pt-3'>
        <h1 className=' font-bold'>{title}</h1>
        <p>{description}</p>
        <div className=' flex justify-end'>
        <span className=' px-2 rounded-lg bg-white text-black  text-center font-bold'>{badge}</span>
        </div>
      </div>
    </div>
    </div>
  )
}
