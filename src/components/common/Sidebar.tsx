"use client";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { NAVBAR } from "../../constants/NAVBAR";

const Sidebar: React.FC<{ headerBg?: boolean }> = ({ headerBg = false }) => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <Fragment>
      <div className={`fixed z-50 laptop:hidden left-0 w-full`}>
        <div
          className={`flex items-center justify-between ${headerBg ? "bg-[#f1f5fb] py-5 shadow-xl" : "py-12"} px-4 relative tablet:px-10`}
        >
          {/* <img
            src="/assets/svg/shapes/ellipse.svg"
            className={`${headerBg ? "left-0" : "hidden"} -z-[100] object-cover absolute w-full h-full top-0`}
            alt="ellipse"
          /> */}
          <div className="flex items-center gap-2.5 tablet:gap-4.5">
            <div className="relative w-14 h-14 tablet:w-20 tablet:h-20">
              <Image src={"/assets/svg/els-logo.svg"} alt="ELS-Logo" fill />
            </div>
            <h2
              className={`${headerBg ? "text-(--text-black)" : "text-white"} font-bold text-[18px] tablet:text-[27px] desktop:text-[30px] text-left`}
            >
              <span className="block">EnergyLogic</span>
              <span className="block">Systems</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            {" "}
            <button className="cursor-pointer ml-auto gradient-primary w-10.25 h-10.25 rounded-full flex items-center justify-center">
              <Image
                src={"/assets/svg/whatsapp.svg"}
                width={25}
                height={25}
                alt="Hamburger menu"
              />
            </button>
            <button
              onClick={() => setSidebar(true)}
              className="cursor-pointer ml-auto gradient-primary w-10.25 h-10.25 rounded-full flex items-center justify-center"
            >
              <Image
                src={"/assets/svg/hamburger-menu.svg"}
                width={21}
                height={14}
                alt="Hamburger menu"
              />
            </button>
          </div>
        </div>
      </div>

      {/* sidebar */}
      <aside
        className={`${headerBg ? "py-5" : "py-12"} ${sidebar ? "translate-x-0 block" : "translate-x-full"} 
            flex flex-col bg-(--background) px-4 tablet:px-10 z-50 fixed top-0 left-0 
            ease-in-out transition-all duration-700 w-full h-screen`}
      >
        <div className="border-b border-(--secondary-color)/40 pb-6 flex items-center justify-between w-full">
          <div className="flex items-center gap-2.5 tablet:gap-4.5">
            <div className="relative w-14 h-14 tablet:w-20 tablet:h-20">
              <Image src={"/assets/svg/els-logo.svg"} alt="ELS-Logo" fill />
            </div>
            <h2
              className={`text-(--text-black) font-bold text-[18px] tablet:text-[27px] desktop:text-[30px] text-left`}
            >
              <span className="block">EnergyLogic</span>
              <span className="block">Systems</span>
            </h2>
          </div>
          <button
            onClick={() => setSidebar(false)}
            className="cursor-pointer ml-auto gradient-primary w-10.25 h-10.25 rounded-full flex items-center justify-center"
          >
            <Image
              src={"/assets/svg/close.svg"}
              width={21}
              height={14}
              alt="Hamburger menu"
            />
          </button>
        </div>

        <nav className="mt-15">
          <ul className="space-y-4 divide-y divide-(--secondary-color)/30">
            {NAVBAR?.map((item) => {
              return (
                <li
                  className="relative text-[26px] cursor-pointer pb-4 
                           text-base desktop:text-lg font-semibold
                           after:content-[''] after:block
                           after:w-0 after:h-0.5 gradient-primary-after
                           hover:after:w-full after:transition-all after:duration-500"
                  key={item?.id}
                >
                  {item?.name}
                </li>
              );
            })}
          </ul>
        </nav>
        <p className="mt-auto text-(--text-black) text-[17px] text-center">
          © By Energy Logics Systems. All rights reserved.
        </p>
      </aside>
    </Fragment>
  );
};

export default Sidebar;
