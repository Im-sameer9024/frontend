import Card from "../../components/Card";
import {testimonial} from '../../assets/data'


export default function Alltestmonials() {
  return (
    <div className=" my-[4rem]">
      <div>
          <h1  className=" text-center font-poppins text-[#1F94F3] font-bold text-[2rem]">THE COUNSELING PROCESS</h1>
          <p  className=" font-jost text-center text-slate-500 ">Professional-Streamlined-Simple</p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-10/12 mx-auto my-[3rem]">
        {
            testimonial.map((item) => (
              <Card className="slider-card" key={item.id} name={item.name} description={item.description} image={item.img} university={item.school} />
            ))
          }
        </div>
        <div className=" flex">
          <button className=" mx-auto text-white font-jost bg-[#1F94F3] px-6 py-1">Load More</button>
        </div>
    </div>
  )
}
