"use client";
import { useTransitionRouter } from "@/utils/useTransitionRouter";
import SectionLayout from "../../layouts/sectionLayout";
import Button from "../common/Button";
import { PAGE_URLS } from "@/constants/PAGE_URLS";

const IndustrialControls = () => {
  const router = useTransitionRouter();
  return (
    <section
      id="industrial-controls"
      className="grid h-171 scroll-mt-36 items-end justify-center bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.5)),url('/assets/images/industrial-controls/industrial-controls-bg.png')] bg-cover bg-center bg-no-repeat"
    >
      <SectionLayout className="text-center">
        <h1 className="laptop:text-[64px] text-[55px] font-extrabold text-white">
          Industrial Controls
        </h1>
        <p className="laptop:text-[16px] mx-auto w-[75%] text-[14px] leading-[130%] font-normal text-white">
          ELS has expanded to now support Industrial Controls beyond GE,
          servicing an array of equipment such as PLC, DCS, HMI’s, VFD’s, CNC,
          CPU, AC & DC Drives as well as other controls used in plants through
          means of spares and repairs, whether current or obsolete. ELS aims to
          help operators reduce costs and avoid unnecessary upgrades. Although
          we can support all brands, some of the more common manufacturer
          systems we handle are Siemens, ABB, Alstom, Allen Bradley, Rolls
          Royce, Triconex, Honeywell & Woodward.
        </p>
        <Button
          onButtonClick={() => router.push(PAGE_URLS.CONTACT_US)}
          className="mx-auto mt-7.5"
          icon="whatsapp"
          text="Contact Us"
        />
      </SectionLayout>
    </section>
  );
};

export default IndustrialControls;
