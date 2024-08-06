import Slider from "react-slick";
import { images } from "../assets/data"



export default function TopDestinations() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    cssEase: 'linear',
  }


  return (
    <div className="w-[100vw] h-auto my-[3rem]">
      <div className="w-10/12 mx-auto">
        {/* heading section  */}
        <div className=" space-y-5" >
          <h1 className=" text-center font-poppins text-[#1F94F3] font-bold text-[1.5rem]">TOP 5 STUDY ABROAD DESTINATIONS</h1>
          <p className=" font-jost text-center text-slate-500 ">Where do you want to study?</p>
        </div>

        {/* Flags section  */}
        <div className=" hidden w-full my-[4rem] lg:flex justify-between">

          {/* Flag 1  */}
          <div className=" text-center w-2/12 flex flex-col items-center  gap-3  ">
            <div>
              <img src={images.flag1} alt="" />
            </div>
            <h1 className=" text-center font-semibold">Study in USA</h1>
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

        {/* for mobile screen  */}
        <div className=" lg:hidden w-9/12 mx-auto mt-3">
          <Slider {...settings}>

            {/* Flag 1    */}
            <div className=" w-2/12 text-center flex flex-col items-center gap-3">
              <div>
                <img src={images.flag1} alt="" />
              </div>
              <h1 className=" font-semibold">Study in USA</h1>
            </div>

            {/* Flag 2   */}
            <div className=" w-2/12 text-center flex flex-col items-center gap-3 ">
              <div>
                <img src={images.flag2} alt="" />
              </div>
              <h1 className=" font-semibold">Study in USA</h1>
            </div>

            {/* Flag 3  */}
            <div className=" w-2/12 text-center flex flex-col items-center gap-3 ">
              <div>
                <img src={images.flag3} alt="" />
              </div>
              <h1 className=" font-semibold">Study in USA</h1>
            </div>

            {/* Flag 4  */}
            <div className=" w-2/12 flex text-center flex-col items-center gap-3 ">
              <div>
                <img src={images.flag4} alt="" />
              </div>
              <h1 className=" font-semibold">Study in USA</h1>
            </div>

            {/* Flag 5  */}
            <div className=" w-2/12 text-center flex flex-col items-center gap-3 ">
              <div>
                <img src={images.flag5} alt="" />
              </div>
              <h1 className=" font-semibold">Study in USA</h1>
            </div>

          </Slider>
        </div>

      </div>
    </div>
  )
}