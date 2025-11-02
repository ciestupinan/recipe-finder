import CallToAction from "../shared/CallToAction";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import BeyondThePlateSection from "./BeyondThePlateSection";
import OurPhilosophySection from "./OurFoodPhilosophySection";
import OurMissionSection from "./OurMissionSection";
import WhyWeExistSection from "./WhyWeExistSection";

const AboutPage = () => {
  return (
    <div className="bg-[var(--color-neutral-100)]">
      <Navbar />
      <OurMissionSection />
      <WhyWeExistSection />
      <OurPhilosophySection />
      <BeyondThePlateSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default AboutPage;
