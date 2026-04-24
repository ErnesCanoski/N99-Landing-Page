import alsar from "../assets/alsar.jpeg";


const TAGS = ["100% Made in Macedonia", "Physical AI", "Exoskeleton Tech", "Live Demo"];

const HighlightSection = () => (
  <section
    id="highlight"
    className="relative px-[80px] py-24 overflow-hidden max-lg:px-5 max-lg:py-16"
    style={{ background: "linear-gradient(140deg,#07101e 0%,#060c18 100%)" }}
  >
    {/* Glow */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 65% 65% at 85% 50%,rgba(26,110,245,0.14) 0%,transparent 70%)",
      }}
    />

    <div className="relative z-10 grid grid-cols-2 gap-[72px] items-center max-lg:grid-cols-1 max-lg:gap-9">
      {/* Text */}
      <div>
        <div className="reveal inline-flex items-center gap-2 bg-[rgba(255,200,0,0.1)] border border-[rgba(255,200,0,0.28)] rounded-full px-4 py-[5px] mb-[18px] text-[0.72rem] font-bold tracking-[2px] text-[#ffc800] uppercase">
          ⭐ Summit Highlight
        </div>

        <h2 className="reveal font-exo font-black text-[clamp(2rem,4vw,3.8rem)] leading-[0.95] mb-5 gradient-text-white">
          ALSHAR 2.0
          <br />
          Live Demo
        </h2>

        <p className="reveal text-ink-muted text-base leading-relaxed mb-7">
          Experience a live demonstration of ALSHAR 2.0 — a cutting-edge
          robotic exoskeleton built entirely in North Macedonia, showcasing the
          nation's capacity to create world-class deep technology.
        </p>

        <div className="reveal flex flex-wrap gap-2">
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="bg-[rgba(26,110,245,0.18)] border border-[rgba(26,110,245,0.18)] rounded px-3 py-1 text-[0.8rem] font-bold text-brand-cyan"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Visual card */}
      <div className="reveal  rounded-[14px] px-9 py-12 flex flex-col items-center gap-4 text-center shadow">

        <img
          src={alsar}
          alt="ALSHAR 2.0"
          className="w-100 h-100 object-contain rounded-[10px] drop-shadow-[0_0_20px_rgba(26,110,245,0.6)]"
        />
      </div>
    </div>
  </section>
);

export default HighlightSection;
