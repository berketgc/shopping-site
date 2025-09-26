import React from 'react'

const BannerItem = ({img, title, paraf, button}) => {
  return (
    <div>
         <div className="md:relative flex flex-col justify-center items-center gap-4 border-2 border-gray-200 md:border-0 p-4 ">
            <img className="w-[800px] h-[240px]  rounded-2xl " src={`/images/${img}`} alt="" />
            <div className="opacity-80 bg-gray-100 md:border-2 md:border-gray-400  md:rounded-4xl md:absolute md:top-28 md:right-0 w-64 md:w-32  lg:w-52 gap-3 p-3 flex flex-col justify-center items-center md:hover:scale-110 "> 
                <h2>{title}</h2>
                <p>{paraf}</p>
                <button className=" text-[20px] text-white bg-sky-400 p-3 m-2 rounded-2xl ">{button}</button>
            </div>
          </div>


    </div>
  )
}

export default BannerItem