import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
const TestimonialCard = ({ name, rating, text, role }) => {
  console.log(name.split(" ")[0][0]);
  return (
    <div className="p-8 rounded-xl bg-white dark:bg-slate-800 w-full h-full transition-all duration-300">
      <div>
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <IoIosStar key={i} color="gold" size={20} />
          ))}
          {Array.from({ length: 5 - rating }).map((_, i) => (
            <IoIosStarOutline key={i} color="gold" size={20} />
          ))}
        </div>
        <h3 className="py-8 mb-8 text-slate-800 text-[16px] dark:text-slate-50 border-b border-slate-100">
          {text}
        </h3>
        <div className="flex gap-3 items-center">
          <span className="p-4 rounded-full bg-indigo-400 text-white text-center">
            {name.split(" ")[0][0]}
            {name.split(" ")[1][0]}
          </span>
          <div>
            <h4 className="text-slate-900 dark:text-slate-100 font-semibold">
              {name}
            </h4>
            <p className="text-slate-800/60 max-md:text-[12px]">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
