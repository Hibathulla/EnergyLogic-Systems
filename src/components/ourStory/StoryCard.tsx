import Image from "next/image";
import React from "react";

const StoryCard = ({
  item,
}: {
  item: {
    id: number;
    img: string;
    title: string;
    desc: string;
  };
}) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-25 h-25 gradient-primary rounded-[5px] flex items-center justify-center">
        <Image width={48} height={50} src={item.img} alt={item.title} />
      </div>
      <h3 className="font-bold text-[20px] laptop:text-[22px] text-black">
        {item.title}
      </h3>
      <p className="font-normal text-[14px] laptop:text-[16px] text-(--secondary-color)">
        {item.desc}
      </p>
    </div>
  );
};

export default StoryCard;
