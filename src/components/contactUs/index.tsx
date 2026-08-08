import React from "react";
import SectionLayout from "../../layouts/sectionLayout";
import TextField from "../common/TextField";
import Button from "../common/Button";

const ContactUs = () => {
  return (
    <section
      id="contact-us"
      className="scroll-mt-36 bg-[rgb(201_251_83/0.3)] bg-[url('/assets/images/contact-us.png')] bg-cover bg-center bg-no-repeat"
    >
      <SectionLayout>
        <div className="text-center">
          <h1 className="laptop:text-[21px] text-[18px] font-extrabold">
            Contact Us
          </h1>
          <h2 className="laptop:text-[37px] text-[34px] font-extrabold">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            incididunt.
          </h2>
        </div>

        <form className="mt-21.5 grid grid-cols-2 gap-x-7.5 gap-y-8">
          <TextField
            className="tablet:col-span-1 col-span-2"
            placeholder="Your Name"
          />
          <TextField
            className="tablet:col-span-1 col-span-2"
            placeholder="Email Address"
          />
          <TextField className="col-span-2" placeholder="Subject" />
          <textarea
            placeholder="Messages *"
            rows={6}
            className="text-16px col-span-2 rounded-[5px] border border-[#c4c4c4] bg-white px-6.5 py-5.5 leading-[170%] text-(--secondary-color) outline-none placeholder:text-[16px]"
            name=""
            id=""
          />
          <div className="tablet:col-span-1 tablet:col-start-2 tablet:col-end-3 tablet:justify-self-end col-span-2 justify-self-stretch">
            <Button text="Submit Messages" />
          </div>
        </form>
      </SectionLayout>
    </section>
  );
};

export default ContactUs;
