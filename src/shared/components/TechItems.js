import React from 'react'

function TechItems({img_src, tech_name}) {
  return (
    <div className="py-2 grid grid-cols-1 grid-rows-2 place-items-center  hover:-translate-y-1 hover:scale-110 duration-300 lg:pr-3">
        <img src={img_src} alt='react icon' className="h-8 lg:h-9"/> 
        <p className='font-medium text-gray-800 lg:font-semibod cursor-default hover:text-teal-500'>{tech_name}</p> 
    </div>
  )
}

export default TechItems