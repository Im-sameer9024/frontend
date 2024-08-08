
import Ourheader from '../Ourheader'
import Alltestmonials from './Alltestmonials'
import Parenttestimonial from './Parenttestimonial'
import Studenttestimonial from './Studenttestimonial'

export default function Testimonials() {

  const title = "Testimonials"


  return (
    <>
      <Ourheader title={title} />
      <Alltestmonials/>
      <Parenttestimonial/>
      <Studenttestimonial/>
    </>
  )
}
