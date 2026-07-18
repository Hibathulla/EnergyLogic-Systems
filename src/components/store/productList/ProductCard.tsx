import Image from "next/image";
import React from "react";
import Button from "../../common/Button";

const ProductCard = () => {
  return (
    <div className="radius-20 border-app-background overflow-hidden border-2 bg-white">
      <div className="relative h-[300px] w-full">
        <Image
          alt="Product Image"
          src={
            "https://automationindustrial.com/cdn/shop/products/139-V1EFTZ-DK_1.JPEG?v=1656355638&width=1920"
          }
          fill
          className="rounded-[20px_20px_0_0] object-cover"
        />
      </div>

      <div className="p-6 text-start text-(--text-black)">
        <h3 className="cursor-pointer text-lg font-bold transition-colors duration-300 hover:text-(--action-color)">
          GE Multilin 139-V1EFTZ-DK RTD Sensor
        </h3>
        <div className="mt-4 flex flex-col items-start justify-between gap-3">
          <p className="text-end text-lg font-bold text-(--action-color)">
            $47500.00.99
          </p>
          <p className="text-sm font-medium text-green-500">
            In Stock, 5 Units
          </p>
        </div>
        <Button className="mt-4 w-full" text="Add to cart" />
      </div>
    </div>
  );
};

export default ProductCard;
