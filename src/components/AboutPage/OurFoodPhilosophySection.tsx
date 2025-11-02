const OurPhilosophySection = () => {
  return (
    <div className="py-[var(--spacing-1200)] flex justify-center">
      <div className="flex justify-center w-[1192px] gap-[var(--spacing-500)]">
        <div>
          <h2 className="w-[372px]">Our food philosophy</h2>
        </div>
        <div className="flex flex-col gap-[var(--spacing-600)]">
          <div className="flex">
            <div className="flex items-start pr-[var(--spacing-250)]">
              <img
                className="w-[32px] pt-1"
                src="src/assets/images/icon-bullet-point.svg"
                alt="stylized bullet point"
              />
            </div>
            <div className="flex flex-col gap-[var(--spacing-150)]">
              <h4>Whole ingredients first.</h4>
              <h5>
                Fresh produce, grains, legumes, herbs, and quality fats form the
                backbone of every recipe.
              </h5>
            </div>
          </div>
          <div className="flex">
            <div className="flex items-start pr-[var(--spacing-250)]">
              <img
                className="w-[32px] pt-1"
                src="src/assets/images/icon-bullet-point.svg"
                alt="stylized bullet point"
              />
            </div>
            <div className="flex flex-col gap-[var(--spacing-150)]">
              <h4>Flavor without compromise.</h4>
              <h5>
                Spices, citrus, and natural sweetness replace excess salt,
                sugar, and additives.
              </h5>
            </div>
          </div>
          <div className="flex">
            <div className="flex items-start pr-[var(--spacing-250)]">
              <img
                className="w-[32px] pt-1"
                src="src/assets/images/icon-bullet-point.svg"
                alt="stylized bullet point"
              />
            </div>
            <div className="flex flex-col gap-[var(--spacing-150)]">
              <h4>Respect for time.</h4>
              <h5>
                Weeknight meals should slot into real schedules; weekend cooking
                can be leisurely but never wasteful.{" "}
              </h5>
            </div>
          </div>
          <div className="flex">
            <div className="flex items-start pr-[var(--spacing-250)]">
              <img
                className="w-[32px] pt-1"
                src="src/assets/images/icon-bullet-point.svg"
                alt="stylized bullet point"
              />
            </div>
            <div className="flex flex-col gap-[var(--spacing-150)]">
              <h4>Sustainable choices.</h4>
              <h5>
                Short ingredient lists cut down on food waste and carbon
                footprint, while plant-forward dishes keep things
                planet-friendly.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPhilosophySection;
