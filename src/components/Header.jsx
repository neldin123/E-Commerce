import { Link } from "react-router-dom";

// React-Icons Imports
import { GoSearch } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";

const Header = () => {
  return (
    <header className="w-full shadow-lg shadow-indigo-700/20">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center px-15 max-lg:px-5 h-20 justify-between ">
          <div className="flex justify-between items-center gap-10">
            <div className="text-indigo-600 text-xl font-bold ">
              <Link to={"/"}>E-Commerce</Link>
            </div>
            <nav className="flex items-center gap-5 max-md:hidden">
              <Link
                to={"/"}
                className="py-2 px-5 bg-indigo-600 rounded-xl text-white font-bold hover:bg-indigo-800 duration-300 transition-all"
              >
                Home
              </Link>
              <Link
                to={"/products"}
                className="py-2 px-5 bg-indigo-600 rounded-xl text-white font-bold hover:bg-indigo-800 duration-300 transition-all"
              >
                Products
              </Link>
            </nav>
          </div>
          <div className="max-xl:hidden">
            <div className="relative">
              <GoSearch className="absolute top-1.5 left-2 size-5 text-gray-400" />
              <input
                type="text"
                className="bg-indigo-100 rounded-xl px-5 py-1 pl-10 relative caret-indigo-700 focus:outline-indigo-700 text-l w-100"
                placeholder="Search Products..."
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-8">
            <Link className="relative">
              <IoMdHeartEmpty size={25} />
              <span className="absolute py-px px-1 rounded-full bg-indigo-600 -top-2 -right-2.5 text-sm flex items-center justify-center text-white">
                1
              </span>
            </Link>
            <Link className="relative">
              <MdShoppingBag size={25} />
              <span className="absolute py-px px-1 rounded-full bg-indigo-600 -top-2 -right-2.5 text-sm flex items-center justify-center text-white">
                1
              </span>
            </Link>
            <Link>
              <div>
                <IoPersonSharp
                  size={28}
                  className="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-800 duration-300"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
