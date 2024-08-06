
import Ourheader from '../Ourheader'
import Ourservices from './serviceCom/Ourservices'

export default function Services() {

  const title ="Our Services"

  return (
    <div className=' w-[100vw] h-[100vh]'>
      <Ourheader title={title}/>
      <Ourservices/>
    </div>
  )
}
