const Button = ({ children, variant = "primary", className = "", onClick }) => {
  const base =
    "font-raj font-bold tracking-wider text-base px-8 py-3 rounded cursor-pointer transition-all duration-200";

  const variants = {
    primary:
      "bg-brand-blue text-white border-0 hover:bg-brand-cyan hover:shadow-glow",
    outline:
      "bg-transparent text-ink border border-[rgba(0,200,255,0.35)] hover:border-brand-cyan hover:text-brand-cyan hover:bg-[rgba(0,200,255,0.05)]",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
