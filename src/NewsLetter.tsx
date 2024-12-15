import { LuMailOpen } from "react-icons/lu";

const NewsLetter = () => {
  return (
    <div className="bg-green-900 mt-16">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white">
        <div className="flex flex-shrink-0 items-center gap-4">
          <LuMailOpen className="text-[60px]" />
          <div className="text-xl sm:text-2xl font-semibold">
            <h3>Sign up To Our Newsletters</h3>
            <p>...and receive ₹169 coupon for first shopping</p>
          </div>
        </div>

        <div className="w-full max-w-[500px] relative">
          <input
            type="text"
            className="py-4 px-6 w-full rounded-full bg-white text-black placeholder-gray-400 appearance-none"
            placeholder="Your Email address..."
          />
          <button className="bg-bl absolute top-[50%] right-2 translate-y-[-50%] py-2 px-4 rounded-full hover:bg-accentLight">
          Subscribe!
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
