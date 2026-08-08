"use client";
import { PAGE_URLS } from "@/constants/PAGE_URLS";
import type { Tables } from "@/types/supabase";
import { useTransitionRouter } from "@/utils/useTransitionRouter";
import Image from "next/image";

type BrandRow = Tables<"brands">;

const BrandCard = ({ brand }: { brand: BrandRow }) => {
  const router = useTransitionRouter();
  return (
    <button
      onClick={() => router.push(`${PAGE_URLS.BRANDS}/${brand.id}`)}
      className="group radius-20 before:radius-20 relative flex h-full items-center justify-center overflow-hidden bg-gray-200 p-1 shadow-md before:pointer-events-none before:absolute before:z-10 before:h-full before:w-full before:bg-[#0003] before:content-['']"
    >
      <Image
        src={brand.image}
        alt={brand.brand}
        objectFit="cover"
        className="radius-20 z-0 transition-transform duration-500 group-hover:scale-110"
        fill
      />
      <h2 className="transition-text laptop:text-xl laptop:group-hover:text-xl absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-lg font-semibold text-white opacity-100 duration-500 group-hover:text-2xl">
        {brand.brand}
      </h2>
    </button>
  );
};

export default BrandCard;
