import { useState } from "react";
import emailjs from "emailjs-com";

const INPUT_BASE =
  "w-full bg-[rgba(26,110,245,0.06)] border border-[rgba(26,110,245,0.25)] rounded-lg px-4 py-3.5 text-ink font-raj text-base placeholder:text-ink-muted focus:outline-none focus:border-brand-cyan focus:bg-[rgba(0,200,255,0.05)] transition-all duration-200";

const Field = ({ label, children }) => (
  <div className="flex flex-col gap-2">
    <label className="text-[0.72rem] font-bold tracking-[2px] uppercase text-ink-muted">
      {label}
    </label>
    {children}
  </div>
);

const RegisterModal = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const valid =
    form.firstName.trim() &&
    form.lastName.trim() &&
    form.email.trim();

  const handleSubmit = async () => {
  if (!valid) return;

  setLoading(true);

  try {
    // 📩 Send to YOU (admin)
    await emailjs.send(
      "service_mp245ou",
      "template_nspwp79",
      {
        first_name: form.firstName,
        last_name: form.lastName,
        user_email: form.email,
      },
      "YtTI0_WVHrK8AxWPc"
    );

    // 📩 Send to USER
    await emailjs.send(
      "service_mp245ou",
      "template_caorbni",
      {
        first_name: form.firstName,
        user_email: form.email,
      },
      "YtTI0_WVHrK8AxWPc"
    );

    setSubmitted(true);
  } catch (error) {
    console.error("EmailJS Error:", error);
    alert("Something went wrong. Check console.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div
      className="fixed inset-0 z-[500] flex items-center justify-center p-4"
      style={{ background: "rgba(4,7,14,0.85)", backdropFilter: "blur(12px)" }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[480px] bg-bg-card border border-[rgba(26,110,245,0.3)] rounded-2xl shadow-[0_0_80px_rgba(26,110,245,0.2)]"
      >
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-t-2xl" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.06)] text-ink-muted hover:text-ink hover:bg-[rgba(255,255,255,0.12)] transition-all duration-200 text-lg font-bold"
        >
          ✕
        </button>

        <div className="p-8 pt-10">
          {submitted ? (
            <div className="flex flex-col items-center text-center gap-6 py-6">
              <div className="w-20 h-20 rounded-full bg-[rgba(0,200,255,0.1)] border border-[rgba(0,200,255,0.35)] flex items-center justify-center text-4xl animate-bob">
                ✅
              </div>
              <div>
                <h2 className="font-exo font-black text-3xl text-ink mb-3">
                  You're Registered!
                </h2>
                <p className="text-ink-muted leading-relaxed">
                  Welcome,{" "}
                  <span className="text-brand-cyan font-semibold">
                    {form.firstName} {form.lastName}
                  </span>
                  !
                  <br />
                  A confirmation has been sent to{" "}
                  <span className="text-brand-cyan">{form.email}</span>.
                  <br />
                  <span className="text-ink-muted text-sm">
                    See you in Skopje on May 8th, 2026 🎉
                  </span>
                </p>
              </div>
              <button
                onClick={onClose}
                className="bg-brand-blue hover:bg-brand-cyan text-white font-raj font-bold text-base px-10 py-3 rounded-lg transition-colors duration-200 hover:shadow-glow"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8 text-center">
                <p className="text-[0.7rem] font-bold tracking-[3px] uppercase text-brand-cyan mb-1.5">
                  N99 AI Deep Tech Summit · Skopje 2026
                </p>
                <h2 className="font-exo font-black text-[2rem] text-ink leading-tight">
                  Register For Free
                </h2>
                <p className="text-ink-muted text-sm mt-1.5">
                  Opening night · May 8th, 2026 · 6:30 PM · Free admission
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <Field label="First Name">
                    <input
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Jane"
                      className={INPUT_BASE}
                    />
                  </Field>
                  <Field label="Last Name">
                    <input
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Smith"
                      className={INPUT_BASE}
                    />
                  </Field>
                </div>

                <Field label="Email Address">
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className={INPUT_BASE}
                  />
                </Field>
              </div>

              <button
                onClick={handleSubmit}
                disabled={!valid || loading}
                className="mt-8 w-full font-raj font-bold text-base py-3.5 rounded-lg bg-brand-blue text-white hover:bg-brand-cyan hover:shadow-glow transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Confirm Registration →"}
              </button>

              <p className="text-center text-ink-muted text-xs mt-4">
                Spots are limited
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;