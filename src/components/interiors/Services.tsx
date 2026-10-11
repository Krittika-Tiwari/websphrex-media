import { formatFee } from "@/config/site";
import { Button, RunningHead } from "./shared";
import { services } from "./content";

const Services = () => (
  <section id="services" className="scroll-mt-20 px-4 py-24 md:px-8 md:py-32">
    <div className="mx-auto max-w-[1320px]">
      <RunningHead number="03" title="Services & pricing" folio="Monthly · minimum 3 months" />
      <h2 className="mt-10 max-w-3xl font-display text-4xl leading-[1.1] text-charcoal md:text-[3.4rem]">
        Clear services. Clear pricing. No hidden charges.
      </h2>

      <div className="mt-16 divide-y divide-charcoal/15 border-y border-charcoal/15">
        {services.map((s) => (
          <article key={s.key} className="grid gap-6 py-10 lg:grid-cols-12 lg:gap-10">
            <div className="flex items-baseline gap-5 lg:col-span-4">
              <span className="font-body text-sm text-brass">{s.number}</span>
              <h3 className="font-display text-3xl leading-tight text-charcoal">{s.title}</h3>
            </div>
            <div className="lg:col-span-5">
              <p className="font-body text-[15px] leading-relaxed text-charcoal/75">{s.summary}</p>
              <ul className="mt-5 space-y-2">
                {s.includes.map((item) => (
                  <li key={item} className="flex gap-3 font-body text-sm text-charcoal/80">
                    <span className="mt-[0.6rem] h-px w-3 shrink-0 bg-charcoal/50" />
                    {item}
                  </li>
                ))}
              </ul>
              {s.note && <p className="mt-4 font-body text-xs text-charcoal/60">{s.note}</p>}
            </div>
            <div className="lg:col-span-3 lg:text-right">
              <p className="font-body text-xs text-charcoal/60">Starting at</p>
              <p className="font-display text-4xl text-charcoal">
                {formatFee(s.key)}
                <span className="font-body text-sm text-charcoal/60"> / month</span>
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 grid gap-8 bg-charcoal p-8 text-bone md:p-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <p className="font-body text-sm text-brass-light">Most popular · Complete package</p>
          <p className="mt-3 font-display text-3xl leading-tight md:text-4xl">Google + Instagram + Ads, handled by one team.</p>
        </div>
        <div className="lg:col-span-5 lg:text-right">
          <p className="font-display text-5xl">
            {formatFee("complete")}
            <span className="font-body text-sm text-bone/60"> / month</span>
          </p>
          <p className="mt-2 font-body text-xs text-bone/60">All fees + 18% GST. GST invoice every month.</p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Button href="#audit" variant="outline">
          Not sure what you need? Start with the free audit
        </Button>
      </div>
    </div>
  </section>
);

export default Services;
