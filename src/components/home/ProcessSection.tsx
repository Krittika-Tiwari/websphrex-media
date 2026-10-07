import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  { num: "01", title: "Discovery", desc: "We audit what's broken. Most agencies find nothing works because nothing's connected. We find the gaps in 60 minutes." },
  { num: "02", title: "Strategy", desc: "We build your playbook: which channels, what message, what infrastructure. No fluff, no 40-slide decks. Just the plan that gets you meetings." },
  { num: "03", title: "Launch", desc: "We launch. Campaigns live, systems built, inbox filling with replies. 30 days from kickoff to first booked meeting." },
  { num: "04", title: "Scale", desc: "We scale what works, kill what doesn't. Every month we're either doubling down or cutting dead weight. No vanity metrics." },
];

const ProcessSection = () => (
  <section className="py-24 md:py-32 relative">
    <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
      <ScrollReveal>
        <div className="flex flex-col items-center justify-center text-center mb-20 md:mb-28">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-6 max-w-4xl">
            From Strategy Call to Booked Meetings in 30 Days
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-2xl font-medium">
            No 6-month onboarding. No waiting for results. We move fast.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {steps.map((s, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className="relative group text-left">
              <div className="flex flex-col items-start pt-8 border-t-2 border-gray-200 dark:border-gray-800 transition-colors duration-500 group-hover:border-blue-600 dark:group-hover:border-blue-500">
                <span className="text-5xl md:text-6xl font-black text-gray-200 dark:text-gray-800 mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors duration-500">
                  {s.num}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-[0.95rem] text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                  {s.desc}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
