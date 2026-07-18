"use client";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { NAVBAR } from "../../constants/NAVBAR";

const Sidebar: React.FC<{ headerBg?: boolean }> = ({ headerBg = false }) => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <Fragment>
      <div className={`laptop:hidden fixed left-0 z-50 w-full`}>
        <div
          className={`flex items-center justify-between ${headerBg ? "bg-app-background py-5 shadow-xl" : "py-12"} tablet:px-10 relative px-4`}
        >
          {/* <img
            src="/assets/svg/shapes/ellipse.svg"
            className={`${headerBg ? "left-0" : "hidden"} -z-[100] object-cover absolute w-full h-full top-0`}
            alt="ellipse"
          /> */}
          <div className="tablet:gap-4.5 flex items-center gap-2.5">
            <div className="tablet:w-20 tablet:h-20 relative h-14 w-14">
              <Image src={"/assets/svg/els-logo.svg"} alt="ELS-Logo" fill />
            </div>
            <h2
              className={`${headerBg ? "text-(--text-black)" : "text-white"} tablet:text-[27px] desktop:text-[30px] text-left text-[18px] font-bold`}
            >
              <span className="block">EnergyLogic</span>
              <span className="block">Systems</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            {" "}
            <button className="gradient-primary ml-auto flex h-10.25 w-10.25 cursor-pointer items-center justify-center rounded-full">
              <Image
                src={"/assets/svg/whatsapp.svg"}
                width={25}
                height={25}
                alt="Hamburger menu"
              />
            </button>
            <button
              onClick={() => setSidebar(true)}
              className="gradient-primary ml-auto flex h-10.25 w-10.25 cursor-pointer items-center justify-center rounded-full"
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
        className={`${headerBg ? "py-5" : "py-12"} ${sidebar ? "block translate-x-0" : "translate-x-full"} tablet:px-10 fixed top-0 left-0 z-50 flex h-screen w-full flex-col bg-(--background) px-4 transition-all duration-700 ease-in-out`}
      >
        <div className="flex w-full items-center justify-between border-b border-(--secondary-color)/40 pb-6">
          <div className="tablet:gap-4.5 flex items-center gap-2.5">
            <div className="tablet:w-20 tablet:h-20 relative h-14 w-14">
              <Image src={"/assets/svg/els-logo.svg"} alt="ELS-Logo" fill />
            </div>
            <h2
              className={`tablet:text-[27px] desktop:text-[30px] text-left text-[18px] font-bold text-(--text-black)`}
            >
              <span className="block">EnergyLogic</span>
              <span className="block">Systems</span>
            </h2>
          </div>
          <button
            onClick={() => setSidebar(false)}
            className="gradient-primary ml-auto flex h-10.25 w-10.25 cursor-pointer items-center justify-center rounded-full"
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
                  className="desktop:text-lg gradient-primary-after relative cursor-pointer pb-4 text-base text-[26px] font-semibold after:block after:h-0.5 after:w-0 after:transition-all after:duration-500 after:content-[''] hover:after:w-full"
                  key={item?.id}
                >
                  {item?.name}
                </li>
              );
            })}
          </ul>
        </nav>
        <p className="mt-auto text-center text-[17px] text-(--text-black)">
          © By Energy Logics Systems. All rights reserved.
        </p>
      </aside>
    </Fragment>
  );
};

export default Sidebar;
