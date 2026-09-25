import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="w-full py-24 lg:py-32">
      <div className="mx-auto max-w-7xl flex flex-1 items-center px-15 max-lg:px-5">
        <div className="flex flex-col max-md:flex-row items-start gap-6">
          <span className="text-indigo-600 uppercase bg-indigo-200/30 py-1 px-2 rounded-3xl">
            New Collection 2024
          </span>
          <h1>Timeless Essentials for Modern Living</h1>
          <p>
            Discover our meticulously crafted pieces designed to bring quiet
            confidence, structural clarity, and effortless ease to your daily
            wardrobe and home.
          </p>
          <button>
            <Link>
              Shop now
              <span>
                <FaArrowRight />
              </span>
            </Link>
          </button>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Hero;
