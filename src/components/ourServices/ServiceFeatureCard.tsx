import React from "react";
import { ItemInterface } from "../../interface/common.interface";
import Image from "next/image";

const ServiceFeatureCard = ({ item }: { item: ItemInterface }) => {
  return (
    <div className="grid gap-x-11 grid-cols-[1fr] tablet:grid-cols-[max-content_auto] overflow-hidden">
      <div className="self-center relative w-17 h-17 row-span-2">
        <Image src={item?.img} fill alt={item.title} />
      </div>
      <h2 className="text-[40px] font-bold">{item.title}</h2>
      <p className="block break-all wrap-break-word col-start-2 col-end-2 text-(--secondary-color) text-[16px] font-normal leading-[130%]">
        {item.desc}
      </p>
    </div>
  );
};

export default ServiceFeatureCard;
