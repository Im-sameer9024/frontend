
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {testimonial} from '../../assets/data'
import Card from '../Card';



const Slider = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    center: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  };

  console.log(testimonial)

  return (
    <section id="slider" className="pt-5">
      <div className="container">
        <h1 className="text-center text-[2rem] text-yellow-500"><b>TESTIMONIALS</b></h1>
        <p className=' text-center'>What Our Students Say</p>
        <div className="slider my-6">
          <OwlCarousel className="owl-theme" {...options}>

          {
            testimonial.map((item) => (
              <Card className="slider-card" key={item.id} name={item.name} description={item.description} image={item.img} university={item.school} />
            ))
          }
            {/* <div className="slider-card">
              <div className="d-flex justify-content-center align-items-center mb-4">
                <img src="images/slide-1.jpg" alt="" />
              </div>
              <h5 className="mb-0 text-center"><b>HTML CSS3 Tutorials</b></h5>
              <p className="text-center p-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam temporibus quidem magni qui doloribus quasi natus inventore nisi velit minima.
              </p>
            </div> */}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default Slider;
