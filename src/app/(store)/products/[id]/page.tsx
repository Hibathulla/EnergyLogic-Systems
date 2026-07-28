import ProductDetail from "@/components/store/product/ProductDetail";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productId = Number(id);

  if (Number.isNaN(productId)) {
    throw new Error("Invalid product id");
  }

  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: productDetail, error: productDetailError } = await supabase
    .from("products")
    .select("*")
    .eq("id", productId)
    .single();

  if (productDetailError) {
    throw new Error(productDetailError.message);
  }

  return <ProductDetail productDetail={productDetail} />;
}
