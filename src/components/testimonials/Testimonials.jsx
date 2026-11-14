import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Mahmoud",
    role: "E-commerce Store Owner",
    text: "The website turned out better than I expected, and the delivery was fast. I highly recommend working with him.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Ali",
    role: "Graphic Designer",
    text: "Professional communication and a precise understanding of every detail I asked for. The final result was excellent.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mohamed Hassan",
    role: "Marketing Manager",
    text: "The site is fast and looks great, and engagement noticeably increased after the launch.",
    rating: 4,
  },
  {
    id: 4,
    name: "Mona Ibrahim",
    role: "Online Coach",
    text: "He was patient with my revisions and always replied quickly, fixing issues on the same day.",
    rating: 5,
  },
  {
    id: 5,
    name: "Ali Abdullah",
    role: "Restaurant Owner",
    text: "He built our restaurant a website with an interactive menu, and customers now order online with ease.",
    rating: 5,
  },
  {
    id: 6,
    name: "Nourhan Khaled",
    role: "Clothing Brand Founder",
    text: "The design is responsive on every screen and looks clean. The experience was smooth from start to finish.",
    rating: 4,
  },
  {
    id: 7,
    name: "Youssef Mostafa",
    role: "Business Consultant",
    text: "Clean work and well-organized code, with clear communication the whole time. I'll definitely work with him again.",
    rating: 5,
  },
];
const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const maxIndex = testimonials.length - 3;
  return (
    <section className="w-full py-12 bg-indigo-50 overflow-hidden transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto container px-15 py-16 max-md:px-6">
        <div className="flex gap-2 flex-col items-center mb-12">
          <span className="text-indigo-700 dark:text-indigo-400 uppercase font-medium text-sm tracking-widest">
            Testimonials
          </span>
          <h2 className="text-4xl leading-10 font-semibold">
            Loved by Modern Minimalists
          </h2>
          <p>
            Read genuine feedback from our community of design enthusiasts and
            conscious consumers.
          </p>
        </div>
        <div className="relative">
          <div className="xl:overflow-hidden overflow-x-auto snap-mandatory snap-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div
              className="flex gap-8 xl:transition-transform xl:duration-500 xl:[transform:translateX(calc(-1*var(--i)*((100%-4rem)/3+2rem)))]"
              style={{ "--i": index }}
            >
              {testimonials.map((t) => {
                return (
                  <div
                    key={t.id}
                    className="w-[85%] xl:w-[calc((100%-4rem)/3)] shrink-0 snap-start"
                  >
                    <TestimonialCard
                      name={t.name}
                      role={t.role}
                      rating={t.rating}
                      text={t.text}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="absolute xl:flex hidden top-[45%]  justify-between w-full left-0 pointer-events-none">
            <button
              onClick={() => setIndex((i) => Math.max(i - 1, 0))}
              disabled={index === 0}
              className="pointer-events-auto p-4 rounded-full absolute -left-14 bg-white dark:bg-slate-900 disabled:opacity-50 disabled:cursor-default cursor-pointer"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => setIndex((i) => Math.min(i + 1, maxIndex))}
              disabled={index >= maxIndex}
              className="pointer-events-auto p-4 rounded-full absolute -right-14 bg-white dark:bg-slate-900 disabled:opacity-50 disabled:cursor-default cursor-pointer"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
