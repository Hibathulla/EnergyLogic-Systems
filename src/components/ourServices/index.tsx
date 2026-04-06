import React from "react";
import Ellipse from "../common/Ellipse";
import { SERVICE_FEATURES, SERVICES } from "../../constants/SERVICES";
import ServiceCard from "./ServiceCard";
import ServiceFeatureCard from "./ServiceFeatureCard";

const OurServices = () => {
  return (
    <section id="our-service" className="scroll-mt-44 grid justify-center">
      <div className="text-center space-y-3.5">
        <h1 className="text-(--primary-color) font-extrabold laptop:text-[64px] text-[55px]">
          Our Services
        </h1>
        <p className="text-(--secondary-color) mx-auto w-[75%] leading-[130%] font-normal text-[14px] laptop:text-[16px]">
          We, EnergyLogic Systems was established with one clear goal: to
          deliver reliable industrial control solutions that keep plants
          operating safely and efficiently — every single day.
        </p>
      </div>
      <div className="mt-22.75 gap-10.25 grid grid-cols-[1fr] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))]">
        {SERVICES.map((item) => {
          return <ServiceCard key={item.id} item={item} />;
        })}
      </div>
      <div className="mt-12 gap-10.25 grid gap-x-46.25 px-18 gap-y-25.5 grid-cols-[1fr] tablet:grid-cols-[repeat(2,1fr)]">
        {SERVICE_FEATURES.map((item) => {
          return <ServiceFeatureCard key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
};

export default OurServices;
