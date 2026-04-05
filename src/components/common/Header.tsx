import Image from "next/image";
import React from "react";
import { NAVBAR } from "@/constants/NAVBAR";
import Button from "./Button";

const Header: React.FC<{ headerBg: boolean }> = ({ headerBg }) => {
  return (
    <header
      className={` laptop:fixed max-w-375 z-50 w-full top-0 laptop:block hidden`}
    >
      <div
        className={`${headerBg ? "bg-[#f1f5fb] py-5 shadow-lg" : "py-25"} px-10 flex relative
        w-full justify-between items-center`}
      >
        <img
          src="/assets/svg/shapes/ellipse.svg"
          className={`object-cover absolute w-full h-full left-40 top-0`}
          alt="ellipse"
        />
        <div className="flex items-center gap-4.5">
          <div className="relative w-20 h-20">
            <Image src={"/assets/svg/els-logo.svg"} alt="ELS-Logo" fill />
          </div>
          <h2
            className={`${headerBg ? "text-black" : "text-white"} font-bold text-[27px] desktop:text-[30px] text-left`}
          >
            <span className="block">EnergyLogic</span>
            <span className="block">Systems</span>
          </h2>
        </div>
        <nav>
          <ul
            className={`${headerBg ? "text-(--primary-color)" : "text-white"} flex items-center list-none gap-5 desktop:gap-12.5`}
          >
            {NAVBAR?.map((item, index) => {
              return (
                <li
                  className="relative cursor-pointer 
                text-base desktop:text-lg font-semibold
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
      </div>
    </header>
  );
};

export default Header;
