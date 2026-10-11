import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { CITIES, PHONE_DISPLAY, WHATSAPP_NUMBER, whatsappLink } from "@/config/site";
import { Button, WhatsAppIcon } from "./shared";

export const contents = [
  { label: "Our Work", href: "#work" },
  { label: "Free Audit", href: "#audit" },
  { label: "Services & Pricing", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "FAQs", href: "#faqs" },
];

/** Tracks which section is currently in view, so the menu can highlight it. */
const useActiveSection = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = contents
      .map((c) => document.querySelector<HTMLElement>(c.href))
      .filter((el): el is HTMLElement => el !== null);

    const update = () => {
      const marker = window.scrollY + window.innerHeight * 0.35;
      let current = "";
      for (const el of sections) {
        if (el.offsetTop <= marker) current = `#${el.id}`;
      }
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return active;
};

const Masthead = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[70] bg-charcoal px-4 py-3 font-body text-sm text-bone focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 bg-bone/95 backdrop-blur">
        <div className={`hidden overflow-hidden bg-charcoal transition-all duration-300 md:block ${scrolled ? "max-h-0" : "max-h-10"}`}>
          <div className="mx-auto flex h-9 max-w-[1320px] items-center justify-between px-8 font-body text-[12px] text-bone/75">
            <span>Marketing for interior designers &amp; architects · {CITIES.slice(0, 5).join(" · ")}</span>
            <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-2 text-bone hover:text-brass-light">
              <Phone className="h-3.5 w-3.5" strokeWidth={1.5} /> Call or WhatsApp: {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <nav
          aria-label="Main"
          className={`mx-auto flex max-w-[1320px] items-center justify-between gap-6 px-4 transition-all duration-300 md:px-8 ${
            scrolled ? "h-16 border-b border-charcoal/10" : "h-20"
          }`}
        >
          <a href="#top" className="flex shrink-0 items-baseline gap-2 text-charcoal" aria-label="Websphrex Media, back to top">
            <span className="font-display text-[1.7rem] leading-none">Websphrex</span>
            <span className="font-body text-[10px] uppercase tracking-[0.3em] text-charcoal/60">Media</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {contents.map((c) => {
              const isActive = active === c.href;
              return (
                <li key={c.href}>
                  <a
                    href={c.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative block whitespace-nowrap px-3 py-2 font-body text-[14px] transition-colors ${
                      isActive ? "text-charcoal" : "text-charcoal/65 hover:text-charcoal"
                    }`}
                  >
                    {c.label}
                    <span
                      className={`absolute inset-x-3 -bottom-0.5 h-[2px] bg-brass transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Button href="#audit" variant="dark" className="hidden px-5 py-3 sm:inline-flex">
              Get free audit
            </Button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="flex items-center gap-2 border border-charcoal/25 px-3 py-2.5 font-body text-[14px] text-charcoal lg:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} /> Menu
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-bone px-5 pb-8 duration-200 animate-in fade-in lg:hidden"
        >
          <div className="flex h-20 shrink-0 items-center justify-between">
            <span className="font-display text-[1.7rem] leading-none">Websphrex</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              autoFocus
              className="flex items-center gap-2 border border-charcoal/25 px-3 py-2.5 font-body text-[14px]"
            >
              <X className="h-5 w-5" strokeWidth={1.5} /> Close
            </button>
          </div>

          <ul className="mt-4 border-t border-charcoal/10">
            {contents.map((c) => (
              <li key={c.href} className="border-b border-charcoal/10">
                <a
                  href={c.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between py-4 font-display text-2xl ${
                    active === c.href ? "text-brass" : "text-charcoal"
                  }`}
                >
                  {c.label}
                  <span aria-hidden className="font-body text-base text-charcoal/40">→</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto grid gap-3 pt-10">
            <Button href="#audit" variant="dark" className="w-full" onClick={() => setOpen(false)}>
              Get free audit
            </Button>
            <div className="grid grid-cols-2 gap-3">
              <Button href={`tel:+${WHATSAPP_NUMBER}`} variant="outline" className="w-full">
                <Phone className="h-4 w-4" strokeWidth={1.5} /> Call
              </Button>
              <Button href={whatsappLink("Hi Websphrex, I'm an interior designer and would like to know more.")} variant="outline" className="w-full">
                <WhatsAppIcon /> WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Masthead;
