import { Star } from "lucide-react";
import { Caption, RunningHead, img } from "./shared";

const SearchListing = () => (
  <div className="bg-white p-5 font-body shadow-sm">
    <div className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] text-charcoal/80">best interior designer in bandra</div>
    <div className="mt-5 flex items-start gap-4">
      <img src={img("open-plan", true)} alt="" loading="lazy" className="h-20 w-20 shrink-0 rounded-md object-cover" />
      <div className="text-[12px] leading-snug">
        <p className="text-[15px] text-[#1a0dab]">Studio Aranya — Interior Designers</p>
        <p className="mt-1 flex items-center gap-1 text-charcoal/70">
          4.9 <Star className="h-3 w-3 fill-[#fbbc04] text-[#fbbc04]" /> (86 Google reviews)
        </p>
        <p className="text-charcoal/70">Pali Hill, Bandra West, Mumbai</p>
        <p className="mt-1 text-[#188038]">Open · Site visits by appointment</p>
      </div>
    </div>
    <div className="mt-4 grid grid-cols-3 gap-1.5">
      {["living-sunlit", "green-dining", "bedroom"].map((n) => (
        <img key={n} src={img(n, true)} alt="" loading="lazy" className="aspect-square w-full rounded object-cover" />
      ))}
    </div>
  </div>
);

const ReelsGrid = () => (
  <div className="bg-white p-5 font-body shadow-sm">
    <p className="text-sm font-semibold text-charcoal">Reels plan — one month</p>
    <p className="text-[11px] text-charcoal/55">12 Reels · shot on site · edited by us</p>
    <div className="mt-4 grid grid-cols-3 gap-2">
      {[
        { n: "hallway", t: "Before → after: 3 BHK, Powai" },
        { n: "fireplace-dining", t: "Client walkthrough" },
        { n: "rattan-pendants", t: "Why we chose cane" },
        { n: "living-gallery", t: "₹40L vs ₹80L — what changes?" },
        { n: "neutral-mirrors", t: "Handover day" },
        { n: "sage-living", t: "Site visit, week 6" },
      ].map((r) => (
        <div key={r.n} className="relative aspect-[9/16] overflow-hidden rounded-lg">
          <img src={img(r.n, true)} alt="" loading="lazy" className="h-full w-full object-cover" />
          <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-1.5 pt-6 text-[9px] leading-tight text-white">
            {r.t}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const AdCreative = () => (
  <div className="bg-white font-body shadow-sm">
    <div className="flex items-center gap-2.5 p-3">
      <img src={img("neutral-mirrors", true)} alt="" className="h-8 w-8 rounded-full object-cover" />
      <div className="text-[12px] leading-tight">
        <p className="font-semibold text-charcoal">Studio Aranya</p>
        <p className="text-charcoal/55">Sponsored</p>
      </div>
    </div>
    <div className="relative">
      <img src={img("living-sunlit")} alt="" loading="lazy" className="aspect-[4/5] w-full object-cover" />
      <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 pt-16 font-display text-2xl leading-tight text-white">
        Moving into a new 3 or 4 BHK in Bandra or Juhu?
      </p>
    </div>
    <div className="flex items-center justify-between gap-3 p-3 text-[12px]">
      <span className="text-charcoal/75">Turnkey interiors from ₹40L. Only 6 homes a year.</span>
      <span className="shrink-0 bg-charcoal/10 px-3 py-1.5 font-semibold text-charcoal">Get quote</span>
    </div>
  </div>
);

const SampleWork = () => (
  <section id="work" className="scroll-mt-20 px-4 py-24 md:px-8 md:py-32">
    <div className="mx-auto max-w-[1320px]">
      <RunningHead number="01" title="Our work" folio="Sample work for a sample studio" />
      <div className="mt-10 grid gap-6 lg:grid-cols-12">
        <h2 className="font-display text-4xl leading-[1.1] text-charcoal md:text-[3.4rem] lg:col-span-7">
          How your studio will look wherever a homeowner searches.
        </h2>
        <p className="font-body text-[16px] leading-relaxed text-charcoal/70 lg:col-span-4 lg:col-start-9 lg:pt-3">
          We're a new team, so instead of borrowed logos, here is the kind of work we do. These samples are for a
          made-up studio. Real client work will replace them as we go.
        </p>
      </div>

      <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-12">
        <figure className="lg:col-span-4">
          <SearchListing />
          <Caption className="mt-4">Google profile — the first thing a homeowner sees when they search.</Caption>
        </figure>
        <figure className="lg:col-span-4 lg:mt-24">
          <ReelsGrid />
          <Caption className="mt-4">Instagram Reels that show your process, not festival wishes.</Caption>
        </figure>
        <figure className="md:col-span-2 md:mx-auto md:max-w-sm lg:col-span-4 lg:mx-0 lg:max-w-none">
          <AdCreative />
          <Caption className="mt-4">A Meta ad shown only to homeowners in your target areas and budget.</Caption>
        </figure>
      </div>
    </div>
  </section>
);

export default SampleWork;
