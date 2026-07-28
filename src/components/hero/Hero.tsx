"use client";
import React, { forwardRef } from "react";
import SectionLayout from "../../layouts/sectionLayout";

const Hero = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="h-screen bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.5)),url('/assets/images/hero.png')] bg-cover bg-center"
    >
      <SectionLayout className="grid h-full content-center justify-center justify-items-center text-center">
        <h1 className="animate-fade-in gradient-primary-after tablet:text-[68px]/[90%] desktop:text-7xl/[90%] rounded-md text-[55px]/[90%] font-extrabold text-white after:m-6.25 after:mx-auto after:block after:h-1.25 after:w-[90%] after:content-['']">
          <span className="block">Powering</span>
          <span className="block">Industrial Reliability</span>
        </h1>
        <p className="animate-fade-in-delay laptop:text-[16px] w-[75%] text-[14px] leading-[130%] font-normal text-white backface-hidden">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </SectionLayout>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
