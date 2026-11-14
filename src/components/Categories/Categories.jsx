import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import CategoryCard from "./CategoryCard";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetching = async () => {
      const { data, error } = await supabase
        .from("categories")
        .select("id , name , image_url");
      console.log(data);
      if (error) console.error(error);
      else setCategories(data);
    };
    fetching();
  }, []);
  return (
    <section className="w-full bg-white dark:bg-slate-900 dark:text-slate-50 text-slate-900 transition-all duration-300">
      <div className="max-w-7xl mx-auto container px-15 py-16 max-md:px-6">
        <div>
          <span className="block text-indigo-700 dark:text-indigo-400 uppercase font-medium mb-2 text-sm tracking-widest">
            Explore By Type
          </span>
          <div className="flex items-end justify-between mb-12 max-md:flex-col max-md:items-start max-md:gap-6">
            <h2 className="text-4xl leading-10 font-semibold">Categories</h2>
            <Link className="flex gap-1.5 items-center hover:text-indigo-600 group transition-all duration-300">
              <span>View All Products</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 max-md:grid-cols-1 max-md:gap-10 gap-6">
          {categories.map((categorie) => {
            return (
              <CategoryCard
                key={categorie.id}
                name={categorie.name}
                image={categorie.image_url}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
