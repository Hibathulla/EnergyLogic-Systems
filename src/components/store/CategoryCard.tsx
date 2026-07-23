import Image from "next/image";
import Link from "next/link";
import type { Tables } from "@/types/supabase";

type CategoryRow = Tables<"categories">;

const CategoryCard = ({ category }: { category: CategoryRow }) => {
  return (
    <Link href="/online-store/3" className="cursor-pointer">
      <div className="group radius-20 before:radius-20 relative flex h-full items-center justify-center overflow-hidden bg-gray-200 p-1 shadow-md before:pointer-events-none before:absolute before:z-10 before:h-full before:w-full before:bg-[#0003] before:content-['']">
        <Image
          src={category.image}
          alt={category.category}
          objectFit="cover"
          className="radius-20 z-0 transition-transform duration-500 group-hover:scale-110"
          fill
        />
        <h2 className="transition-text laptop:text-xl laptop:group-hover:text-xl absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-lg font-semibold text-white opacity-100 duration-500 group-hover:text-2xl">
          {category.category}
        </h2>
      </div>
    </Link>
  );
};

export default CategoryCard;
