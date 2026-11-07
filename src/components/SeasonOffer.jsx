const SeasonOffer = () => {
  return (
    <section className="w-full py-12 text-slate-50  px-6 lg:px-12  bg-white dark:bg-slate-900 transition-all duration-300">
      <div className="max-w-7xl mx-auto container px-15 py-16 max-md:px-6">
        <div className="flex justify-between items-center bg-linear-to-r from-indigo-700 to-indigo-500 p-10 lg:p-16 rounded-xl flex-1">
          <div className="flex items-start gap-2 flex-col ">
            <span className="uppercase text-sm py-1 px-3 bg-indigo-300 font-normal rounded-xl mb-4">
              Limited Season Offer
            </span>
            <h3 className="lg:text-[40px] lg:leading-12 text-[32px] leading-10 tracking-tight  font-semibold max-w-148">
              Enjoy 25% Off Your First Curated Order
            </h3>
            <p className="text-[16px] leading-6 font-normal max-w-148">
              Experience uncompromising craftsmanship. Use code
              <span className="text-dec"> AURA25</span> at checkout to claim your exclusive seasonal
              discount.
            </p>
          </div>
          <div>
            <button className="capitalize">shop the collection</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonOffer;
