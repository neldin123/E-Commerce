import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-16 bg-indigo-50 dark:bg-slate-950 transition-all duration-300 dark:text-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto container px-5 lg:px-16 max-md:px-6">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3 className="text-[18px] font-semibold tracking-wide mb-6">
              Aura & Co.
            </h3>
            <p className="text-[14px] text-slate-500 tracking-wider">
              From everyday apparel to signature fragrances, discover pieces
              chosen to complete your look, head to toe.
            </p>
          </div>
          <div>
            <h3>Shop</h3>
            <ul>
              <li>
                <Link to={"/Products"}>Products</Link>
              </li>
              <li>
                <Link to={"/Cart"}>Cart</Link>
              </li>
              <li>
                <Link to={"/#categories"}>Categories</Link>
              </li>
            </ul>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
