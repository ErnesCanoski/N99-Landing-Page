const LOCATION_ITEMS = [
  { icon: "🏛️", label: "Address", value: "Bul. Kiro Gligorov 5, Skopje" },
  { icon: "📅", label: "Summit Dates", value: "8th — 11th May 2026" },
  { icon: "🎯", label: "Opening Event", value: "May 8th, 2026 at 6:30 PM" },
  // { icon: "🌐", label: "Website", value: "n99technologies.com" },
];

const LocationItem = ({ icon, label, value }) => (
  <div className="reveal flex gap-3.5 items-start bg-bg-card border border-[rgba(26,110,245,0.18)] rounded-[10px] p-[18px] hover:border-[rgba(0,200,255,0.35)] transition-colors duration-200">
    <span className="text-[1.6rem] shrink-0 mt-0.5">{icon}</span>
    <div>
      <p className="text-[0.68rem] text-ink-muted tracking-wide uppercase mb-[3px]">
        {label}
      </p>
      <p className="font-exo font-bold text-ink">{value}</p>
    </div>
  </div>
);

const LocationSection = () => (
  <section id="location" className="px-[80px] py-24 bg-bg max-lg:px-5 max-lg:py-16">
    <div className="grid grid-cols-2 gap-[72px] items-center max-lg:grid-cols-1 max-lg:gap-9">
      {/* Map */}
      

      {/* Info */}
      <div>
        <p className="reveal text-[0.7rem] font-bold tracking-[3px] uppercase text-brand-cyan mb-3.5">
          Venue
        </p>
        <div className="reveal w-11 h-[3px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-sm mb-[18px]" />
        <h2 className="reveal font-exo font-extrabold text-[clamp(1.8rem,3.5vw,2.8rem)] leading-tight text-ink mb-3.5">
          N99 Techno
          <br />
          Park Skopje
        </h2>
        <p className="reveal text-ink-muted text-base max-w-[560px] leading-relaxed mb-7">
          A 14,500 m² innovation campus home to AI, robotics, cybersecurity,
          and digital forensics labs — the ideal stage for Europe's boldest tech
          summit.
        </p>

        <div className="flex flex-col gap-4">
          {LOCATION_ITEMS.map((item) => (
            <LocationItem key={item.label} {...item} />
          ))}
        </div>
      </div>
      <div className="reveal bg-bg-card border border-[rgba(26,110,245,0.18)] rounded-[14px] overflow-hidden aspect-[4/3]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.339151501147!2d21.474357899999998!3d41.992996399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13541587e687e96d%3A0x1371a19221c75020!2sKiro%20Gligorov%205%2C%20Skopje%201000!5e0!3m2!1sen!2smk!4v1776863461731!5m2!1sen!2smk"
          className="w-full h-full border-0 block"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="N99 Tech Park Location"
        />
      </div>
    </div>
  </section>
);

export default LocationSection;
