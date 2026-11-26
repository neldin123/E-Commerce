import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductCardSkeleton = () => {
  return (
    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl flex flex-col">
      <div className="w-full aspect-3/4 max-md:aspect-square overflow-hidden rounded-xl">
        <Skeleton height="100%" width="100%" />
      </div>

      <div className="mt-4">
        <Skeleton width="80%" height={22} />
      </div>

      <div className="mb-4">
        <Skeleton width="45%" height={16} />
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-[#e9edff] dark:border-[#122131]">
        <Skeleton width={65} height={25} />

        <Skeleton width={85} height={40} borderRadius={12} />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
