import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Aboutus from "./pages/Aboutus/Aboutus";
import Contactus from "./pages/Contactus/Contactus";
import Universities from "./pages/Universities/Universities";
import Testimonials from "./pages/Testimonials/Testimonials";
import Footer from "./components/Footer";




export default function App() {

  
  return (
    <div className=" w-[100vw] h-[100vh]">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/about" element={<Aboutus/>}/>
        <Route path="/contact" element={<Contactus/>}/>
        <Route path="/university" element={<Universities/>}/>
        <Route path="/testimonial" element={<Testimonials/>}/>
      </Routes>
      <Footer/>
      
     
    </div>
  )
}
