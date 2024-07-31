import { useContext } from "react"
import { StoreContext } from "../Context-API/StoreContext"
import Slider from "react-slick";
import './Header.css'

export default function Header() {

  const {images,headerData} = useContext(StoreContext)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed:2500,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    cssEase: 'linear'
  };
  return (
    <div className=" bg-[#1C1F2A] w-[100vw] h-auto ">
       <div className="w-10/12 mx-auto flex justify-between items-center">
        {/* Left Section  */}
       <div className="w-5/12 text-white">

{/* Slider  */}

       <Slider {...settings}>
       {
           headerData.map((el)=>(
            <div key={el.id} className=" space-y-5">
              <h1 className=" text-[2rem] font-poppins">{el.title}</h1>
              <p className=" font-jost">{el.description}</p>
              <button className=" bg-[#1F94F3] hover:bg-[#077bda] px-[3rem] rounded-3xl py-2  ">Enquire Now</button>
            </div>

           ))
       }
       </Slider>
       </div>

       {/* Right Section  */}
          <div className="5/12  flex">
            <img src={images.Headerimg2} alt="student-1" className=" relative left-[18%] " />
            <img src={images.Headerimg1} alt="student-2" className=" z-10" />
          </div>

       </div>
    </div>
  )
}
