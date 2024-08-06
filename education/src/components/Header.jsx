import { useContext } from "react"
import { StoreContext } from "../Context-API/StoreContext"
import Slider from "react-slick";
import './Header.css'

export default function Header() {

  const {  headerData } = useContext(StoreContext)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    cssEase: 'linear'
  };
  return (
    <div className=" bg-[#1C1F2A] w-[100vw] h-auto ">
      <div className=" w-10/12 mx-auto flex justify-between items-center relative">
        {/* Left Section  */}
        <div className="w-10/12 lg:w-5/12 mx-auto my-[3.5rem] text-white">

          {/* Slider  */}

          <Slider {...settings}>
            {
              headerData.map((el) => (
                <div key={el.id} className=" space-y-5">
                  <h1 className=" text-[1.3rem] md:text-[1.7rem] font-bold font-poppins">{el.title}</h1>
                  <p className=" font-jost md:text-[1.1rem]">{el.description}</p>
                  <button className=" bg-[#1F94F3] hover:bg-[#077bda] px-[1rem] rounded-3xl py-2  md:text-[1.3rem] ">Enquire Now</button>
                </div>

              ))
            }
          </Slider>
        </div>

        {/* Right Section  */}
        {/* <div className="relative hidden  w-4/12 lg:flex">
          <img src={images.Headerimg2} alt="student-1" />
          <img src={images.Headerimg1} alt="student-2" className=" absolute left-[-10rem] " />
        </div> */}

      </div>
    </div>
  )
}