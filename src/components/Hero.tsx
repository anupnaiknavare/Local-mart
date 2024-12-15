import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="container pt-8">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
        <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
         
          <img 
            className="w-full h-full object-cover rounded-lg" 
            src="/hero__1.webp" 
            alt="Image not found..." 
          />

          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
            <p className="text-2xl hidden sm:block">100% Original Dry Fruits</p>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">Dried Fruits Best Quality</h2>
            <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8 pb-4">₹1557.10</div>

           
            <button  className="bg-accentDark border-dashed border-2 border-green-500 hover:bg-accent text-white rounded-full flex items-center gap-4 px-4 py-2 text-[14px] sm:px-5 sm:py-3 cursor-pointer">
              Shop Now <BsArrowRight /> {" "}
            </button>
          </div>
        </div>

        <div className="relative">
          <img className="w-full h-full object-cover rounded-lg" src="/hero__2.webp" alt="hero image" />

          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold">Best Yummy Pizza</h2>
            <p className="text-gray-500 text-xl pt-4">Starting At</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-8">₹360</div>
            <button  className="bg-accentDark border-dashed border-2 border-green-500 hover:bg-accent text-white rounded-full flex items-center gap-4 px-4 py-2 text-[14px] sm:px-5 sm:py-3 cursor-pointer">
              Shop Now <BsArrowRight /> {" "}
            </button>
          </div>
        </div>

        <div className="relative">
          <img className="w-full h-full object-cover rounded-lg" src="/hero__3.webp" alt="hero image" />

          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold">Best Yummy Chips</h2>
            <p className="text-gray-500 text-xl pt-4">Starting At</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-8">₹100</div>
            <button  className="bg-accentDark border-dashed border-2 border-green-500  hover:bg-accent text-white rounded-full flex items-center gap-4 px-4 py-2 text-[14px] sm:px-5 sm:py-3 cursor-pointer">
              Shop Now <BsArrowRight /> {" "}
            </button>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Hero;