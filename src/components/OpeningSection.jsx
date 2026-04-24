import video from "../assets/video.mp4";

const DetailCard = ({ icon, label, value }) => (
  <div className="flex items-center gap-3.5 mt-5 bg-[rgba(26,110,245,0.08)] border border-[rgba(26,110,245,0.18)] rounded-lg px-[18px] py-3.5 hover:border-[rgba(0,200,255,0.35)] transition-colors duration-200">
    <span className="text-[1.6rem] shrink-0">{icon}</span>
    <div>
      <p className="text-[0.7rem] text-ink-muted tracking-wide uppercase mb-[3px]">
        {label}
      </p>
      <p className="font-exo font-bold text-ink">{value}</p>
    </div>
  </div>
);

const OpeningVisual = () => (
  <div className="flex items-center justify-center">

    {/* Video */}
    <video
      src={video}
      autoPlay
      muted
      loop
      playsInline
      className="h-[560px] w-[416px] object-cover rounded-[14px]"
    />

  </div>
);

const OpeningSection = () => (
  <section id="about" className="px-[80px] py-24 bg-bg max-lg:px-5 max-lg:py-16">
    <div className="grid grid-cols-2 gap-[72px] items-center max-lg:grid-cols-1 max-lg:gap-9">

      {/* Text */}
      <div>
        <p className="text-[0.7rem] font-bold tracking-[3px] uppercase text-brand-cyan mb-3.5">
          Kick-off Event
        </p>

        <div className="w-11 h-[3px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-sm mb-[18px]" />

        <h2 className="font-exo font-extrabold text-[clamp(1.8rem,3.5vw,2.8rem)] leading-tight text-ink mb-3.5">
          Opening Ceremony
          <br />
          of the First Deep
          <br />
          Tech Park in
          <br />
          North Macedonia
        </h2>

        <p className="text-ink-muted text-base max-w-[560px] leading-relaxed mb-0">
          A landmark moment for North Macedonia's innovation ecosystem — the
          official inauguration of the country's first Deep Tech Park, a 14,500
          m² campus dedicated to AI, robotics, cybersecurity, and digital
          forensics.
        </p>

        <DetailCard
          icon="📅"
          label="Date & Time"
          value="May 8th, 2026 · 6:30 PM"
        />

        <DetailCard
          icon="📍"
          label="Location"
          value="N99 Tech Park · Bul. Kiro Gligorov 5, Skopje"
        />
      </div>

      {/* Video Visual */}
      <OpeningVisual />
    </div>
  </section>
);

export default OpeningSection;