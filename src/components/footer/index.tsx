"use client";
import { FOOTER_EXPLORE, FOOTER_MENU } from "@/constants/FOOTER";
import { useTransitionRouter } from "@/utils/useTransitionRouter";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const router = useTransitionRouter();
  return (
    <footer className="tablet:px-20 tablet:grid-cols-2 desktop:grid-cols-[1fr_max-content_max-content_1fr] tablet:py-25 tablet:gap-y-40 desktop:gap-y-7 mx-auto grid max-w-374 grid-cols-1 gap-x-44 gap-y-20 px-10 py-16">
      <div className="tablet:gap-4.5 grid grid-cols-[max-content_1fr] grid-rows-[repeat(2,min-content)] gap-3">
        <div className="tablet:w-20 tablet:h-20 relative h-14 w-14">
          <Image src={"/assets/svg/els-logo.svg"} alt="ELS-Logo" fill />
        </div>
        <h2 className="tablet:text-[30px] text-[22px] font-bold text-(--primary-color)">
          <span className="block">EnergyLogic</span>
          <span className="block">Systems</span>
        </h2>
        <p className="tablet:text-base col-span-2 text-sm text-(--secondary-color)">
          Powering Industrial Reliability
        </p>
      </div>
      <div>
        <h4 className="text-[23px] text-(--primary-color)">Explore</h4>
        <ul className="mt-9 space-y-3.75">
          {FOOTER_EXPLORE?.map((item) => {
            return (
              <Link
                className="block text-[19px] text-[#02081b]/60 decoration-0"
                href={item?.link}
                key={item?.id}
              >
                {item?.name}
              </Link>
            );
          })}
        </ul>
      </div>
      <div>
        <h4 className="text-[23px] text-(--primary-color)">Menu</h4>
        <ul className="mt-9 space-y-3.75">
          {FOOTER_MENU?.map((item) => {
            return (
              <li
                onClick={() => router.push(item?.link)}
                className="block cursor-pointer text-[19px] text-[#02081b]/60 decoration-0"
                key={item?.id}
              >
                {item?.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h4 className="text-[23px] text-(--primary-color)">OFFICE LOCATION</h4>
        <p className="mt-9 block text-[19px] text-black/60 decoration-0">
          FDRK1507, Compass Building, Al Shohada Rd., AL Hamra Industrial
          Zone-FZ, Ras Al Khaimah, United Arab Emirates
        </p>
      </div>
      <p className="tablet:col-span-2 desktop:col-span-4 justify-self-center text-[17px] text-(--text-black)">
        © By Energy Logics Systems. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
