"use client";
import { PAGE_URLS } from "@/constants/PAGE_URLS";
import { Tables } from "@/types/supabase";
import { useTransitionRouter } from "@/utils/useTransitionRouter";
import Image from "next/image";

const ProductCard = ({ product }: { product: Tables<"products"> }) => {
  const router = useTransitionRouter();

  return (
    <div className="radius-20 border-app-background overflow-hidden border-2 bg-white">
      <div className="relative h-[200px] w-full">
        <Image
          alt={product.name}
          src={product.image_urls?.[0] as string}
          fill
          className="rounded-[20px_20px_0_0] object-cover"
        />
      </div>

      <div className="p-6 text-start text-(--text-black)">
        <button
          onClick={() => router.push(`${PAGE_URLS.PRODUCTS}/${product.id}`)}
          className="cursor-pointer text-start text-lg font-bold transition-colors duration-300 hover:text-(--action-color)"
        >
          {product.name}
        </button>
        <div className="mt-4 flex flex-col items-start justify-between gap-3">
          <p className="text-end text-lg font-bold text-(--action-color)">
            AED {product.price.toFixed(2)}
          </p>
          <p className="text-sm font-medium text-(--green-color)">
            In Stock, {product.stock} Units
          </p>
        </div>
        {/* <Button className="mt-4 w-full" text="Add to cart" /> */}
      </div>
    </div>
  );
};

export default ProductCard;
