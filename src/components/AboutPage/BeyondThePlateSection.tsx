const BeyondThePlateSection = () => {
  return (
    <div className="flex justify-center py-[var(--spacing-1200)]">
    <div className="w-[1192px] flex">
      <div className="flex flex-col" >
        <h2>Beyond the plate</h2>
        <h5>
          We believe food is a catalyst for community and well-being. By sharing
          approachable recipes, we hope to:
        </h5>
        <ul className="list-disc">
          <li>
            <h5>Encourage family dinners and social cooking.</h5>
          </li>
          <li>
            <h5>Reduce reliance on single-use packaging and delivery waste.</h5>
          </li>
          <li>
            <h5>
              Spark curiosity about seasonal produce and local agriculture.
            </h5>
          </li>
        </ul>
      </div>
      <div className="flex">
        <img className="rounded-xl"
          src="src/assets/images/image-about-beyond-the-plate-large.webp"
          alt="family cooking"
        />
      </div>
    </div>
    </div>
  );
};

export default BeyondThePlateSection;
