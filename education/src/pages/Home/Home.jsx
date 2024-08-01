import Counseling from "../../components/Counseling";
import Faq from "../../components/Faq";
import Header from "../../components/Header";
import Testimonials from "../../components/Testimonials";
import TopDestinations from "../../components/TopDestinations";
import WhyChoose from "../../components/WhyChoose";


export default function Home() {
  return (
    <>
      <Header />
      <Counseling/>
      <TopDestinations/>
      <WhyChoose/>
      <Testimonials/>
      <Faq/>
    </>
  )
}
