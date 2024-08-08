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
      <div>
        <Filtered country={country} setCountry={setCountry} />
      </div>
      <div>
        <Allcards country={country} />

      </div>

    </>
  )
}
