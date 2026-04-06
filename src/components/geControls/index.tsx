"use client";
import { useState } from "react";
import { GE_CONTROLS } from "../../constants/GE_CONTROLS";
import GeControlsTab from "./geControlsTab";
import { ItemInterface } from "../../interface/common.interface";
import SectionLayout from "../../layouts/sectionLayout";

type ItemWithoutImg = Omit<ItemInterface, "img">;

const GeControls = () => {
  const [selectedTab, setSelectedTab] = useState<ItemWithoutImg | null>(null);

  return (
    <section
      id="ge-controls"
      className="scroll-mt-36 bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.5)),url('/assets/images/ge-controls/ge-controls-bg.png')] bg-cover bg-no-repeat bg-center"
    >
      <SectionLayout className="grid justify-center">
        <div className="text-center space-y-3.5">
          <h1 className="text-white font-extrabold laptop:text-[64px] text-[55px]">
            GE Controls
          </h1>
          <p className="text-white mx-auto w-[75%] leading-[130%] font-normal text-[14px] laptop:text-[16px]">
            With an effective stock of GE Controls cards/parts, ELS has the
            ability to support end users who need parts to keep their obsolete
            panels operational. ELS also stocks and supplies parts for running
            models.
          </p>
        </div>
        <div className="grid grid-cols-2">
          <div className="divide-y divide-gray-300 flex flex-col mt-15">
            {GE_CONTROLS.map((item) => {
              return (
                <GeControlsTab
                  key={item?.id}
                  item={item}
                  selectedTab={selectedTab}
                  setSelectedTab={setSelectedTab}
                />
              );
            })}
          </div>
          {/* <div></div> */}
        </div>
      </SectionLayout>
    </section>
  );
};

export default GeControls;
