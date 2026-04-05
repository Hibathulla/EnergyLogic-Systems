import Image from "next/image";
import React from "react";
import { NAVBAR } from "@/constants/NAVBAR";
import Button from "./Button";

const Header = () => {
  return (
    <header className="hidden desktop:flex fixed left-1/2 -translate-x-1/2 w-full top-0 max-w-375 px-20 pt-27.5 justify-between items-center">
      <div className="flex items-center gap-4.5">
        <div className="relative w-20 h-20">
          <Image src={"/assets/svg/els-logo.svg"} alt="ELS-Logo" fill />
        </div>
        <h2 className="font-bold text-[30px] text-white">
          <span className="block">EnergyLogic</span>
          <span className="block">Systems</span>
        </h2>
      </div>
      <nav>
        <ul className="flex items-center list-none gap-12.5 text-white">
          {NAVBAR?.map((item, index) => {
            return (
              <li
                className="relative cursor-pointer text-lg font-semibold
after:content-[''] after:block
after:w-0 after:h-0.5 gradient-primary-after
hover:after:w-full after:transition-all after:duration-500"
                key={index}
              >
                {item}
              </li>
            );
          })}
          <Button text={"Contact Us"} icon={"whatsapp"} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
