const CountdownUnit = ({ num, label }) => (
  <div className="relative flex flex-col items-center bg-bg-card border border-[rgba(26,110,245,0.18)] rounded-lg px-5 pt-4 pb-3 min-w-[80px] overflow-hidden hover:border-[rgba(0,200,255,0.35)] transition-colors duration-300">
    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan" />
    <span className="font-exo text-[clamp(1.8rem,4vw,2.6rem)] font-black text-brand-cyan leading-none tabular-nums">
      {num}
    </span>
    <span className="text-[0.6rem] tracking-[2px] uppercase text-ink-muted mt-1">
      {label}
    </span>
  </div>
);

export default CountdownUnit;