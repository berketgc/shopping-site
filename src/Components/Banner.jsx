import BannerItem from "./BannerItem"


const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-24 mt-72">
        <BannerItem 
        img={"banner3.jpg"}
        title={"Teknoloji Fırsatları"}
        paraf={"Cep telefonu, bilgisayar, televizyon, kozmetik ve binlerce ürün uygun fiyatlarla burada."}
        button={"Hemen git"}
        />
        <BannerItem 
        img={"banner5.jpg"}
        title={"Teknoloji Fırsatları"}
        paraf={"Cep telefonu, bilgisayar, televizyon, kozmetik ve binlerce ürün uygun fiyatlarla burada."}
        button={"Hemen git"}
        />
        <BannerItem 
        img={"banner2.jpg"}
        title={"Teknoloji Fırsatları"}
        paraf={"Cep telefonu, bilgisayar, televizyon, kozmetik ve binlerce ürün uygun fiyatlarla burada."}
        button={"Hemen git"}
        />
        
       
        


    </div>
  )
}

export default Banner