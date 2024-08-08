import { useState } from "react";
import Ourheader from "../Ourheader";
import Allcards from "./Allcards";
import Filtered from "./Filtered";

const title = "Universities"


export default function Universities() {

  const[country,setCountry] = useState("All")
  
  return (
    <>
      <Ourheader title={title} />
      <div className=" w-10/12 mx-auto mt-[3rem]">
        <Filtered country={country} setCountry={setCountry} />
      </div>
      <div className=" my-[3rem]">
        <Allcards country={country} />
      </div>

    </>
  )
}
