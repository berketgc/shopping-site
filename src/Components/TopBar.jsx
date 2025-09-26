import {  useEffect, useRef, useState } from "react";



const TopBar = () => {

  const dil = useRef(null);
  const döviz = useRef(null);


  useEffect(() => {
    const handleClickOut = (event) => {
       if(dil.current && !dil.current.contains(event.target)&&
          döviz.current && !döviz.current.contains(event.target)){

           setDilAcikMi(false);
           setparaAcıkMI(false);
          }
         
    }
    {
      document.addEventListener('mousedown',(handleClickOut));
    }
     
     return () => {

      document.removeEventListener('mousedown',(handleClickOut))
     }
    
  }, [])
  
  

    const [dilAcikMi, setDilAcikMi] = useState(false);

    const dilleriGöster = () => {
  setDilAcikMi(!dilAcikMi); 
  console.log("durum:", dilAcikMi);
};

 const [paraAcıkMI, setparaAcıkMI] = useState(false);

    const paralarıGöster = ()=>{
       setparaAcıkMI(!paraAcıkMI);
       console.log("durum",paraAcıkMI);
    };

const [secilenPara, setsecilenPara] = useState("TRY")


  return (
    <div>

     <div className='flex justify-between items-center gap-4 lg:gap-8 shadow text-sm '>
     <div className='flex gap-4 mx-4'>
      <a href="#">Home</a>
      <a href="#">iletişim</a>
      <a href="#">destek</a>
     </div>
    
    <div ref={dil}  className='flex gap-10 p-2 mx-4 relative '>
    <a onClick={dilleriGöster} href="#">Türkçe</a>
       {
        dilAcikMi && ( <div className='absolute -bottom-29 right-9 p-7 flex flex-col justify-center items-center bg-gray-200'  >
          <span className="hover:bg-white hover:cursor-pointer" >Türkçe </span>
          <span className="hover:bg-white hover:cursor-pointer">English</span>
          <span className="hover:bg-white hover:cursor-pointer">Deutsch</span>
          </div>)
       }
      <div ref={döviz}>
     <a onClick={paralarıGöster} href="#">TRY</a>
        {
          paraAcıkMI && ( <div  className='absolute -bottom-29 left-15  p-7 flex flex-col justify-center items-center bg-gray-200'>
            <span className="hover:bg-white hover:cursor-pointer"onClick={ () => {setsecilenPara("TRY");setparaAcıkMI(false);  }     } >TRY</span>
            <span className="hover:bg-white hover:cursor-pointer" onClick={ ()=> {setsecilenPara("USD");setparaAcıkMI(false);}    }> USD</span>
            <span className="hover:bg-white hover:cursor-pointer" onClick={()=> {secilenPara("Euro");setparaAcıkMI(false);}    } >Euro</span>
          </div>)
         }
         </div>
     </div>
     </div>
    </div>
  )
}

export default TopBar