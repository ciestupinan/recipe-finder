const Footer = () => {
  const socials = [
    { name: "Instagram", img: "src/assets/images/icon-instagram.svg" },
    { name: "TikTok", img: "src/assets/images/icon-tiktok.svg" },
  ];

  return (
    <div className="bg-[var(--color-neutral-100)] w-full flex justify-center">
      <div className="flex pt-[var(--spacing-500)] pb-[var(--spacing-500)] w-[1192px] justify-end">
        <div className="flex gap-[var(--spacing-300)]">
        {socials.map((social) => (
          <img key={social.name} src={social.img} alt={social.name}/>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Footer;
