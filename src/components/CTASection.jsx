import Button from "./Button";

const CTASection = ({onRegister}) => (
  <section
    id="register"
    className="text-center px-[80px] py-24 border-t border-[rgba(26,110,245,0.18)] max-lg:px-5 max-lg:py-16"
    style={{
      background:
        "linear-gradient(135deg,rgba(26,110,245,0.1) 0%,rgba(0,200,255,0.05) 100%)",
    }}
  >
    <h2 className="reveal font-exo font-black text-[clamp(2rem,4vw,3.2rem)] text-ink mb-3.5">
      Be Part of the Future
    </h2>
    <p className="reveal text-ink-muted text-base max-w-[520px] mx-auto mb-10 leading-relaxed">
      Join innovators, investors, ministers, and tech leaders from across Europe
      and beyond at North Macedonia's most ambitious technology event.
    </p>
    <div className="reveal flex gap-3.5 justify-center flex-wrap">
      <Button variant="primary" onClick={onRegister}>Register for the Summit</Button>
      <Button variant="outline">Contact the Organizers</Button>
    </div>
  </section>
);

export default CTASection;
