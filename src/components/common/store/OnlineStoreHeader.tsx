"use client";
import { STORE_NAVBAR } from "@/constants/NAVBAR";
import { useCartStore } from "@/store/cartStore";
import { useTransitionRouter } from "@/utils/useTransitionRouter";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Button from "../Button";
import { PAGE_URLS } from "@/constants/PAGE_URLS";
import CartButton from "../CartButton";

const OnlineStoreHeader = () => {
  const router = useTransitionRouter();
  const { cartCount } = useCartStore();

  return (
    <header
      className={`bg-app-background laptop:fixed laptop:flex top-0 z-50 hidden w-full items-center justify-between p-10 drop-shadow-xl`}
    >
      <button
        onClick={() => router.push(PAGE_URLS.HOME)}
        className="flex cursor-pointer items-center gap-4.5"
      >
        <div className="relative h-20 w-20">
          <Image src={"/assets/svg/els-logo.svg"} alt="ELS-Logo" fill />
        </div>
        <h2
          className={`desktop:text-[30px] space-x-1.5 text-left text-[20px] font-bold text-(--text-black)`}
        >
          <span className="block">EnergyLogic</span>
          <span className="block">Systems</span>
        </h2>
      </button>
      <nav>
        <ul
          className={`desktop:gap-12.5 flex list-none items-center gap-5 text-(--primary-color)`}
        >
          {STORE_NAVBAR?.map((item) => {
            return (
              <li
                onClick={(e) => {
                  e.preventDefault();
                  router.push(item?.link);
                }}
                className="desktop:text-lg gradient-primary-after relative cursor-pointer text-base font-semibold after:block after:h-1 after:w-0 after:transition-all after:duration-500 after:content-[''] hover:after:w-full"
                key={item?.id}
              >
                {item?.name}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex items-center gap-6">
        <CartButton />
        <Button
          onButtonClick={() => router.push(PAGE_URLS.CONTACT_US)}
          text={"Contact Us"}
          icon={"whatsapp"}
        />
      </div>
    </header>
  );
};

export default OnlineStoreHeader;
