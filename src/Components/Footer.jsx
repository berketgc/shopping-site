import React from 'react'

const Footer = () => {
  return (
    <div className='grid grid-col-2  md:grid-cols-4 m-10 '> 
        <div className="flex flex-col space-y-2 justify-center items-center">
         <a href="#">Lorem, ipsum.</a>
         <a href="#">Lorem, ipsum.</a>
         <a href="#">Lorem, ipsum.</a>
         <a href="#">Lorem, ipsum.</a>
      </div>
         <div className="flex flex-col space-y-2 justify-center items-center">
        <a href="#">Lorem, ipsum.</a>
        <a href="#">Lorem, ipsum.</a>
        <a href="#">Lorem, ipsum.</a>
        <a href="#">Lorem, ipsum.</a>
        </div>
         <div className="flex flex-col space-y-2 justify-center items-center">
        <a href="#">Lorem, ipsum.</a>
        <a href="#">Lorem, ipsum.</a>
        <a href="#">Lorem, ipsum.</a>
        <a href="#">Lorem, ipsum.</a>
        </div>
         <div className="flex flex-col space-y-2 justify-center items-center">
        <a href="#">Lorem, ipsum.</a>
        <a href="#">Lorem, ipsum.</a>
        <a href="#"> <img className='size-8' src="images/whatsapp.png" alt="" /></a>
        <a href="#"> <img className='size-8'    src="images/insta.png" alt="" /> </a>
        </div>
        


    </div>
  )
}

export default Footer