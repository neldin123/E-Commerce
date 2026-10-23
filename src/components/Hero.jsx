import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="w-full py-24 lg:py-36 bg-indigo-50 animate-slide-down overflow-hidden">
      <div className="mx-auto max-w-7xl flex flex-1 items-center gap-15 justify-between px-15 max-lg:px-5">
        <div className="flex flex-col max-md:flex-row items-start gap-6 overflow-hidden">
          <span className="text-indigo-600 uppercase bg-indigo-300/30 py-1 px-2.5 rounded-3xl">
            New Collection 2024
          </span>
          <h1 className="text-[64px] leading-none font-semibold tracking-tight">
            Timeless Essentials for Modern Living
          </h1>
          <p className="text-gray-500 max-w-lg font-medium text-[18px] ">
            Discover our meticulously crafted pieces designed to bring quiet
            confidence, structural clarity, and effortless ease to your daily
            wardrobe and home.
          </p>
          <Link className="flex gap-4 bg-indigo-500 px-6 py-4 items-center my-2 hover:shadow-xl hover:shadow-indigo-300/60 hover:bg-indigo-600 text-white transition-all duration-300 rounded-xl group">
            Shop now
            <span>
              <FaArrowRight />
            </span>
          </Link>
        </div>
        <div>
          <div>
            <img src="/Photos/hero.webp" alt="hero" loading="lazy" />
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
