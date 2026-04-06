import Image from "next/image";
import StoryCard from "./StoryCard";
import { STORY } from "../../constants/STORY";
import { forwardRef } from "react";

const OurStory = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="scroll-mt-44 relative grid grid-cols-[1fr] laptop:grid-cols-[486px_1fr] gap-x-14 overflow-hidden"
    >
      <div className="rounded-[23px] w-full h-120 laptop:h-175 desktop:w-auto relative desktop:h-full">
        <Image src={"/assets/images/our-story.png"} fill alt="Our Story" />
      </div>
      <div className="grid grid-rows-[min-content_min-content_1fr] gap-y-12.5">
        <h1 className="text-(--primary-color) font-extrabold laptop:text-[64px] text-[55px]">
          Our Story
        </h1>
        <p className="text-(--secondary-color) leading-[130%] font-normal text-[14px] laptop:text-[16px]">
          <span className="block mb-4">
            We, EnergyLogic Systems was established with one clear goal: to
            deliver reliable industrial control solutions that keep plants
            operating safely and efficiently — every single day. With extensive
            expertise in gas turbine controls, PLC automation, and industrial
            electronics, we support clients around the world with the parts they
            need, exactly when they need them.
          </span>
          <span className="block mb-4">
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
        <div className="grid tablet:grid-cols-[repeat(3,1fr)] laptop:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-7.5">
          {STORY.map((item) => {
            return <StoryCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
});

OurStory.displayName = "OurStory";

export default OurStory;
