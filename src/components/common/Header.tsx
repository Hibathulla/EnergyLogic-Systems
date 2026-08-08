"use client";
import { NAVBAR } from "@/constants/NAVBAR";
import { PAGE_URLS } from "@/constants/PAGE_URLS";
import { useCartStore } from "@/store/cartStore";
import { useTransitionRouter } from "@/utils/useTransitionRouter";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import CartButton from "./CartButton";

const Header: React.FC<{
  headerBg?: boolean;
}> = ({ headerBg = false }) => {
  const { cartCount } = useCartStore();
  const router = useTransitionRouter();
  return (
    <header
      className={`${headerBg ? "bg-(--background) shadow-lg" : ""} laptop:fixed laptop:block top-0 z-50 hidden w-full`}
    >
      <div
        className={`mx-auto max-w-375 px-10 ${headerBg ? "py-5" : "py-25"} relative flex w-full items-center justify-between`}
      >
        {/* <img
          src="/assets/svg/shapes/ellipse.svg"
          className={`${headerBg ? "" : "hidden"} object-cover absolute w-full h-full left-40 top-0`}
          alt="ellipse"
        /> */}
        <div className="flex items-center gap-4.5">
          <div className="relative h-20 w-20">
            <Image src={"/assets/svg/els-logo.svg"} alt="ELS-Logo" fill />
          </div>
          <h2
            className={`${headerBg ? "text-(--text-black)" : "text-white"} desktop:text-[30px] text-left text-[27px] font-bold`}
          >
            <span className="block">EnergyLogic</span>
            <span className="block">Systems</span>
          </h2>
        </div>
        <nav>
          <ul
            className={`${headerBg ? "text-(--primary-color)" : "text-white"} desktop:gap-12.5 flex list-none items-center gap-5`}
          >
            {NAVBAR?.map((item, index) => {
              return (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById(item?.link);
                    console.log(section, item?.link, "section");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="desktop:text-lg gradient-primary-after relative cursor-pointer text-base font-semibold after:block after:h-1 after:w-0 after:transition-all after:duration-500 after:content-[''] hover:after:w-full"
                  key={item?.id}
                >
                  {item?.name}
                </button>
              );
            })}
            <CartButton noBg />
            <Button
              onButtonClick={() => router.push(PAGE_URLS.BRANDS)}
              className="mx-auto"
              icon="/online-store/cart"
              text="Online Store"
            />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
