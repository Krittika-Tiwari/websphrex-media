import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import CTABlock from "@/components/CTABlock";
import { caseStudies } from "@/data/caseStudies";
import { Quote } from "lucide-react";

const CaseStudies = () => {
  return (
    <Layout>
      <div className="pt-16 md:pt-24">
        <section className="section-padding pb-0 border-b border-border/40">
          <div className="container mx-auto px-4 md:px-8">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4">Case Studies</h1>
              <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
                Real results from our integrated acquisition engine. See how we drive predictable revenue for our clients.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {caseStudies.map((cs, index) => (
          <section key={cs.slug} id={cs.slug} className={`section-padding ${index % 2 === 0 ? "bg-accent/5 lg:bg-transparent" : "bg-background"} border-b border-border/40 relative`}>
            {index % 2 === 0 && <div className="absolute inset-0 bg-accent/5 mix-blend-multiply pointer-events-none hidden lg:block" />}
            <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
              <ScrollReveal>
                <div className="mb-12">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cs.tags.map((tag) => (
                      <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">{cs.headline}</h2>
                  <p className="text-xl font-medium text-accent">{cs.client}</p>
                </div>
              </ScrollReveal>

              <div className="space-y-12">
                {cs.sections ? (
                  cs.sections.map((section, idx) => (
                    <ScrollReveal key={idx} delay={100}>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">{section.title}</h3>
                        <div className="text-secondary-foreground leading-relaxed space-y-4 text-lg">
                          {section.content.map((p, i) => (
                            <p key={i}>{p}</p>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>
                  ))
                ) : (
                  <>
                    <ScrollReveal>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">The Challenge</h3>
                        <p className="text-secondary-foreground leading-relaxed text-lg">{cs.challenge}</p>
                      </div>
                    </ScrollReveal>
                    <ScrollReveal delay={100}>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">The Solution</h3>
                        <p className="text-secondary-foreground leading-relaxed text-lg">{cs.solution}</p>
                      </div>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">The Results</h3>
                        <p className="text-secondary-foreground leading-relaxed text-lg">{cs.results}</p>
                      </div>
                    </ScrollReveal>
                  </>
                )}
                
                <ScrollReveal delay={300}>
                  <div className="glass-card p-8 mt-16 border-l-4 border-l-accent">
                    <Quote size={32} className="text-accent/40 mb-6" />
                    <p className="text-xl text-foreground italic leading-relaxed mb-6">"{cs.testimonial}"</p>
                    <p className="text-base font-bold text-foreground">— {cs.client}</p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CTABlock showEmbed />
    </Layout>
  );
};

export default CaseStudies;
