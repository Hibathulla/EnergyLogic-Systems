import React from "react";
import Ellipse from "../common/Ellipse";
import { SERVICE_FEATURES, SERVICES } from "../../constants/SERVICES";
import ServiceCard from "./ServiceCard";
import ServiceFeatureCard from "./ServiceFeatureCard";

const OurServices = () => {
  return (
    <section id="service" className="grid scroll-mt-44 justify-center">
      <div className="space-y-3.5 text-center">
        <h1 className="laptop:text-[64px] text-[55px] font-extrabold text-(--primary-color)">
          Our Services
        </h1>
        <p className="laptop:text-[16px] mx-auto w-[75%] text-[14px] leading-[130%] font-normal text-(--secondary-color)">
          We, EnergyLogic Systems was established with one clear goal: to
          deliver reliable industrial control solutions that keep plants
          operating safely and efficiently — every single day.
        </p>
      </div>
      <div className="tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] mt-22.75 grid grid-cols-[1fr] gap-10.25">
        {SERVICES.map((item) => {
          return <ServiceCard key={item.id} item={item} />;
        })}
      </div>
      <div className="tablet:grid-cols-[repeat(2,1fr)] mt-12 grid grid-cols-[1fr] gap-10.25 gap-x-46.25 gap-y-25.5 px-18">
        {SERVICE_FEATURES.map((item) => {
          return <ServiceFeatureCard key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
};

export default OurServices;
