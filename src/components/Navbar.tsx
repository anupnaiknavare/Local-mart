import { IoIosSearch } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import CartCountBadge from "./CartCountBadge";

const Navbar = () => {
  return (
    <div className="container hidden lg:block ">
      <div className="flex justify-between items-center pt-8 ">
        <h1 className="text-4xl font-medium">Logo</h1>
        <div className="realtive w-full max-w-[500px]">
          <input
            className="bg-[#f2f3f5] border-none px-6 py-3 rounded-[30px] w-full"
            type="text"
            placeholder="Search product..."
          />
          <IoIosSearch
            className="absolute top-0 right-0 mt-4 mr-5 text-gray-50"
            size={20}
          />
        </div>

        <div className="flex gap-4">
          <div className="icon_wrapper ">
            <AiOutlineUser />
          </div>
          <div className="icon_wrapper relative ">
            <MdOutlineShoppingCart />
            <CartCountBadge size="w-[25px] h-[25-px]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
