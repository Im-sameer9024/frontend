
import Ourheader from '../Ourheader'
import Ourservices from './serviceCom/Ourservices'
import University from './Universities/University'

export default function Services() {

  const title ="Our Services"

  return (
    <>
      <Ourheader title={title}/>
      <Ourservices/>
      <University/>
    </>
  )
}
