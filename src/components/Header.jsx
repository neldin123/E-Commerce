import { Link } from "react-router-dom";

// React-Icons Imports
import { GoSearch } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex items-center px-5">
          <div className="text-purple-600 text-3xl font-bold ">E-Commerce</div>
          <div>
            <Link>Home</Link>
            <Link>Products</Link>
          </div>
          <div>
            <div>
              <GoSearch />
              <input type="text" />
            </div>
          </div>
          <div>
            <Link>
              <IoMdHeartEmpty />
            </Link>
            <Link>
              <MdShoppingBag />
            </Link>
            <Link>
              <div>
                <IoPersonSharp />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
