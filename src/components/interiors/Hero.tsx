import { CITIES, whatsappLink } from "@/config/site";
import GridTransformation from "./GridTransformation";
import { Button, WhatsAppIcon } from "./shared";

const Hero = () => (
  <section id="top" className="px-4 pb-20 pt-32 md:px-8 md:pb-28 md:pt-44">
    <div className="mx-auto grid max-w-[1320px] items-center gap-16 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-7">
        <p className="font-body text-sm text-charcoal/65">For interior designers &amp; architects across India</p>
        <h1 className="mt-6 font-display text-[2.8rem] leading-[1.05] text-charcoal sm:text-6xl lg:text-[4.6rem]">
          More premium projects. Fewer <span className="text-brass">“rate per sq ft?”</span> enquiries.
        </h1>
        <p className="mt-8 max-w-xl font-body text-[17px] leading-relaxed text-charcoal/75">
          Websphrex is a marketing team that works only with interior designers and architects. We manage your
          Instagram, your Google profile and your Meta ads, so the enquiries you get are from homeowners with real
          budgets, and you get your time back for design and site visits.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="#audit">Get a free audit of your Instagram</Button>
          <Button href={whatsappLink("Hi Websphrex, I'm an interior designer and would like to know more.")} variant="outline">
            <WhatsAppIcon /> WhatsApp us
          </Button>
        </div>
        <p className="mt-5 font-body text-[13px] text-charcoal/60">
          Free · Personal video review on WhatsApp within 48 hours · No obligation
        </p>
        <a href="#services" className="mt-4 inline-block font-body text-[14px] text-charcoal underline underline-offset-4 hover:text-brass">
          See services &amp; pricing ↓
        </a>
        <p className="mt-10 border-t border-charcoal/15 pt-5 font-body text-[13px] text-charcoal/60">
          Working with designers in {CITIES.join(", ")}.
        </p>
      </div>

      <div className="lg:col-span-5">
        <GridTransformation />
      </div>
    </div>
  </section>
);

export default Hero;
