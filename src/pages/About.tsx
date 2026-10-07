import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import CTABlock from "@/components/CTABlock";
import { Linkedin } from "lucide-react";

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="section-padding relative">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Built by a Founder Who Gets It</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Websphrex Media isn't a faceless agency. It's a founder-led growth partner built on real experience, real results, and a hands-on approach to every engagement.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Founder Bio */}
    <section className="section-padding pt-0">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <ScrollReveal className="h-full">
            <div className="h-full w-full max-w-md mx-auto bg-secondary/30 rounded-2xl flex items-center justify-center overflow-hidden">
              <img 
                src="/Shantanu picture - Website.PNG" 
                alt="Shantanu Shrivastava - Founder of Websphrex Media" 
                className="w-full h-full object-cover object-top" 
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100} className="h-full flex flex-col justify-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Shantanu Shrivastava</h2>
              <p className="text-accent font-medium mb-6">Founder, Websphrex Media</p>
              <div className="space-y-4 text-secondary-foreground leading-relaxed">
                <p>
                  I've spent years in the trenches of client acquisition — building cold email systems that hit 6.89% reply rates, managing $5M+ in ad spend, launching go-to-market strategies that generated 100K+ leads, and setting up CRM infrastructure that's booked 5,000+ qualified sales meetings.
                </p>
                <p>
                  Websphrex Media was born from a simple realization: most businesses don't need another marketing agency. They need an acquisition partner who understands the full picture — from first touch to closed deal.
                </p>
                <p>
                  I take every strategy call personally. Every engagement gets the founder-level attention that agencies three times our size can't offer. That's by design.
                </p>
                <p>
                  We've worked across 15+ industries — SaaS, e-commerce, B2B services, real estate, health & wellness, professional services, and more. The playbook adapts, the results speak.
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/shantanu-shrivastava07/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mt-6 font-medium"
              >
                <Linkedin size={18} /> Connect on LinkedIn
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* What Makes Us Different */}
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">What Makes Websphrex Media Different</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Your Acquisition Department", desc: "We're not a generic agency. We become your dedicated client acquisition team — embedded in your growth." },
            { title: "Founder on Every Call", desc: "Shantanu takes every strategy call personally. No account managers, no runaround." },
            { title: "Multi-Channel by Default", desc: "Most agencies do one thing. We architect your entire engine — outbound, inbound, ads, and systems working together." },
            { title: "Systems-First Thinking", desc: "We don't just generate leads. We build machines — CRM pipelines, automations, and processes that scale without you." },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="glass-card p-6 hover-lift">
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <CTABlock />
  </Layout>
);

export default About;
