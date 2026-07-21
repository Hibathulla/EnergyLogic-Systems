import Button from "@/components/common/Button";
import PageLayout from "@/layouts/pageLayout";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <PageLayout className="laptop:grid-cols-2 grid grid-cols-1 justify-between justify-items-center gap-12">
      <div className="border-app-background laptop:col-span-1 radius-20 laptop:flex-row col-span-2 flex h-[calc(100vh-450px)] w-full flex-col-reverse items-center gap-10 border bg-white p-10">
        <div className="laptop:flex-col flex flex-row items-start justify-between gap-4.5">
          <div className="relative h-25 w-25">
            <Image
              src="https://automationindustrial.com/cdn/shop/products/139-V1EFTZ-DK_1.JPEG?v=1656355638&width=1920"
              alt="Product Image"
              fill
              objectFit="cover"
              className="radius-20 object-cover"
            />
          </div>
          <div className="relative h-25 w-25">
            <Image
              src="https://automationindustrial.com/cdn/shop/products/139-V1EFTZ-DK_1.JPEG?v=1656355638&width=1920"
              alt="Product Image"
              fill
              objectFit="cover"
              className="radius-20 object-cover"
            />
          </div>
          <div className="relative h-25 w-25">
            <Image
              src="https://automationindustrial.com/cdn/shop/products/139-V1EFTZ-DK_1.JPEG?v=1656355638&width=1920"
              alt="Product Image"
              fill
              objectFit="cover"
              className="radius-20 object-cover"
            />
          </div>
        </div>
        <div className="laptop:h-full relative h-[450px] w-full">
          <Image
            src="https://automationindustrial.com/cdn/shop/products/139-V1EFTZ-DK_1.JPEG?v=1656355638&width=1920"
            alt="Product Image"
            fill
            objectFit="cover"
            className="radius-20 object-cover"
          />
        </div>
      </div>

      <div className="laptop:col-span-1 radius-20 col-span-2 w-full bg-white">
        <div className="flex flex-col gap-4.5 p-10">
          <h3 className="text-4xl font-bold text-(--primary-color)">
            GE Multilin 139-V1EFTZ-DK RTD Sensor
          </h3>
          <p className="text-lg font-medium text-(--text-black)">
            The GE Multilin 139-V1EFTZ-DK RTD Sensor is a high-quality sensor
            designed for accurate temperature measurement in industrial
            applications. It features a durable construction and reliable
            performance, making it suitable for use in harsh environments.
          </p>
          <div className="flex items-center gap-4.5">
            <p className="text-2xl font-bold text-(--action-color)">
              $47500.00.99
            </p>
            <p className="text-sm font-bold text-(--green-color)">
              In Stock, 5 Units
            </p>
          </div>
          <Button icon="online-store/cart" type="outline" text="Add to cart" />
          <Button text="Buy Now" />

          <div>
            The GE IS215VCMIH2C is a VME Bus Master Controller (VCMI) designed
            for the GE Mark VI Speedtronic.Turbine Control System. It serves as
            the central communication interface between the main controller, VME
            I/O modules, and the IONet network, ensuring reliable, high-speed
            data exchange throughout the turbine control system. This board is a
            critical component used in gas and steam turbine applications where
            dependable control and monitoring are essential. Key Features *
            Genuine General Electric (GE) Mark VI control system module *
            Functions as the VME Bus Master Controller (VCMI) * Provides
            communication between controller and VME I/O boards * Supports IONet
            communication for distributed control architecture * Equipped with
            RS-232 serial interface and three IONet communication ports *
            Front-panel LED indicators for Run, Status, Fail, and Communication
            * Designed for high reliability in industrial power generation
            environments * Suitable for gas turbine, steam turbine, and
            combined-cycle power plants Technical Specifications * Manufacturer:
            General Electric (GE) * Part Number: IS215VCMIH2C * Series: Mark VI
            Speedtronic * Product Type: VME Bus Master Controller (VCMI) *
            Communication: IONet, VME Backplane, RS-232 * Application: Turbine
            Control System * Country of Origin: USA (depending on production
            batch) Applications The IS215VCMIH2C is widely used in: * GE Mark VI
            Gas Turbine Control Systems * Steam Turbine Control Systems *
            Combined Cycle Power Plants * Industrial Power Generation Facilities
            * Turbine Control Panel Upgrades and Maintenance Product
            Availability We supply new, surplus, refurbished, and repair service
            options for the GE IS215VCMIH2C. All units are tested before
            shipment and are available with warranty options. Worldwide shipping
            and technical support are available.
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
