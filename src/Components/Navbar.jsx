import { useEffect, useRef, useState } from "react"




const Navbar = () => {



 const [menuAcık, setmenuAcık] = useState(false);
 const [ürünmenuAcık, setürünmenuAcık] = useState(false);
 const [loginAcik, setloginAcik] = useState(false);
 
 const loginRef = useRef(null);
 const loginBtnRef =useRef(null);

 useEffect(() => {const loginHandle=(event)=>{
  if(loginRef.current && !loginRef.current.contains(event.target) && loginBtnRef.current && !loginBtnRef.current.contains(event.target)){
    setloginAcik(false);
  }
 }
     document.addEventListener("mousedown",loginHandle)
 
   return () => {
     document.removeEventListener("mousedown",loginHandle)
   }
 }, [])
 

 const ürünRef = useRef(null);

  useEffect(() => {const ürünHandle=(event)=>{
    if(ürünRef.current && !ürünRef.current.contains(event.target))
    {
       setürünmenuAcık(false);
  }
   
    }
  
     document.addEventListener("mousedown",ürünHandle);
    return () => {
      document.removeEventListener("mousedown",ürünHandle);
    }
  }, [])
  
  


  const menuRef = useRef(null);

  useEffect(() => { const handleMenu=(event)=>{
    if(menuRef.current && !menuRef.current.contains(event.target) )
     {
      setmenuAcık(false);
    }
    
    
  }
  
       document.addEventListener("mousedown",handleMenu);
    
    return () => {
      document.removeEventListener("mousedown",handleMenu);
    }
  }, [])
  
    const loginClickHandle = ()=> {
      const username = document.getElementById("username").value.trim()
      const password = document.getElementById("password").value.trim()
       
      if(!username || !password)
        
        {
            alert("kullanıcı adı ve şifre giriniz");
        } 
    
    
             setloginAcik(!loginAcik)
    
    
    };



  return (
    <div className="bg-[#91ADC8] flex justify-around items-center h-14 md:h-20 "
    >  
    <div ref={menuRef}>
       <img onClick={()=>{setmenuAcık(!menuAcık);}} src="images/tri.png" className="size-7 md:hidden" alt="menu" />
        {
        menuAcık && (
          
         <div  className="absolute top-23  left-0 w-40 bg-white shadow-lg flex flex-col p-2 ">
          <a href="#" className="p-2 hover:bg-gray-200">Ana Sayfa</a>
          <a href="#" className="p-2 hover:bg-gray-200">Ürünler</a>
          <a href="#" className="p-2 hover:bg-gray-200">Hakkımızda</a>
          <a href="#" className="p-2 hover:bg-gray-200">Giriş</a>
        </div>
      
        )
       }
       </div>  
       <h1 className="text-white text-2xl hover:rotate-12 hover:cursor-pointer border-r-2 border-white p-2  ">BLUE <br /> STORE</h1>
      <div ref={ürünRef} className="relative">
       <a onClick={()=>{setürünmenuAcık(!ürünmenuAcık);}} href="#" className="p-2 hover:scale-110  hidden md:flex ">Ürünler</a>
       {
          ürünmenuAcık && (
             <div className="absolute top-15  flex-col bg-gray-200 p-3 hidden md:flex ">
              <span className="hover:bg-white hover:cursor-pointer">teknolji</span>
              <span  className="hover:bg-white hover:cursor-pointer" >giyim</span>
              <span className="hover:bg-white hover:cursor-pointer">temizlik</span>
              <span className="hover:bg-white hover:cursor-pointer">mobilya</span>
              <span className="hover:bg-white hover:cursor-pointer">yiyecek</span>
              </div>)
        }      
       </div>
       <div className="flex gap-4"> 
       <input type="search" placeholder="  Ürün giriniz..." className="bg-amber-50 w-3xs md:w-2xl rounded-2xl " />
       <button className="p-3 bg-white text-[#91ADC8] rounded-2xl hover:scale-110">Ara</button>
       </div>
       <a href="#" className="p-2 hover:scale-110 hidden md:flex " >Kampanyalar</a>
       
       
       <div className="flex flex-row gap-10">
        
        
        <div ref={loginRef} className="relative   ">
        <a onClick={()=>{setloginAcik(!loginAcik);}} href="#" className=" hover:scale-105 hidden md:flex  mt-2.5" ><img className="size-9 bg-white rounded-2xl" src="images/profile.png"  alt="" /></a>
        
        { 
        loginAcik&& (
             <div className="flex-col gap-2 bg-gray-200 p-3 absolute top-16  right-0 hidden md:flex">
             <span><label  htmlFor="">Kullanıcı Adı</label></span>
             <span><input id="username" type="text" className="bg-white rounded-2xl" required/></span>
            <span> <label  htmlFor="">Şifre</label></span>
            <span> < input id="password" type="password" className="bg-white rounded-2xl" required /></span>
           
            <button ref={loginBtnRef} onClick={loginClickHandle} className="bg-sky-300">
              GİRİŞ
            </button>
            <div className="text-[12px] flex justify-around">
             <a href="#">kayıt ol</a>
            <a href="#">sifremi unuttum</a>
         </div>
             </div>)
         }

        </div>
       
       </div> 
       
    
         <img src="images/carts.png" className="size-9 mt-2" alt="sepet" />




    </div>

  )
}

export default Navbar