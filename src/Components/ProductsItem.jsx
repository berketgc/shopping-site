import React, { useState } from 'react'

const ProductsItem = ({img, h2, fiyat}) => {


        const [hover, sethover] = useState(false);
      


  return (
    <div >
            
           <div className='flex flex-col gap-4 p-3 justify-center items-center  '>

     
      <div onMouseEnter={()=>{sethover(true);}} onMouseLeave={()=>{sethover(false);}} className='relative w-full max-w-[250px]  md:w-[400px] group:'>
        <img 
          className='w-full h-[300px] object-cover rounded-lg' 

          src={`/images/${img}`}
          alt=""  
        />
        { hover && (
        <div className='absolute top-2 right-0  p-2 rounded shadow-md flex flex-col gap-3 bg-sky-100 '>
          <a href="#" className='text-sm hover:underline size-6'><img src="images/heart.png" alt="" /></a>
          <a href="#" className='text-sm hover:underline size-6 '><img src="images/shopping.png" alt="" /></a>
          <a href="#" className='text-sm hover:underline size-6'><img src="images/share.png" alt="" /></a>
        </div> )}
      </div> 
     

      <h2 className='text-xl font-semibold mt-2'>{h2}</h2>

      <span>{fiyat}</span>
      <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors mt-1'>
        HEMEN AL
      </button>
    </div>

    </div>
  )
}

export default ProductsItem