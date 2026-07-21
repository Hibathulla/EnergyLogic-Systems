import Drawer from "@/components/common/Drawer";
import ProductCard from "@/components/store/productList/ProductCard";
import ProductFilter from "@/components/store/productList/productFilter";
import PageLayout from "@/layouts/pageLayout";
import { Funnel } from "lucide-react";
import Image from "next/image";

export default function ProductListCategoryPage() {
  return (
    <PageLayout className="mt-28 text-center">
      <div className="tablet:grid-cols-2 grid grid-cols-1 justify-items-center gap-4.5">
        <h3 className="self-center text-4xl font-bold text-(--primary-color)">
          169 Motor Management Relay
        </h3>
        <div className="relative h-[300px] w-full">
          <Image
            src={
              "https://automationindustrial.com/cdn/shop/products/169-100P-120_1.JPEG?v=1656357498&width=1400"
            }
            fill
            className="radius-20 object-cover"
            objectFit="cover"
            alt="Product Image"
          />
        </div>
      </div>

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
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </PageLayout>
  );
}
