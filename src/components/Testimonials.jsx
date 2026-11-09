const Testimonials = () => {
  return (
    <section className="w-full py-12 bg-indigo-50 overflow-hidden transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto container px-15 py-16 max-md:px-6">
        <div className="flex gap-2 flex-col items-center">
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
      </div>
    </section>
  );
};

export default Testimonials;
