import CategoryCard from "@/components/store/BrandCard";
import PageLayout from "@/layouts/pageLayout";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import BrandCard from "@/components/store/BrandCard";

export default async function Page() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: brands, error } = await supabase.from("brands").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return (
    <PageLayout>
      <h1 className="laptop:text-[46px] text-[46px] font-extrabold text-(--primary-color)">
        Our Brands
      </h1>

      <div className="tablet:grid-cols-3 mt-14 grid auto-rows-[140px] grid-cols-[1fr] gap-10.25">
        {brands?.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </div>
    </PageLayout>
  );
}
