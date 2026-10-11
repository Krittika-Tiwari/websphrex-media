import { BOOKING_LINK, CITIES, EMAIL, PHONE_DISPLAY, WHATSAPP_NUMBER, whatsappLink } from "@/config/site";
import { contents } from "./Masthead";
import { Button, WhatsAppIcon } from "./shared";

const Closing = () => (
  <footer className="bg-charcoal text-bone">
    <div className="mx-auto max-w-[1320px] px-4 py-24 md:px-8 md:py-32">
      <h2 className="max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
        Ready for better projects? <span className="text-brass-light">Let's talk.</span>
      </h2>
      <p className="mt-6 max-w-xl font-body text-[17px] leading-relaxed text-bone/70">
        Send us a message on WhatsApp or book a 30-minute call. No sales pressure — just an honest conversation about
        your studio.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button href={whatsappLink("Hi Websphrex, I'd like to talk about marketing for my studio.")} variant="solid">
          <WhatsAppIcon /> WhatsApp us
        </Button>
        <Button href={BOOKING_LINK} variant="light">
          Book a free call
        </Button>
      </div>
    </div>

    <div className="border-t border-bone/15">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-4 py-12 md:grid-cols-12 md:px-8">
        <div className="md:col-span-4">
          <p className="font-display text-2xl">Websphrex Media</p>
          <p className="mt-2 font-body text-sm text-bone/55">Marketing for interior designers &amp; architects in India.</p>
          <a href={`tel:+${WHATSAPP_NUMBER}`} className="mt-4 block font-body text-sm text-bone/85 hover:text-bone">
            {PHONE_DISPLAY}
          </a>
          <a href={`mailto:${EMAIL}`} className="mt-1 block font-body text-sm text-bone/85 hover:text-bone">
            {EMAIL}
          </a>
        </div>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-2 font-body text-sm md:col-span-4">
          {contents.map((c) => (
            <li key={c.href}>
              <a href={c.href} className="text-bone/65 hover:text-bone">
                {c.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="font-body text-sm text-bone/55 md:col-span-4">
          <p className="text-bone/80">Cities we work in</p>
          <p className="mt-2 leading-relaxed">{CITIES.join(" · ")}</p>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1320px] flex-col gap-2 border-t border-bone/10 px-4 py-6 font-body text-xs text-bone/45 md:flex-row md:justify-between md:px-8">
        {/* TODO: add the registered company name and GSTIN once available. */}
        <p>© {new Date().getFullYear()} Websphrex Media · India</p>
        <p>Sample work shown is for illustration and made for fictional studios.</p>
        <a href="#top" className="text-bone/70 underline underline-offset-4 hover:text-bone">
          Back to top ↑
        </a>
      </div>
    </div>
  </footer>
);

export default Closing;
