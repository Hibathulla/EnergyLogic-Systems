import Ellipse from "../components/common/ellipse/Ellipse";
import Hero from "../components/hero/Hero";
import OurServices from "../components/ourServices";
import OurStory from "../components/ourStory";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="relative max-w-375 mx-auto space-y-24 py-25 px-10">
        <Ellipse />
        <OurStory />
        <OurServices />
      </div>
    </div>
  );
}
