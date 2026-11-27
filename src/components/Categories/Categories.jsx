import CategoryCard from "./CategoryCard";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const categories = [
  {
    id: 1,
    name: "Aparel",
    image:
      "https://images.unsplash.com/photo-1717127354833-e4d10625d3e7?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 2,
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1630558673281-46d2d315e235?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 3,
    name: "Footwear",
    image:
      "https://images.unsplash.com/photo-1788940571597-ad8c96c3a26e?q=80&w=910&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 4,
    name: "Perfumes",
    image:
      "https://images.unsplash.com/photo-1647009822729-0076c73fe6f0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
];
const Categories = () => {
  return (
    <section
      className="w-full bg-white dark:bg-slate-900 dark:text-slate-50 text-slate-900 transition-all duration-300"
      id="categories"
    >
      <div className="max-w-7xl mx-auto container px-15 py-16 max-md:px-6">
        <div>
          <span className="block text-indigo-700 dark:text-indigo-400 uppercase font-medium mb-2 text-sm tracking-widest">
            Explore By Type
          </span>
          <div className="flex items-end justify-between mb-12 max-md:flex-col max-md:items-start max-md:gap-6">
            <h2 className="text-4xl leading-10 font-semibold">Categories</h2>
            <Link
              className="flex gap-1.5 items-center hover:text-indigo-600 group transition-all duration-300"
              to={"/products"}
            >
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
                image={categorie.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
