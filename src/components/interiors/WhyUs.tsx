import { Check, X } from "lucide-react";
import { FOUNDING_SPOTS } from "@/config/site";
import { Button, RunningHead } from "./shared";

const comparison = [
  { topic: "Who they work with", agency: "Restaurants, gyms, clinics — everyone", us: "Only interior designers & architects" },
  { topic: "What they report", agency: "Likes, reach and followers", us: "Enquiries, site visits and projects signed" },
  { topic: "Content", agency: "Festival wishes and stock templates", us: "Your projects, your site shoots, your process" },
  { topic: "Lock-in", agency: "12-month contracts", us: "3 months, then month to month" },
  { topic: "Who handles your account", agency: "A junior you never meet", us: "The founders, directly on WhatsApp" },
  { topic: "Your accounts & content", agency: "Often kept by the agency", us: "Always yours" },
];

const WhyUs = () => {
  const { total, remaining } = FOUNDING_SPOTS;

  return (
    <section id="why" className="scroll-mt-20 px-4 pb-24 md:px-8 md:pb-32">
      <div className="mx-auto max-w-[1320px]">
        <RunningHead number="04" title="Why Websphrex" />
        <h2 className="mt-10 max-w-3xl font-display text-4xl leading-[1.1] text-charcoal md:text-[3.4rem]">
          Not a regular marketing agency.
        </h2>

        <div className="mt-14 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse font-body text-[15px]">
            <thead>
              <tr className="border-b border-charcoal text-left text-sm">
                <th className="w-1/4 py-4 pr-6 font-normal text-charcoal/60" />
                <th className="w-[37.5%] py-4 pr-6 font-normal text-charcoal/60">A regular agency</th>
                <th className="w-[37.5%] bg-charcoal px-5 py-4 font-medium text-bone">Websphrex</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.topic} className="border-b border-charcoal/15">
                  <td className="py-4 pr-6 font-medium text-charcoal">{row.topic}</td>
                  <td className="py-4 pr-6 text-charcoal/60">
                    <span className="flex gap-2">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-charcoal/40" strokeWidth={1.5} />
                      {row.agency}
                    </span>
                  </td>
                  <td className="bg-charcoal/[0.04] px-5 py-4 text-charcoal">
                    <span className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brass" strokeWidth={2} />
                      {row.us}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div id="founding" className="mt-20 grid gap-10 border border-charcoal/20 p-8 md:p-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-3">
            <p className="font-display text-7xl leading-none text-charcoal">
              {remaining}
              <span className="text-4xl text-charcoal/35">/{total}</span>
            </p>
            <p className="mt-2 font-body text-sm text-charcoal/60">founding client spots left</p>
          </div>
          <div className="lg:col-span-6">
            <h3 className="font-display text-3xl leading-tight text-charcoal">Founding client offer</h3>
            <p className="mt-4 font-body text-[15px] leading-relaxed text-charcoal/75">
              We're new, and we'd rather be honest about it. Our first five designers get a lower fee, locked for 12
              months, and the founders working on their account personally. In return, we only ask to share your
              results as a case study. Only one designer per area, so we never work for your direct competitor.
            </p>
          </div>
          <div className="lg:col-span-3 lg:text-right">
            <Button href="#audit" variant="dark">
              Claim a founding spot
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
