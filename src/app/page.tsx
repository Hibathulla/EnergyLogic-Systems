"use client";
import { useEffect, useRef, useState } from "react";
import Ellipse from "../components/common/Ellipse";
import Header from "../components/common/Header";
import ContactUs from "../components/contactUs";
import Footer from "../components/footer";
import GeControls from "../components/geControls";
import Hero from "../components/hero/Hero";
import IndustrialControls from "../components/industrialControls";
import OnlineStore from "../components/onlineStore";
import OurServices from "../components/ourServices";
import OurStory from "../components/ourStory";
import SectionLayout from "../layouts/sectionLayout";
import Sidebar from "../components/common/Sidebar";

type SectionRefs = {
  story: React.RefObject<HTMLDivElement | null>;
  service: React.RefObject<HTMLDivElement | null>;
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const geControlRef = useRef<HTMLDivElement>(null);
  const industrialControlRef = useRef<HTMLDivElement>(null);
  const onlineStoreRef = useRef<HTMLDivElement>(null);

  const sectionRefs: SectionRefs = {
    story: storyRef,
    service: serviceRef,
  };

  const [headerBg, setHeaderBg] = useState(false);

  useEffect(() => {
    const observerElem = heroRef?.current;

    if (!observerElem) return;
    const observerCbFunction = (entries: IntersectionObserverEntry[]) => {
      if (entries?.[0]?.isIntersecting) {
        setHeaderBg(false);
      } else {
        setHeaderBg(true);
      }
    };

    const observer = new IntersectionObserver(observerCbFunction, {
      root: null,
      threshold: 0.8,
      rootMargin: "0px",
    });

    observer.observe(observerElem);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <Header headerBg={headerBg} />
      <Sidebar headerBg={headerBg} />
      <Hero ref={heroRef} />
      <SectionLayout className="space-y-24">
        <Ellipse />
        <OurStory ref={storyRef} />
        <OurServices />
      </SectionLayout>
      <GeControls />
      <IndustrialControls />
      <OnlineStore />
      <ContactUs />
      <Footer />
      {/* <button
        onClick={() => storyRef.current?.scrollIntoView({ behavior: "smooth" })}
      >
        Test Scroll
      </button> */}
    </div>
  );
}
