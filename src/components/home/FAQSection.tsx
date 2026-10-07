import ScrollReveal from "@/components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How quickly can we expect results?",
    a: "Most clients see their first qualified meetings within 30 days of launch. We prioritize speed-to-pipeline while building sustainable, long-term systems.",
  },
  {
    q: "Do you work with businesses outside of B2B?",
    a: "Our core expertise is B2B client acquisition — SaaS, professional services, consulting, and growth-stage companies. We've also managed $200K+ in ad spend for e-commerce brands.",
  },
  {
    q: "What makes Websphrex Media different from other agencies?",
    a: "Most agencies do one thing. We architect your entire acquisition engine — outbound, inbound, ads, and CRM systems — all working together. Plus, the founder takes every strategy call personally.",
  },
  {
    q: "What's the minimum engagement?",
    a: "We typically work on a month-to-month basis after an initial 90-day commitment. This gives us enough runway to build, launch, and optimize your acquisition engine properly.",
  },
  {
    q: "Do you replace our existing sales team?",
    a: "No — we complement your team. We fill the top of your funnel with qualified conversations so your closers can focus on what they do best: closing deals.",
  },
  {
    q: "Which tools and platforms do you work with?",
    a: "We're platform-agnostic but have deep expertise in GoHighLevel, HubSpot, Salesforce, Clay, Instantly, Lemlist, Meta Ads Manager, and Google Ads. We'll work with your stack or build one from scratch.",
  },
];

const FAQSection = () => (
  <section className="section-padding">
    <div className="container mx-auto px-4 md:px-8">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">Your Questions Answered</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          Everything you need to know before getting started.
        </p>
      </ScrollReveal>
      <ScrollReveal>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card px-6 border-none"
              >
                <AccordionTrigger className="text-foreground font-semibold text-left hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default FAQSection;
