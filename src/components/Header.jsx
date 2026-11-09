import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

// React-Icons Imports
import { GoSearch } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";

const Header = ({ isDark, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`w-full transition-all duration-300 sticky top-0 z-50
      ${
        scrolled
          ? "bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-lg shadow-indigo-700/10 dark:shadow-none"
          : "bg-white dark:bg-slate-900 shadow-lg shadow-indigo-700/20 dark:shadow-none"
      }`}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center px-15 max-lg:px-5 h-20 justify-between ">
          <div className="flex justify-between items-center gap-10">
            <div className="text-indigo-600 text-xl font-bold dark:text-indigo-400">
              <Link to={"/"}>Aura & Co.</Link>
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
                to={"/products"}
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
              <GoSearch className="absolute top-1/2 -translate-y-1/2 left-2 size-5 text-gray-400 dark:text-slate-400 z-10 pointer-events-none" />
              <input
                type="text"
                className="bg-indigo-100/50 dark:bg-slate-800 rounded-xl px-5 py-1 pl-10 caret-indigo-700 dark:caret-indigo-400 focus:outline-indigo-700 dark:focus:outline-indigo-400 text-lg w-100 dark:text-slate-200 dark:placeholder:text-slate-400 dark:border dark:border-slate-700"
                placeholder="Search Products..."
                name="Search"
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-8">
            <Link className="relative" to={"/cart"} aria-label="cart">
              <MdShoppingBag size={25} className="dark:text-slate-200" />
              <span className="absolute py-px px-1 rounded-full bg-indigo-600 -top-2 -right-2.5 text-sm flex items-center justify-center text-white">
                1
              </span>
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
