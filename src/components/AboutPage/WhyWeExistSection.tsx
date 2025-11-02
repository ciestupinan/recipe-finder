const WhyWeExistSection = () => {
  return (
    <div className="py-[var(--spacing-1200)]  flex justify-center">
      <div className="flex justify-center w-[1192px] gap-[var(--spacing-500)]">
        <div>
          <h2 className="w-[372px]">Why we exist</h2>
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
              <h4>Cut through the noise.</h4>
              <h5>
                The internet is bursting with recipes, yet most busy cooks still
                default to take-away or packaged foods. We curate a tight
                collection of fool-proof dishes so you can skip the scrolling
                and start cooking.
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
              <h4>Empower home kitchens.</h4>
              <h5>
                When you control what goes into your meals, you control how you
                feel. Every recipe is built around unrefined ingredients and
                ready in about half an hour of active prep.
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
              <h4>Make healthy look good.</h4>
              <h5>
                High-resolution imagery shows you exactly what success looks
                like—because we eat with our eyes first, and confidence matters.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWeExistSection;
