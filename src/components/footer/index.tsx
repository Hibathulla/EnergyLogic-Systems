import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-374 px-10 tablet:px-20 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-[1fr_max-content_max-content_1fr] py-16 tablet:py-25 gap-x-44 gap-y-20 tablet:gap-y-40 desktop:gap-y-7">
      <div className="grid grid-rows-[repeat(2,min-content)] grid-cols-[max-content_1fr] gap-3 tablet:gap-4.5">
        <div className="relative w-14 h-14 tablet:w-20 tablet:h-20">
          <Image src={"/assets/svg/els-logo.svg"} alt="ELS-Logo" fill />
        </div>
        <h2 className="font-bold text-[22px] tablet:text-[30px] text-(--primary-color)">
          <span className="block">EnergyLogic</span>
          <span className="block">Systems</span>
        </h2>
        <p className="text-sm tablet:text-base col-span-2 text-(--secondary-color)">
          Powering Industrial Reliability
        </p>
      </div>
      <div>
        <h4 className="text-[23px] text-(--primary-color)">Explore</h4>
        <ul className="mt-9 space-y-3.75">
          <Link
            className="text-[19px] text-[#02081b]/60 block decoration-0"
            href="#services"
          >
            Services
          </Link>
          <Link
            className="text-[19px] text-[#02081b]/60 block decoration-0"
            href="#services"
          >
            FAQ&apos;s
          </Link>
          <Link
            className="text-[19px] text-[#02081b]/60 block decoration-0"
            href="#services"
          >
            GE Controls
          </Link>
          <Link
            className="text-[19px] text-[#02081b]/60 block decoration-0"
            href="#services"
          >
            Industrial Controls
          </Link>
          <Link
            className="text-[19px] text-[#02081b]/60 block decoration-0"
            href="#services"
          >
            Online Store
          </Link>
        </ul>
      </div>
      <div>
        <h4 className="text-[23px] text-(--primary-color)">Menu</h4>
        <ul className="mt-9 space-y-3.75">
          <Link
            className="text-[19px] text-[#02081b]/60 block decoration-0"
            href="#services"
          >
            Home
          </Link>
          <Link
            className="text-[19px] text-[#02081b]/60 block decoration-0"
            href="#services"
          >
            Our Story
          </Link>
          <Link
            className="text-[19px] text-[#02081b]/60 block decoration-0"
            href="#services"
          >
            Contact
          </Link>
        </ul>
      </div>
      <div>
        <h4 className="text-[23px] text-(--primary-color)">OFFICE LOCATION</h4>
        <p className="text-[19px] mt-9 text-black/60 block decoration-0">
          FDRK1507, Compass Building, Al Shohada Rd., AL Hamra Industrial
          Zone-FZ, Ras Al Khaimah, United Arab Emirates
        </p>
      </div>
      <p className="text-(--text-black) text-[17px] tablet:col-span-2 desktop:col-span-4 justify-self-center">
        © By Energy Logics Systems. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
