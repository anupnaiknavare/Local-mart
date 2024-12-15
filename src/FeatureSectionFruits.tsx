import ProductCard from "./ProductCard";

const data=[
    {id:0, img: "product__1.webp", name: "Dried Mango", price:"₹200"},
    {id:1, img: "product__2.webp", name: "Crunchy Crisps", price:"₹300"},
    {id:2, img: "product__3.webp", name: "Jewel Cranberries", price:"₹500"},
    {id:3, img: "product__4.webp", name: "Almond Organic", price:"₹500"},
]

const FeatureSectionFruits = () => {
  return (
    <div className="container pt-16">
        <div className="lg:flex justify-between items-center ">
            <div>
                <h3 className="font-medium text-2xl ">Fruits & Vegetables</h3>
                <p className="text-gray-500 mt-2 ">Buy farm fresh fruits and vegetables online at the best prices</p>
            </div>

            <div className="space-x-4 mt-8 lg:mt- flex">
                <div className="feature_btn hover:bg-accentDark">Fruits</div>
                <button className="text-gray-600 hover:text-accent">Vegetables</button>
                <button className="text-gray-600 hover:text-accent">Bread & bakery</button>
            </div>

        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gpa-2">
            <div>
                <img className="w-full h-full object-cover rounded-lg" src="/feature__1.webp" alt="banner" />
            </div>

            {data.map(el => <ProductCard key={el.id} img={el.img} name={el.name} price={el.price} />)}


        </div>


    </div>
  )
}

export default FeatureSectionFruits;