import ProductCard from "./ProductCard";

const Products = [
  {
    id: 1,
    name: "T-shirt",
    price: 150,
    image_url: "/Photos/tshirt.jfif",
    categorie: "apparel",
    latest: false,
  },
  {
    id: 2,
    name: "T-shirt",
    price: 150,
    image_url: "/Photos/tshirt.jfif",
    categorie: "apparel",
    latest: true,
  },
  {
    id: 3,
    name: "T-shirt",
    price: 150,
    image_url: "/Photos/tshirt.jfif",
    categorie: "apparel",
    latest: true,
  },
  {
    id: 4,
    name: "T-shirt",
    price: 150,
    image_url: "/Photos/tshirt.jfif",
    categorie: "apparel",
    latest: false,
  },
];

const Latest = () => {
  return (
    <section className="w-full py-12 bg-indigo-50 overflow-hidden transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto container px-15 py-16 max-md:px-6">
        <div>
          <span className="block text-indigo-700 dark:text-indigo-400 uppercase font-medium mb-2 text-sm tracking-widest">
            Handpicked Quality
          </span>
          <div className="flex items-end justify-between mb-12 max-md:flex-col max-md:items-start max-md:gap-6">
            <h2 className="text-4xl leading-10 font-semibold">
              Latest products
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-10">
          {Products.map((p) => {
            console.log(p);
            return (
              <ProductCard
                key={p.id}
                name={p.name}
                image_url={p.image_url}
                price={p.price}
                categorie={p.categorie}
                latest={p.latest}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Latest;
