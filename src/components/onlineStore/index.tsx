import React from "react";
import SectionLayout from "../../layouts/sectionLayout";
import Button from "../common/Button";

const OnlineStore = () => {
  return (
    <SectionLayout className="h-171 grid justify-center items-end bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.5)),url('/assets/images/online-store/online-store-bg.png')] bg-cover bg-no-repeat bg-center">
      <div className="text-center">
        <h1 className="text-white font-extrabold laptop:text-[64px] text-[55px]">
          Online Story
        </h1>
        <p className="text-white mx-auto w-[75%] leading-[130%] font-normal text-[14px] laptop:text-[16px]">
          ELS supports Users of all types of Industrial Controls to source
          running parts as well as parts that have been declared Obsolete by the
          OEMs. ELS carries a reasonable stock of effective parts as required by
          Users and have the capability of sourcing parts on behalf of Users
          through their worldwide network of prominent stockists and suppliers.
          All parts supplied by WOC under ICS carries a standard warranty of 12
          months which will be fully tested in live panels or using General Test
          Jigs / Benches
        </p>
        <Button className="mx-auto mt-7.5" icon="whatsapp" text="Contact Us" />
      </div>
    </SectionLayout>
  );
};

export default OnlineStore;
