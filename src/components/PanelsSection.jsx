import PanelCard from "./PanelCard";
import panels from "../data/panels";

const PanelsSection = () => (
  <section id="panels" className="px-[80px] py-24 bg-bg-card2 max-lg:px-5 max-lg:py-16">
    {/* Header */}
    <div className="text-center max-w-[660px] mx-auto mb-14">
      <p className="text-[0.7rem] font-bold tracking-[3px] uppercase text-brand-cyan mb-3.5">
        Summit Agenda
      </p>
      <div className="w-11 h-[3px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-sm mx-auto mb-4" />
      <h2 className="font-exo font-extrabold text-[clamp(1.8rem,3.5vw,2.8rem)] text-ink mb-3.5">
        Five Expert Panels
      </h2>
      <p className="text-ink-muted text-base leading-relaxed">
        World-class speakers and industry leaders tackling the most critical
        technology themes of our era.
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-3 gap-5 max-[1024px]:grid-cols-2 max-[680px]:grid-cols-1">
      {panels.map((panel) => (
        <PanelCard key={panel.id} panel={panel} />
      ))}
    </div>
  </section>
);

export default PanelsSection;
