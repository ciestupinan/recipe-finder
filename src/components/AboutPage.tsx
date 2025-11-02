import CallToAction from "./shared/CallToAction";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

const AboutPage = () => {
  return (
    <div className="bg-[var(--color-neutral-100)]">
      <Navbar />
      <div className="mt-[var(--spacing-1000)] mb-[var(--spacing-1200)] flex justify-center gap-[var(--spacing-800)]">
        <div className="flex flex-col w-[510px] gap-[var(--spacing-300)] justify-center">
          <h5 className="font-bold">Our mission</h5>
          <h2>Help more people cook nourishing meals, more often.</h2>
          <h5>
            Healthy Recipe Finder was created to prove that healthy eating can
            be convenient, affordable, and genuinely delicious.
          </h5>
          <h5>
            We showcase quick, whole-food dishes that anyone can master—no fancy
            equipment, no ultra-processed shortcuts—just honest ingredients and
            straightforward steps.
          </h5>
        </div>
        <div className="flex w-[600px]">
          <img
            className="rounded-xl"
            src="src/assets/images/image-about-our-mission-large.webp"
            alt="Woman cooking"
          />
        </div>
      </div>
      <div className="my-[var(--spacing-1200)] flex">
        <div className="flex">
          <h2>Why we exist</h2>
          <div></div>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default AboutPage;
