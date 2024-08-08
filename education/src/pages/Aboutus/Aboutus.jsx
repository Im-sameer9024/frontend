import Counseling from "../../components/Counseling"
import Ourheader from "../Ourheader"
import Professional from "./components/Professional"
import Whoare from "./components/Whoare"
import Why from "./components/Why"


export default function Aboutus() {

  const title = "About us"

  return (
    <>
      <Ourheader title={title}/>
      <Whoare/>
      <Why/>
      <Counseling/>
      <Professional/>

    </>
  )
}
