import Hero from "../components/hero/Hero";
import OurStory from "../components/ourStory/OurStory";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="xl:max-w-375 px-20 mx-auto py-25 space-y-37.5">
        <OurStory />
      </div>
    </div>
  );
}
