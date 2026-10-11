import { RunningHead } from "./shared";

const steps = [
  { title: "Free audit", timing: "Day 1–2", body: "A personal video review of your Instagram, Google profile and website, sent on WhatsApp." },
  { title: "Call or meeting", timing: "Week 1", body: "A 30-minute call, or a meeting at your studio if you're in our city. Your projects, your ideal client, your goals." },
  { title: "Plan & first content", timing: "Week 2", body: "A written plan and your first month of content. Nothing goes live without your approval." },
  { title: "Monthly work & report", timing: "Every month", body: "We post, run ads and reply to enquiries. One simple report: enquiries, site visits, projects signed." },
];

const Process = () => (
  <section id="process" className="scroll-mt-20 bg-bone-deep px-4 py-24 md:px-8 md:py-32">
    <div className="mx-auto max-w-[1320px]">
      <RunningHead number="05" title="Process" folio="From audit to first post in 2 weeks" />
      <h2 className="mt-10 max-w-3xl font-display text-4xl leading-[1.1] text-charcoal md:text-[3.4rem]">
        Simple to start. Easy to manage.
      </h2>

      <ol className="mt-16 grid gap-px bg-charcoal/15 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="bg-bone-deep p-6 pt-8 lg:min-h-[250px]">
            <div className="flex items-baseline justify-between font-body text-xs text-charcoal/60">
              <span className="font-display text-5xl leading-none text-brass">{i + 1}</span>
              <span>{s.timing}</span>
            </div>
            <h3 className="mt-8 font-display text-2xl text-charcoal">{s.title}</h3>
            <p className="mt-3 font-body text-[15px] leading-relaxed text-charcoal/75">{s.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-12 grid gap-6 border-t border-charcoal pt-8 md:grid-cols-12">
        <p className="font-display text-2xl text-charcoal md:col-span-4">What we need from you</p>
        <p className="font-body text-[16px] leading-relaxed text-charcoal/75 md:col-span-7 md:col-start-6">
          Photos and videos from your sites (phone videos are fine), and about 10 minutes a month to approve content.
          We'll create a WhatsApp group for your studio, so approvals take seconds.
        </p>
      </div>
    </div>
  </section>
);

export default Process;
