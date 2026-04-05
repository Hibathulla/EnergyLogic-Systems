import Ellipse from "../components/common/Ellipse";
import ContactUs from "../components/contactUs";
import Footer from "../components/footer";
import GeControls from "../components/geControls";
import Hero from "../components/hero/Hero";
import IndustrialControls from "../components/industrialControls";
import OnlineStore from "../components/onlineStore";
import OurServices from "../components/ourServices";
import OurStory from "../components/ourStory";
import SectionLayout from "../layouts/sectionLayout";

export default function Home() {
  return (
    <div>
      <Hero />
      <SectionLayout className="space-y-24">
        <Ellipse />
        <OurStory />
        <OurServices />
      </SectionLayout>
      <GeControls />
      <IndustrialControls />
      <OnlineStore />
      <ContactUs />
      <Footer />
    </div>
  );
}
