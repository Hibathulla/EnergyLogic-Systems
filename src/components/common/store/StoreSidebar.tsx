"use client";
import { useCartStore } from "@/store/cartStore";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import { Fragment, useState } from "react";
import { STORE_NAVBAR } from "../../../constants/NAVBAR";
import Button from "../Button";
import { useTransitionRouter } from "@/utils/useTransitionRouter";

const StoreSidebar = ({}) => {
  const [sidebar, setSidebar] = useState(false);
  const { cartCount } = useCartStore();
  const router = useTransitionRouter();

  return (
    <Fragment>
      <div className={`laptop:hidden fixed left-0 z-50 w-full`}>
        <div
          className={`tablet:px-10 bg-app-background relative flex items-center justify-between px-4 py-5 shadow-xl`}
        >
          {/* <img
            src="/assets/svg/shapes/ellipse.svg"
            className={`${headerBg ? "left-0" : "hidden"} -z-[100] object-cover absolute w-full h-full top-0`}
            alt="ellipse"
          /> */}
          <button
            onClick={() => router.replace("/")}
            className="tablet:gap-4.5 flex cursor-pointer items-center gap-2.5"
          >
            <div className="tablet:w-20 tablet:h-20 relative h-14 w-14 cursor-pointer">
              <Image src={"/assets/svg/els-logo.svg"} alt="ELS-Logo" fill />
            </div>
            <h2
              className={`tablet:text-[27px] desktop:text-[30px] text-left text-[18px] font-bold text-(--text-black)`}
            >
              <span className="block">EnergyLogic</span>
              <span className="block">Systems</span>
            </h2>
          </button>
          <div className="flex items-center gap-3">
            {" "}
            <button
              onClick={() => router.push("/cart")}
              className="gradient-primary relative ml-auto flex h-10.25 w-10.25 cursor-pointer items-center justify-center rounded-full"
            >
              <ShoppingBag />
              <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-(--secondary-color) text-xs font-medium text-white">
                {cartCount}
              </span>
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
        className={`"py-5" ${sidebar ? "block translate-x-0" : "translate-x-full"} tablet:px-10 fixed top-0 left-0 z-50 flex h-screen w-full flex-col bg-(--background) px-4 transition-all duration-700 ease-in-out`}
      >
        <div className="flex w-full items-center justify-between border-b border-(--secondary-color)/40 py-6">
          <div className="tablet:gap-4.5 flex items-center gap-2.5">
            <div className="tablet:w-20 tablet:h-20 relative h-14 w-14">
              <Image src={"/assets/svg/els-logo.svg"} alt="ELS-Logo" fill />
            </div>
            <h2
              className={`tablet:text-[27px] desktop:text-[30px] space-x-1.5 text-left text-[18px] font-bold text-(--text-black)`}
            >
              <span>EnergyLogic</span>
              <span>Systems</span>
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

        <Button text={"Log In/Signup"} className="my-10 self-start" />
        <nav className="">
          <ul className="space-y-4 divide-y divide-(--secondary-color)/30">
            {STORE_NAVBAR?.map((item) => {
              return (
                <li
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(`/${item?.link}`);
                    setSidebar(false);
                  }}
                  className="desktop:text-lg relative cursor-pointer pb-4 text-base text-[26px] font-semibold after:block after:h-0.5 after:w-0 after:transition-all after:duration-500 after:content-[''] hover:after:w-full"
                  key={item?.id}
                >
                  {item?.name}
                </li>
              );
            })}
          </ul>
        </nav>
        <p className="mt-auto py-6 text-center text-[17px] text-(--text-black)">
          © By Energy Logics Systems. All rights reserved.
        </p>
      </aside>
    </Fragment>
  );
};

export default StoreSidebar;
