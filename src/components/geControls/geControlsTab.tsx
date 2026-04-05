import React from "react";
import { ItemInterface } from "../../interface/common.interface";

type ItemWithoutImg = Omit<ItemInterface, "img">;

const GeControlsTab = ({
  item,
  selectedTab,
  setSelectedTab,
}: {
  item: ItemWithoutImg;
  selectedTab: ItemWithoutImg | null;
  setSelectedTab: React.Dispatch<React.SetStateAction<ItemWithoutImg | null>>;
}) => {
  const isTabSelected = item?.id === selectedTab?.id;

  return (
    <button
      type="submit"
      className="py-5 cursor-pointer"
      onClick={() => {
        console.log("clicked");

        setSelectedTab(isTabSelected ? null : item);
      }}
    >
      <div className="flex items-center gap-2.75">
        <h3 className="text-white text-[28px] font-bold">{item?.title}</h3>
        <div className="gradient-primary w-6.75 h-6.75 rounded-[13.5px] flex items-center justify-center">
          <img
            className={`${isTabSelected && "rotate-180"} pointer-events-none`}
            src={"/assets/svg/arrow.svg"}
            alt={item?.title}
          />
        </div>
      </div>

      <div
        className={`overflow-hidden text-white text-left transition-all duration-300 ${
          isTabSelected ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        {item?.desc}
      </div>
    </button>
  );
};

export default GeControlsTab;
