const CategoryCard = ({ name, image }) => {
  return (
    <div className="relative overflow-hidden w-full aspect-3/4 max-md:aspect-5/4 group rounded-xl">
      <img
        src={image}
        alt={name}
        loading="lazy"
        className=" object-cover rounded-xl group-hover:scale-110 transition-all duration-300 h-full w-full"
      />
      <p className="group-hover:-translate-y-3 capitalize text-white bg-black/60 px-3 py-2 rounded-xl translate-y-full bottom-0 transition-all duration-300 left-2 absolute">
        {name}
      </p>
    </div>
  );
};

export default CategoryCard;
