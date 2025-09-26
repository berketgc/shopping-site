

const BottomBar = () => {
  return (
    <div>
      <div className='flex flex-row justify-around border-2 border-gray-200 md:w-3/4 md:m-auto p-3'> 

      <div className="flex flex-col justify-center items-center w-16 md:w-52  border-r-2 border-gray-200 hover:cursor-pointer hover:scale-110">
       <a className="hidden md:flex" href="#">Ev, Yaşam</a>
       <img className="size-6 md:size-8" src="images/furniture.png" alt="" />
       </div>
       <div  className="flex flex-col justify-center items-center  w-16 md:w-52  border-r-2 border-gray-200 hover:cursor-pointer hover:scale-110">
       <a className="hidden md:flex" href="#">Moda</a>
       <img className="size-6 md:size-8" src="images/fashion.png" alt="" />
       </div>
        <div  className="flex flex-col justify-center items-center  w-16 md:w-52  border-r-2 border-gray-200 hover:cursor-pointer hover:scale-110">
       <a className="hidden md:flex" href="#">Elektronik</a>
       <img className="size-6 md:size-8" src="images/electronic-devices.png" alt="" />
         </div>
          <div  className="flex flex-col justify-center items-center  w-16 md:w-52  border-r-2 border-gray-200 hover:cursor-pointer hover:scale-110">
       <a className="hidden md:flex" href="#">Spor, Outdoor</a>
        <img className="size-6 md:size-8" src="images/running.png" alt="" />
         </div>
          <div  className="flex flex-col justify-center items-center  w-16 md:w-52  border-r-2 border-gray-200 hover:cursor-pointer hover:scale-110">
       <a className="hidden md:flex" href="#">Anne-Bebek</a>
        <img className="size-6 md:size-8" src="images/mother.png" alt="" />
         </div>
          <div  className="flex flex-col justify-center items-center  w-16 md:w-52  border-r-2 border-gray-200 hover:cursor-pointer hover:scale-110">
       <a className="hidden md:flex" href="#">Kozmetik, Kişisel Bakım</a>
        <img className="size-6 md:size-8" src="images/cosmetics.png" alt="" />
         </div>
          <div  className="flex flex-col justify-center items-center  w-16 md:w-52  border-r-2 border-gray-200 hover:cursor-pointer hover:scale-110">
       <a className="hidden md:flex" href="#">Hobi</a>
        <img className="size-6 md:size-8" src="images/physical.png" alt="" />
         </div>
          <div  className="flex flex-col justify-center items-center  w-16 md:w-52 hover:cursor-pointer hover:scale-110  ">
       <a className="hidden md:flex" href="#">Süper Market</a>
        <img className="size-6 md:size-8" src="images/market.png" alt="" />
         </div>
    </div>
        
    </div>
  )
}

export default BottomBar