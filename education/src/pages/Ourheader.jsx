/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function Ourheader({ title }) {
  return (
    <div className=' relative bg-banner2 bg-center flex justify-center items-center text-white text-[3rem]  w-[100vw] h-[70vh] '>
      <span className=' z-20'>
        {title}
      </span>
      <div className=' absolute top-0 left-0 bg-black w-full h-full  opacity-50 '></div>

    </div>
  )
}
