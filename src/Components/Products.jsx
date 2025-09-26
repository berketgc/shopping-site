import ProductsItem from "./ProductsItem";


const Products = () => {

    
    
  return (
    

    <div>
        <div className="flex justify-between items-center ">

        <h2 className="text-2xl m-14 hover:border-b-2 border-black">Avantajlı ürünler</h2>
        <a className="text-sm m-6 hover:border-b-2 border-black" href= "#">Daha fazlası </a>

        </div>


    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 '>


        
       <ProductsItem
       img={"mont.jpg"}
       fiyat={"1000TL"}
        h2 = {"Kışlık Mont"}
    />
     
     <ProductsItem
       img={"iphone.jpg"}
        fiyat={"40.000TL"}
        h2 = {"iphone"}
    />

    <ProductsItem
       img={"bebek-bezi.jpg"}
        fiyat={"500TL"}
        h2 = {"bebek-bezit"}
    />

    <ProductsItem
       img={"buzdolabı.jpg"}
        fiyat={"25000TL"}
        h2 = {"buzdolabı"}
    />
    <ProductsItem
       img={"deterjan.jpg"}
        fiyat={"400TL"}
        h2 = {"deterjan"}
    />
    <ProductsItem
       img={"televizyon.jpg"}
        fiyat={"20000TL"}
        h2 = {"televizyon."}
    />
    
    <ProductsItem
       img={"xiaomi.jpg"}
        fiyat={"30000TL"}
        h2 = {"xiaomi"}
    />
     

    
</div>




</div>

  )
}

export default Products;
