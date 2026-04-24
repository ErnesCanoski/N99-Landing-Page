import { useCountdown } from "../hooks/useCountdown";
import CountdownUnit from "./CountdownUnit";
import Button from "./Button";
import blue from "../assets/blue.mp4";


const SUMMIT_DATE = new Date("2026-05-08T18:30:00");

const META_ITEMS = [
  { label: "Date", value: "8th – 11th May 2026" },
  { label: "Venue", value: "N99 Techno Park, Skopje" },
  { label: "Format", value: "4-Day Summit + Live Demos" },
];

const HeroSection = ({ onRegister }) => {
  const { days, hours, mins, secs } = useCountdown(SUMMIT_DATE);

  const scrollToContent = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="relative flex flex-col justify-center items-center text-center overflow-hidden"
      style={{
        height: "100vh",
        paddingTop: "68px",
        borderBottom: "1px solid rgba(26,110,245,0.18)",
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        src={blue}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[rgba(6,12,24,0.72)] z-[1]" />

      {/* RADIAL GLOW */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%,rgba(26,110,245,0.18) 0%,transparent 70%), radial-gradient(ellipse 40% 40% at 80% 80%,rgba(0,200,255,0.08) 0%,transparent 60%)",
        }}
      />

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 z-[2] grid-bg pointer-events-none" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-[860px] px-6 flex flex-col items-center justify-between h-full py-6">

        {/* BADGE */}
        <div className="animate-fadeUp inline-flex items-center gap-2 bg-[rgba(26,110,245,0.14)] border border-[rgba(0,200,255,0.35)] rounded-full px-4 py-1 text-[0.7rem] font-bold tracking-[2.5px] text-brand-cyan uppercase">
          <span className="w-[6px] h-[6px] rounded-full bg-brand-cyan shadow-[0_0_8px_#00c8ff] animate-pulse2 shrink-0" />
          Skopje '26 · AI Tech Summit
        </div>

        {/* TITLE */}
        <div className="flex flex-col items-center gap-3">
          <h1 className="animate-fadeUp-1 font-exo font-black tracking-tight leading-none text-[clamp(1.9rem,5.5vw,4.2rem)]">
            <span className= "block text-ink mt-1">
              N99 AI Deep Tech Summit Skopje
            </span>
            <span className="block gradient-text">
              Create at Home. <br />
              Sell Globally.
            </span>
          </h1>

          <p className="animate-fadeUp-2 text-ink-muted font-medium text-[clamp(0.85rem,1.8vw,1rem)] max-w-[600px] leading-relaxed">
            The premier deep-technology conference uniting innovators, investors,
            and industry leaders from across Europe and beyond.
          </p>
        </div>

        {/* COUNTDOWN */}
        <div className="flex flex-col items-center gap-2">
          <p className="animate-fadeUp-3 text-[0.65rem] tracking-[3px] uppercase text-ink-muted font-bold">
            Summit Starts In
          </p>

          <div className="animate-fadeUp-4 flex gap-2.5 flex-wrap justify-center">
            <CountdownUnit num={days} label="Days" />
            <CountdownUnit num={hours} label="Hours" />
            <CountdownUnit num={mins} label="Mins" />
            <CountdownUnit num={secs} label="Secs" />
          </div>
        </div>

        {/* META */}
        <div className="animate-fadeUp-5 flex gap-6 flex-wrap justify-center">
          {META_ITEMS.map(({ label, value }, i) => (
            <div key={label} className="flex items-center gap-6">
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-[0.62rem] text-ink-muted tracking-[2px] uppercase">
                  {label}
                </span>
                <span className="font-exo font-bold text-ink text-sm">
                  {value}
                </span>
              </div>

              {i < META_ITEMS.length - 1 && (
                <div className="w-px h-7 bg-[rgba(26,110,245,0.18)] hidden sm:block" />
              )}
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col items-center gap-4">
          <div className="animate-fadeUp-6 flex gap-5 flex-wrap justify-center">
            <Button variant="primary" onClick={onRegister}>
              Register Now
            </Button>
            <Button variant="outline" onClick={scrollToContent}>
              Learn More ↓
            </Button>
          </div>

          <div className="flex flex-col items-center gap-1 text-ink-muted text-[0.6rem] tracking-[2px] uppercase">
            <div
              className="w-px h-6 animate-scrollLine"
              style={{
                background: "linear-gradient(#00c8ff,transparent)",
              }}
            />
            Scroll
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;