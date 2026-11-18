import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-16 bg-indigo-50 dark:bg-slate-950 transition-all duration-300 dark:text-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto container px-5 lg:px-16 max-md:px-6">
        <div className="grid grid-cols-4 gap-8 text-[14px] max-lg:grid-cols-2 max-md:grid-cols-1">
          <div>
            <h3 className="text-[18px] font-semibold tracking-wide mb-6">
              Aura & Co.
            </h3>
            <p className="text-slate-500 tracking-wider leading-6">
              From everyday apparel to signature fragrances, discover pieces
              chosen to complete your look, head to toe.
            </p>
          </div>
          <div>
            <h3 className="text-[18px] font-semibold tracking-wide mb-6">
              Shop
            </h3>
            <ul className="flex gap-2 items-start flex-col">
              <li>
                <Link
                  className="text-slate-500 dark:text-slate-50/40 transition-all duration-300 hover:translate-x-1 block hover:text-slate-600 dark:hover:text-slate-50"
                  to={"/Products"}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-500 dark:text-slate-50/40 transition-all duration-300 hover:translate-x-1 block hover:text-slate-600 dark:hover:text-slate-50"
                  to={"/Cart"}
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-500 dark:text-slate-50/40 transition-all duration-300 hover:translate-x-1 block hover:text-slate-600 dark:hover:text-slate-50"
                  to={"/#categories"}
                >
                  Categories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[18px] font-semibold tracking-wide mb-6">
              Contact Us
            </h3>
            <ul className="flex gap-2 items-start flex-col">
              <li className="text-slate-500 dark:text-slate-50/40 transition-all duration-300 block hover:text-slate-600 dark:hover:text-slate-50">
                +20123456789
              </li>
              <li className="text-slate-500 dark:text-slate-50/40 transition-all duration-300 block hover:text-slate-600 dark:hover:text-slate-50">
                aura@gmail.com
              </li>
              <li className="text-slate-500 dark:text-slate-50/40 transition-all duration-300 block hover:text-slate-600 dark:hover:text-slate-50">
                Zagazig ,Egypt
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[18px] font-semibold tracking-wide mb-6">
              Stay Connected
            </h3>
            <p className="text-slate-500 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                className="bg-white py-2 px-4 rounded-xl text-slate-500 dark:text-slate-50 dark:bg-slate-700 focus:outline-0"
                placeholder="Enter Your Email"
              />
              <button className="py-2 px-4 text-white bg-indigo-700 transition-all duration-300 hover:bg-indigo-600 rounded-xl cursor-pointer">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-12 mt-12 text-[14px] text-slate-500 dark:text-slate-300 capitalize border-t border-white">
          <span>@2026 Aura & co., All Rights reserved.</span>
          <span>
            made with love by{" "}
            <span className="text-indigo-700 font-semibold">Nooreldin</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
