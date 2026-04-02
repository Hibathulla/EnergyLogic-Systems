import React from "react";
import { ItemInterface } from "../../interface/common.interface";
import Image from "next/image";

const ServiceCard = ({ item }: { item: ItemInterface }) => {
  return (
    <div className="rounded-[20px] bg-white">
      <div className="relative w-full h-68">
        <Image
          src={item?.img}
          className="object-cover rounded-[20px]"
          alt={item?.title}
          fill
        />
      </div>
      <div className="p-7.5 space-y-3">
        <h2 className="text-(--primary-color) font-bold text-[40px] leading-[100%] -tracking-[2%]">
          {item?.title}
        </h2>
        <p className="font-normal text-[16px] text-(--secondary-color) leading-[130%]">
          {item?.desc}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
