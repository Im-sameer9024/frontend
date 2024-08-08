/* eslint-disable react/prop-types */


import { countryData } from '../../assets/data'
import Unicard from "./Unicard"

export default function Allcards({ country }) {

  function getAllCards() {
    let all = []
    if (country === 'All') {
      const allCards = countryData.map((data) => data)
      all.push(allCards)
    } else {
      const filteredCards = countryData.filter((data) => data.badge === country)
      all.push(filteredCards)
    }
    return all
  }

  console.log(getAllCards())

  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center w-10/12 mx-auto gap-4'>
      {
        (getAllCards() && getAllCards()[0]).map((data) => (
          <Unicard key={data.id} title={data.title} description={data.description} badge={data.badge} image={data.img} />
        ))
      }
    </div>
  )
}
