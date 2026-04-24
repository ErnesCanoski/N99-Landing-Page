import { useState } from "react";

const PanelCard = ({ panel }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`reveal relative bg-bg-card rounded-xl p-7 overflow-hidden transition-all duration-300 ${
        hovered
          ? "border-[rgba(0,200,255,0.35)] -translate-y-1 shadow-panel"
          : "border-[rgba(26,110,245,0.18)]"
      } border`}
    >
      {/* Top gradient line (visible on hover) */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />

      <p className="text-[0.7rem] font-bold tracking-[3px] text-brand-cyan uppercase mb-2.5">
        Panel {panel.id}
      </p>
      <h3 className="font-exo font-extrabold text-[1.5rem] text-ink leading-tight mb-2">
        {panel.title}
      </h3>
      <p className="text-[1.4rem] text-ink-muted mb-5 leading-snug">
        Moderator: {panel.moderator}
      </p>

      <ul className="flex flex-col gap-2.5">
        {panel.speakers.map((speaker) => (
          <li
            key={speaker}
            className="flex items-start gap-2.5 text-[1.05rem] text-ink font-semibold leading-snug"
          >
            <span className="w-[6px] h-[6px] rounded-full bg-brand-cyan shrink-0 mt-[7px]" />
            {speaker}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PanelCard;