import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
const TestimonialCard = ({ name, rating, text, role }) => {
  return (
    <div className="p-8 rounded-xl bg-white dark:bg-slate-800 w-full">
      <div>
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <IoIosStar key={i} color="gold" />
          ))}
          {Array.from({ length: 5 - rating }).map((_, i) => (
            <IoIosStarOutline key={i} color="gold" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
