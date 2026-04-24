const FOOTER_LINKS = ["Privacy", "Terms", "Contact"];

const Footer = () => (
  <footer className="px-[80px] py-9 bg-bg-card2 border-t border-[rgba(26,110,245,0.18)] flex items-center justify-between flex-wrap gap-4 max-lg:px-5 max-lg:flex-col max-lg:items-start">
  

    {/* Copyright */}
    <span className="text-ink-muted text-[0.85rem]">
      © 2026 N99 Tech Park · Skopje, North Macedonia
    </span>

    {/* Links */}
    <div className="flex gap-5 flex-wrap">
      {FOOTER_LINKS.map((link) => (
        <a
          key={link}
          href="#"
          className="text-ink-muted text-[0.85rem] no-underline hover:text-brand-cyan transition-colors duration-200"
        >
          {link}
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
