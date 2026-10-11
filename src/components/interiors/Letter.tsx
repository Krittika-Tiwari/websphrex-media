const problems = [
  {
    title: "“What's your rate per sq ft?”",
    body: "Most enquiries want a quote before they've even seen your work, and then compare it with a modular-kitchen company.",
  },
  {
    title: "Referrals are slowing down",
    body: "Word of mouth built the studio. But one quiet quarter and you're saying yes to projects you would normally refuse.",
  },
  {
    title: "Views, but no enquiries",
    body: "A Reel gets 50,000 views. Not one message from a homeowner who is actually doing up a flat or villa.",
  },
  {
    title: "Agencies that only post",
    body: "You've tried one before. Festival creatives, generic captions, a report full of “reach” — and no new clients.",
  },
];

const Letter = () => (
  <section className="bg-charcoal px-4 py-24 text-bone md:px-8 md:py-32">
    <div className="mx-auto max-w-[1320px]">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="font-body text-sm text-bone/55">Sound familiar?</p>
          <h2 className="mt-5 font-display text-4xl leading-[1.1] md:text-[3.4rem]">
            Your work is good. The right clients just can't find it.
          </h2>
        </div>
        <p className="font-body text-[17px] leading-relaxed text-bone/70 lg:col-span-5 lg:col-start-8 lg:pt-10">
          Ask interior designers anywhere in India what holds the studio back, and you'll hear the same four things.
          If even one of them is true for you, we should talk.
        </p>
      </div>

      <div className="mt-16 grid gap-px bg-bone/15 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((p, i) => (
          <div key={p.title} className="bg-charcoal p-6 pt-8 sm:pr-8">
            <span className="font-body text-xs text-brass-light">0{i + 1}</span>
            <h3 className="mt-4 font-display text-2xl leading-snug">{p.title}</h3>
            <p className="mt-3 font-body text-[15px] leading-relaxed text-bone/65">{p.body}</p>
          </div>
        ))}
      </div>

      <p className="mt-14 max-w-3xl font-display text-2xl leading-snug text-bone md:text-3xl">
        We started Websphrex to fix exactly this, for designers only. We're a new team, so we won't show you fake
        numbers. We'll show you what we would do for your studio, for free.
      </p>
      {/* TODO: add the founder's name, photo and signature once available. */}
    </div>
  </section>
);

export default Letter;
