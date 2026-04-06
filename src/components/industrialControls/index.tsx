import React from "react";
import SectionLayout from "../../layouts/sectionLayout";
import Button from "../common/Button";

const IndustrialControls = () => {
  return (
    <section
      id="industrial-controls"
      className="scroll-mt-36 h-171 grid justify-center items-end bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.5)),url('/assets/images/industrial-controls/industrial-controls-bg.png')] bg-cover bg-no-repeat bg-center"
    >
      <SectionLayout className="text-center">
        <h1 className="text-white font-extrabold laptop:text-[64px] text-[55px]">
          Industrial Controls
        </h1>
        <p className="text-white mx-auto w-[75%] leading-[130%] font-normal text-[14px] laptop:text-[16px]">
          ELS has expanded to now support Industrial Controls beyond GE,
          servicing an array of equipment such as PLC, DCS, HMI’s, VFD’s, CNC,
          CPU, AC & DC Drives as well as other controls used in plants through
          means of spares and repairs, whether current or obsolete. ELS aims to
          help operators reduce costs and avoid unnecessary upgrades. Although
          we can support all brands, some of the more common manufacturer
          systems we handle are Siemens, ABB, Alstom, Allen Bradley, Rolls
          Royce, Triconex, Honeywell & Woodward.
        </p>
        <Button className="mx-auto mt-7.5" icon="whatsapp" text="Contact Us" />
      </SectionLayout>
    </section>
  );
};

export default IndustrialControls;
