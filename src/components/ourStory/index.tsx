import Image from "next/image";
import StoryCard from "./StoryCard";
import { STORY } from "../../constants/STORY";
import { forwardRef } from "react";

const OurStory = () => {
  return (
    <section
      id="story"
      className="laptop:grid-cols-[486px_1fr] relative grid scroll-mt-44 grid-cols-[1fr] gap-x-14 overflow-hidden"
    >
      <div className="laptop:h-175 desktop:w-auto desktop:h-full relative h-120 w-full rounded-[23px]">
        <Image src={"/assets/images/our-story.png"} fill alt="Our Story" />
      </div>
      <div className="grid grid-rows-[min-content_min-content_1fr] gap-y-12.5">
        <h1 className="laptop:text-[64px] text-[55px] font-extrabold text-(--primary-color)">
          Our Story
        </h1>
        <p className="laptop:text-[16px] text-[14px] leading-[130%] font-normal text-(--secondary-color)">
          <span className="mb-4 block">
            We, EnergyLogic Systems was established with one clear goal: to
            deliver reliable industrial control solutions that keep plants
            operating safely and efficiently — every single day. With extensive
            expertise in gas turbine controls, PLC automation, and industrial
            electronics, we support clients around the world with the parts they
            need, exactly when they need them.
          </span>
          <span className="mb-4 block">
            Downtime is expensive — so our mission is to reduce risk, shorten
            delays, and ensure seamless plant operations.
          </span>
          <span className="block">
            We supply trusted brands including GE Speedtronic, Siemens,
            Allen-Bradley, Bently Nevada, Woodward, Honeywell, and more. We
            don’t just sell parts — we support your success. And we work hard to
            make sure your operations never stop running.
          </span>
        </p>
        <div className="tablet:grid-cols-[repeat(3,1fr)] laptop:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] grid gap-7.5">
          {STORY.map((item) => {
            return <StoryCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
