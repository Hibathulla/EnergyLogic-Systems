"use client";
import Button from "@/components/common/Button";
import PageLayout from "@/layouts/pageLayout";
import { useCartStore } from "@/store/cartStore";
import { Tables } from "@/types/supabase";
import Image from "next/image";
import React from "react";

const ProductDetail = ({
  productDetail,
}: {
  productDetail: Tables<"products">;
}) => {
  const { addToCart } = useCartStore();
  const [selectedImage, setSelectedImage] = React.useState<string | null>(
    productDetail?.image_urls?.[0] || null
  );
  return (
    <PageLayout className="laptop:grid-cols-2 grid grid-cols-1 justify-between justify-items-center gap-12">
      <div className="border-app-background laptop:col-span-1 radius-20 laptop:flex-row col-span-2 flex h-[calc(100vh-450px)] w-full flex-col-reverse items-center gap-10 border bg-white p-10">
        <div className="laptop:flex-col flex flex-row items-start justify-between gap-4.5">
          {productDetail?.image_urls?.map((imageUrl, index) => (
            <button
              key={index}
              className="relative h-25 w-25"
              onClick={() => setSelectedImage(imageUrl as string)}
            >
              <Image
                src={imageUrl as string}
                alt={`Product Image ${index + 1}`}
                fill
                objectFit="cover"
                className="radius-20 object-cover"
              />
            </button>
          ))}
        </div>
        <div className="laptop:h-full relative h-[450px] w-full">
          <Image
            src={selectedImage as string}
            alt="Product Image"
            fill
            objectFit="cover"
            className="radius-20 object-cover"
          />
        </div>
      </div>

      <div className="laptop:col-span-1 radius-20 col-span-2 w-full bg-white">
        <div className="flex flex-col gap-4.5 p-10">
          <h3 className="text-4xl font-bold text-(--primary-color)">
            {productDetail?.name}
          </h3>
          <p className="text-lg font-medium text-(--text-black)">
            The GE Multilin 139-V1EFTZ-DK RTD Sensor is a high-quality sensor
            designed for accurate temperature measurement in industrial
            applications. It features a durable construction and reliable
            performance, making it suitable for use in harsh environments.
          </p>
          <div className="flex items-center gap-4.5">
            <p className="text-2xl font-bold text-(--action-color)">
              {`AED ${productDetail?.price?.toFixed(2)}`}
            </p>
            <p className="text-sm font-bold text-(--green-color)">
              In Stock, {productDetail?.stock} Units
            </p>
          </div>
          <Button
            onButtonClick={() => addToCart(productDetail)}
            icon="online-store/cart"
            type="outline"
            text="Add to cart"
          />
          <Button text="Buy Now" />

          <div>{productDetail?.description}</div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProductDetail;
