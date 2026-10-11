import { Plus } from "lucide-react";
import { RunningHead } from "./shared";
import { faqs } from "./content";

const Questions = () => (
  <section id="faqs" className="scroll-mt-20 px-4 py-24 md:px-8 md:py-32">
    <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <RunningHead number="06" title="FAQs" />
        <h2 className="mt-10 font-display text-4xl leading-[1.1] text-charcoal md:text-[3.4rem]">Questions designers ask us.</h2>
      </div>
      <div className="lg:col-span-7 lg:col-start-6">
        {faqs.map((f) => (
          <details key={f.q} className="group border-b border-charcoal/15 py-6 first:border-t">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-xl text-charcoal md:text-2xl [&::-webkit-details-marker]:hidden">
              {f.q}
              <Plus className="mt-1 h-5 w-5 shrink-0 text-charcoal/60 transition-transform duration-300 group-open:rotate-45" strokeWidth={1.25} />
            </summary>
            <p className="mt-4 max-w-2xl font-body text-[15px] leading-relaxed text-charcoal/75">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default Questions;
