import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
const ProductsFooter = ({ pageNumber, handleProductsPages, numOfPages }) => {
  return (
    <div className="flex gap-4 justify-center mt-8 items-center">
      <button
        onClick={() => handleProductsPages(-1)}
        className="p-3 text-2xl cursor-pointer text-slate-900 dark:text-slate-50 bg-slate-100 dark:bg-slate-950 text-center rounded-full disabled:opacity-50 disabled:cursor-default"
        disabled={pageNumber === 1}
      >
        <FaChevronLeft />
      </button>
      <span className="text-2xl">{pageNumber}</span>
      <button
        onClick={() => handleProductsPages(1)}
        className="p-3 text-2xl cursor-pointer text-slate-900 dark:text-slate-50 bg-slate-100 dark:bg-slate-950 text-center rounded-full disabled:opacity-50 disabled:cursor-default"
        disabled={pageNumber === numOfPages}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ProductsFooter;
