const ProductCard = ({ name, price, image_url, categorie, latest }) => {
  return (
    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl flex flex-col justify-center group transition-all duration-300">
      <div className="overflow-hidden relative m-auto rounded-xl w-full aspect-3/4 max-md:aspect-square">
        <div
          style={{ backgroundImage: `url(${image_url})` }}
          className={`w-full h-full bg-cover bg-center group-hover:scale-105 transition-all duration-300`}
        ></div>
        {latest && (
          <span className="absolute top-3 right-3 bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-xl">
            new
          </span>
        )}
      </div>
      <h3 className="font-semibold text-[18px] leading-6 mt-4">{name}</h3>
      <p className="text-[14px] text-[#464555] capitalize dark:text-[#c7c4d7] mb-4">
        {categorie}
      </p>
      <div className="flex justify-between items-center pt-4 border-t border-[#e9edff] dark:border-[#122131]">
        <p className="text-indigo-700 dark:text-indigo-400 font-bold text-[20px]">
          ${price}.00
        </p>
        <button className="px-4 py-2 bg-indigo-100 rounded-xl flex items-center gap-2 capitalize hover:text-white hover:bg-indigo-700 dark:text-slate-800 transition-all duration-300 cursor-pointer">
          <span className="text-lg">+</span>
          add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
