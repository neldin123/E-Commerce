import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="w-full min-h-[calc(100dvh-5rem)] flex items-center py-12 bg-indigo-50 animate-slide-down overflow-hidden transition-colors duration-300 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl flex flex-1 items-center gap-15 justify-between px-15 max-lg:px-5 w-full max-lg:flex-col">
        <div className="flex flex-col items-start gap-6 overflow-hidden max-lg:py-16">
          <span className="text-indigo-600 uppercase bg-indigo-300/30 py-1 px-2.5 rounded-3xl dark:text-indigo-400">
            New Collection 2026
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[64px] leading-none font-semibold tracking-tight dark:text-slate-50 md:w-[80%]">
            Timeless Essentials for Modern Living
          </h1>
          <p className="text-gray-500 max-w-lg font-medium text-[18px] dark:text-slate-400">
            Discover our meticulously crafted pieces designed to bring quiet
            confidence, structural clarity, and effortless ease to your daily
            wardrobe and home.
          </p>
          <Link
            to={"/products"}
            className="flex gap-4 bg-indigo-500 px-6 py-4 items-center my-2 hover:bg-indigo-600 text-white transition-all duration-300 rounded-xl group"
          >
            Shop now
            <span className="group-hover:translate-x-1.5 transition-transform duration-300">
              <FaArrowRight />
            </span>
          </Link>
        </div>
        <div className="relative max-lg:hidden">
          <div>
            <img
              src="/Photos/tshirt.jfif"
              alt="hero"
              className="rounded-xl w-185 h-full object-contain"
            />
          </div>
          <div className="absolute -bottom-6 -left-10 max-w-60 rounded-2xl p-4 bg-white dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 shadow-xl shadow-indigo-900/10 dark:shadow-none  backdrop-blur-md">
            <h3 className="font-semibold text-slate-900 dark:text-slate-50">
              Curated Quality
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              100% sustainable organic fibers sourced directly from ethical
              artisan mills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
