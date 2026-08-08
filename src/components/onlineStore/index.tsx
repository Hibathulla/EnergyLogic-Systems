import { PAGE_URLS } from "@/constants/PAGE_URLS";
import { useTransitionRouter } from "@/utils/useTransitionRouter";
import SectionLayout from "../../layouts/sectionLayout";
import Button from "../common/Button";

const OnlineStore = () => {
  const router = useTransitionRouter();
  return (
    <section
      id="online-store"
      className="h-171 scroll-mt-36 bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.5)),url('/assets/images/online-store/online-store-bg.png')] bg-cover bg-center bg-no-repeat"
    >
      <SectionLayout className="grid h-full grid-rows-[repeat(3,min-content)] content-end text-center">
        <h1 className="laptop:text-[64px] text-[55px] font-extrabold text-white">
          Online Store
        </h1>
        <p className="laptop:text-[16px] mx-auto w-[75%] text-[14px] leading-[130%] font-normal text-white">
          ELS supports Users of all types of Industrial Controls to source
          running parts as well as parts that have been declared Obsolete by the
          OEMs. ELS carries a reasonable stock of effective parts as required by
          Users and have the capability of sourcing parts on behalf of Users
          through their worldwide network of prominent stockists and suppliers.
          All parts supplied by WOC under ICS carries a standard warranty of 12
          months which will be fully tested in live panels or using General Test
          Jigs / Benches
        </p>
        <Button
          onButtonClick={() => router.push(PAGE_URLS.BRANDS)}
          className="mx-auto mt-7.5"
          icon="/online-store/cart"
          text="Online Store"
        />
      </SectionLayout>
    </section>
  );
};

export default OnlineStore;
