import ProductList from "@/components/store/product/ProductList";
import PageLayout from "@/layouts/pageLayout";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function ProductListCategoryPage({
  params,
}: {
  params: { id: string };
}) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const param = await params;
  const brandId = param.id;

  const { data: productData, error } = await supabase
    .from("products")
    .select(`*`)
    .eq("brand", Number(brandId));

  const { data: brandDetails, error: categoryError } = await supabase
    .from("brands")
    .select("*")
    .eq("id", Number(brandId))
    .single();

  if (error) {
    throw new Error(error.message);
  }

  if (categoryError) {
    throw new Error(categoryError.message);
  }
  return (
    <PageLayout className="mt-28 text-center">
      <div className="tablet:grid-cols-2 grid grid-cols-1 justify-items-center gap-4.5">
        <h3 className="self-center text-4xl font-bold text-(--primary-color)">
          {brandDetails?.brand}
        </h3>
        <div className="relative h-[300px] w-full">
          <Image
            src={brandDetails?.image}
            fill
            className="radius-20 object-cover"
            objectFit="cover"
            alt="Product Image"
          />
        </div>
      </div>

      <ProductList productData={productData} />
    </PageLayout>
  );
}
