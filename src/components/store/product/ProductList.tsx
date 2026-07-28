import Drawer from "@/components/common/Drawer";
import { Tables } from "@/types/supabase";
import { Funnel } from "lucide-react";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";

const ProductList = ({
  productData,
}: {
  productData: Tables<"products">[];
}) => {
  return (
    <div>
      <div className="mt-28 mb-12">
        <div className="ml-auto flex items-center gap-3">
          <Drawer buttonText="Filter" icon={<Funnel />}>
            <ProductFilter />
          </Drawer>
          <div className="ml-auto text-lg font-bold text-(--text-black)">
            Sort by:
          </div>
          <select className="border-app-background rounded-[10px] border-2 bg-white py-3 text-(--text-black)">
            <option className="text-2xl text-(--text-black)" value="price-asc">
              Price: Low to High
            </option>
            <option className="text-2xl text-(--text-black)" value="price-asc">
              Best Selling
            </option>
            <option className="text-2xl text-(--text-black)" value="price-desc">
              Price: High to Low
            </option>
            <option className="text-2xl text-(--text-black)" value="name-asc">
              Name: A to Z
            </option>
            <option className="text-2xl text-(--text-black)" value="name-desc">
              Name: Z to A
            </option>
          </select>
        </div>
      </div>
      <div className="laptop:grid-cols-4 grid grid-cols-1 justify-items-center gap-x-4.5 gap-y-10">
        <div className="laptop:block laptop:col-span-1 hidden w-full">
          <ProductFilter />
        </div>

        <div className="laptop:col-span-3 tablet:grid-cols-3 laptop:grid-cols-3 col-span-1 grid w-full grid-cols-1 justify-items-center gap-x-4.5 gap-y-10">
          {productData?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
