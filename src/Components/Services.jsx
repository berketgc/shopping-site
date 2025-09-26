import React from 'react'
import ServicesItem from './ServicesItem'

const Services = () => {
  return (
    <div className='w-full bg-gray-400 md:my-60 grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-4 text-[20px] text-white p-3  '>
        
        <ServicesItem
       img={"cargo.png"}
       paraf={"Ürünlerinizi güvenle ulaştırıyor ve kapıda ödeme seçeneği sunuyoruz"}
       />
        <ServicesItem
       img={"cargo-plane.png"}
       paraf={"Dünyanın her yerinden sizin için hizmet sağlıyoruz"}
       />
        <ServicesItem 
       img={"24-7.png"}
       paraf={"24 Saat Hergün Destek Hattı"}
       />
        <ServicesItem
       img={"return.png"}
       paraf={"Dilediniz zaman iade hakkı"}
       />
        
                
        



    </div>
  )
}

export default Services