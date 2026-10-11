import { FormEvent, useState } from "react";
import { whatsappLink } from "@/config/site";
import { RunningHead, WhatsAppIcon } from "./shared";

const fieldClass =
  "w-full border-0 border-b border-charcoal/35 bg-transparent px-0 py-3 font-body text-[15px] text-charcoal placeholder:text-charcoal/50 focus:border-charcoal focus:outline-none focus:ring-0";

const AuditForm = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      "Hi Websphrex, I'd like a free audit for my studio.",
      `Name: ${data.get("name")}`,
      `Studio Instagram: ${data.get("instagram")}`,
      data.get("website") ? `Website: ${data.get("website")}` : "",
      `City: ${data.get("city")}`,
      `Typical project size: ${data.get("budget")}`,
      `My number: +91 ${data.get("phone")}`,
    ].filter(Boolean);
    // The audit request is delivered as a pre-filled WhatsApp message, so no form backend is needed.
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section id="audit" className="scroll-mt-20 bg-sage px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1320px]">
        <RunningHead number="02" title="Free audit" folio="Free · on WhatsApp · 48 hours" />
        <div className="mt-12 grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl leading-[1.1] text-charcoal md:text-[3.4rem]">
              Let us review your Instagram and Google profile. Free.
            </h2>
            <p className="mt-8 max-w-md font-body text-[16px] leading-relaxed text-charcoal/80">
              Send us your details. Within 48 hours, we'll WhatsApp you a short personal video showing:
            </p>
            <ol className="mt-6 max-w-md space-y-3 font-body text-[15px] text-charcoal">
              {[
                "What a homeowner thinks in the first five seconds on your Instagram",
                "Where you show up when someone in your city searches for an interior designer",
                "Three things you can fix this week, whether you work with us or not",
              ].map((item, i) => (
                <li key={item} className="flex gap-4 border-t border-charcoal/20 pt-3">
                  <span className="font-display text-xl leading-none">{i + 1}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {sent ? (
              <div className="border border-charcoal/30 p-10">
                <p className="font-display text-4xl text-charcoal">Thank you!</p>
                <p className="mt-4 font-body text-[15px] leading-relaxed text-charcoal/80">
                  WhatsApp should have opened with your details ready. Just press send, and we'll reply to confirm.
                  Your audit will reach you within 48 hours.
                </p>
                <button type="button" onClick={() => setSent(false)} className="mt-6 font-body text-sm underline underline-offset-4">
                  WhatsApp didn't open? Try again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                <label className="sm:col-span-2">
                  <span className="sr-only">Your name</span>
                  <input required name="name" placeholder="Your name" autoComplete="name" className={fieldClass} />
                </label>
                <label>
                  <span className="sr-only">Studio Instagram handle</span>
                  <input required name="instagram" placeholder="Instagram handle, e.g. @yourstudio" className={fieldClass} />
                </label>
                <label>
                  <span className="sr-only">Website</span>
                  <input name="website" placeholder="Website (optional)" className={fieldClass} />
                </label>
                <label>
                  <span className="sr-only">City</span>
                  <input required name="city" placeholder="City" autoComplete="address-level2" className={fieldClass} />
                </label>
                <label>
                  <span className="sr-only">Typical project size</span>
                  <select required name="budget" defaultValue="" className={`${fieldClass} invalid:text-charcoal/50`}>
                    <option value="" disabled>
                      Typical project size
                    </option>
                    <option>Under ₹15 lakh</option>
                    <option>₹15–40 lakh</option>
                    <option>₹40 lakh – ₹1 crore</option>
                    <option>Above ₹1 crore</option>
                  </select>
                </label>
                <label className="flex items-end gap-3 sm:col-span-2">
                  <span className="border-b border-charcoal/35 py-3 font-body text-[15px] text-charcoal">+91</span>
                  <span className="sr-only">WhatsApp number</span>
                  <input
                    required
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9 ]{10,12}"
                    placeholder="WhatsApp number"
                    autoComplete="tel-national"
                    className={fieldClass}
                  />
                </label>
                <div className="mt-4 sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 bg-charcoal px-7 py-4 font-body text-[14px] font-medium text-bone transition-colors duration-300 hover:bg-brass hover:text-charcoal sm:w-auto"
                  >
                    <WhatsAppIcon /> Send on WhatsApp
                  </button>
                  <p className="mt-4 font-body text-xs leading-relaxed text-charcoal/70">
                    Opens WhatsApp with your details filled in. Your number stays with us. No spam calls, ever.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditForm;
