import React from "react";
import SectionLayout from "../../layouts/sectionLayout";
import TextField from "../common/TextField";
import Button from "../common/Button";

const ContactUs = () => {
  return (
    <SectionLayout className="bg-[rgb(201_251_83/0.3)] bg-[url('/assets/images/contact-us.png')] bg-cover bg-no-repeat bg-center">
      <div className="text-center">
        <h1 className="font-extrabold laptop:text-[21px] text-[18px]">
          Contact Us
        </h1>
        <h2 className="font-extrabold laptop:text-[37px] text-[34px]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
          incididunt.
        </h2>
      </div>

      <form className="mt-21.5 grid grid-cols-2 gap-x-7.5 gap-y-8">
        <TextField
          className="col-span-2 tablet:col-span-1"
          placeholder="Your Name"
        />
        <TextField
          className="col-span-2 tablet:col-span-1"
          placeholder="Email Address"
        />
        <TextField className="col-span-2" placeholder="Subject" />
        <textarea
          placeholder="Messages *"
          rows={6}
          className="col-span-2 placeholder:text-[16px] text-16px leading-[170%] text-(--secondary-color) border-[#c4c4c4] border outline-none bg-white rounded-[5px] px-6.5 py-5.5"
          name=""
          id=""
        />
        <div className="col-span-2 justify-self-stretch tablet:col-span-1 tablet:col-start-2 tablet:col-end-3 tablet:justify-self-end">
          <Button text="Submit Messages" />
        </div>
      </form>
    </SectionLayout>
  );
};

export default ContactUs;
