import CategoryCard from "@/components/store/CategoryCard";
import PageLayout from "@/layouts/pageLayout";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

export default async function Page() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: categories, error } = await supabase
    .from("categories")
    .select("*");

  if (error) {
    throw new Error(error.message);
  }

  console.log(categories, "categories");

  return (
    <PageLayout>
      <h1 className="laptop:text-[46px] text-[46px] font-extrabold text-(--primary-color)">
        Our Categories
      </h1>

      <p className="mt-4 text-sm text-gray-600">
        {categories?.length
          ? `${categories.length} products loaded`
          : "No products found"}
      </p>

      <div className="tablet:grid-cols-3 mt-14 grid auto-rows-[140px] grid-cols-[1fr] gap-10.25">
        {categories?.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </PageLayout>
  );
}
