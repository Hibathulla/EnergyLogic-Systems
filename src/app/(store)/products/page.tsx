import ProductList from "@/components/store/product/ProductList";
import PageLayout from "@/layouts/pageLayout";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function ProductListPage() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: productData, error } = await supabase
    .from("products")
    .select(`*`);

  if (error) {
    throw new Error(error.message);
  }

  return (
    <PageLayout className="mt-28 text-center">
      <h1 className="self-center text-center text-4xl font-bold text-(--primary-color)">
        Products
      </h1>

      <ProductList productData={productData} />
    </PageLayout>
  );
}
