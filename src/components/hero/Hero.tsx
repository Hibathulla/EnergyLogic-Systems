import React from "react";
import Header from "@/components/common/header/Header";

const Hero = () => {
  return (
    <section className="relative bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.5)),url('/assets/images/hero.png')] h-screen bg-cover bg-center">
      <Header />
      <div className="h-full grid content-center justify-center justify-items-center text-center">
        <h1 className="animate-fade-in after:content-[''] after:block gradient-primary-after rounded-md after:m-6.25 after:h-1.25 after:w-[90%] after:mx-auto text-[55px]/[90%] tablet:text-[68px]/[90%] desktop:text-7xl/[90%] text-white font-extrabold">
          <span className="block">Powering</span>
          <span className="block">Industrial Reliability</span>
        </h1>
        <p className="backface-hidden animate-fade-in-delay text-white text-[14px] laptop:text-[16px] font-normal w-[75%] leading-[130%]">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </section>
  );
};

export default Hero;
