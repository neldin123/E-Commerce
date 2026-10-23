import { Link, NavLink } from "react-router-dom";

// React-Icons Imports
import { GoSearch } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";

const Header = ({ isDark, toggleTheme }) => {
  return (
    <header className="w-full shadow-lg shadow-indigo-700/20 dark:bg-[#051424] transition-all duration-300">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center px-15 max-lg:px-5 h-20 justify-between ">
          <div className="flex justify-between items-center gap-10">
            <div className="text-indigo-600 text-xl font-bold">
              <Link to={"/"}>E-Commerce</Link>
            </div>
            <nav className="flex items-center gap-5 max-md:hidden">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "py-2 px-5 bg-indigo-600 rounded-xl text-white font-bold hover:bg-indigo-600 duration-300 transition-all"
                    : "py-2 px-5 text-indigo-600 dark:text-indigo-400 rounded-xl font-bold hover:bg-indigo-600 hover:text-white duration-300 transition-all"
                }
              >
                Home
              </NavLink>
              <NavLink
                to={"/Products"}
                className={({ isActive }) =>
                  isActive
                    ? "py-2 px-5 bg-indigo-600 rounded-xl text-white font-bold hover:bg-indigo-600 duration-300 transition-all"
                    : "py-2 px-5 text-indigo-600 dark:text-indigo-400 rounded-xl font-bold hover:bg-indigo-600 hover:text-white duration-300 transition-all"
                }
              >
                Products
              </NavLink>
            </nav>
          </div>
          <div className="max-xl:hidden">
            <div className="relative">
              <GoSearch className="absolute top-1.5 left-2 size-5 text-gray-400 dark:bg-transparent" />
              <input
                type="text"
                className="bg-indigo-100/50 dark:bg-[#1F1D36] dark:text-[#E8E8F4] dark:placeholder:text-[#9CA3C7] dark:border dark:border-[#2A2748] rounded-xl px-5 py-1 pl-10 relative caret-indigo-700 dark:caret-indigo-400 focus:outline-indigo-700 dark:focus:outline-indigo-400 text-l w-100"
                placeholder="Search Products..."
                name="Search"
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-8">
            <Link className="relative" to={"/favorite"} aria-label="favorite">
              <IoMdHeartEmpty size={25} className="dark:text-[#E2E8F0]" />
              <span className="absolute py-px px-1 rounded-full bg-indigo-600 -top-2 -right-2.5 text-sm flex items-center justify-center text-white">
                1
              </span>
            </Link>
            <Link className="relative" to={"/cart"} aria-label="cart">
              <MdShoppingBag size={25} className="dark:text-[#E2E8F0]" />
              <span className="absolute py-px px-1 rounded-full bg-indigo-600 -top-2 -right-2.5 text-sm flex items-center justify-center text-white">
                1
              </span>
            </Link>
            <Link to={"/profile"} aria-label="profile">
              <div>
                <IoPersonSharp size={28} className="dark:text-[#E2E8F0]" />
              </div>
            </Link>
            <button
              className="cursor-pointer text-black dark:text-white rounded-full p-0.5"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDark ? <LuSun size={24} /> : <FaMoon size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
