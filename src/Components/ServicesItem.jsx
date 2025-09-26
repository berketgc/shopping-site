import React from 'react'

const ServicesItem = ({img, paraf}) => {
  return (
    <div>
        <div className='flex flex-row gap-3  items-center border-b-2 border-white md:border-0  '>
           <img className='size-20 md:size-28 lg:size-36' src={`/images/${img}`}alt="" />
           <p>   {paraf}   </p>
        </div>
        
    </div>
  )
}

export default ServicesItem