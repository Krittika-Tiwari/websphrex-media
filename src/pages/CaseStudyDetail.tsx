import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import CTABlock from "@/components/CTABlock";
import { caseStudies } from "@/data/caseStudies";

const GHL_LINK = "https://api.leadconnectorhq.com/widget/bookings/growthifyu-discovery";

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Case Study Not Found</h1>
          <Link to="/case-studies">
            <Button variant="outline">Back to Case Studies</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding relative">
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <ScrollReveal>
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft size={16} /> All Case Studies
            </Link>
            <div className="flex flex-wrap gap-2 mb-4">
              {cs.tags.map((tag) => (
                <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{cs.headline}</h1>
            <p className="text-lg text-muted-foreground">{cs.client}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding pt-0">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="space-y-12">
            {cs.sections ? (
              cs.sections.map((section, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>
                    <div className="text-secondary-foreground leading-relaxed space-y-4">
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
                    <h2 className="text-2xl font-bold text-foreground mb-4">The Challenge</h2>
                    <p className="text-secondary-foreground leading-relaxed">{cs.challenge}</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">The Solution</h2>
                    <p className="text-secondary-foreground leading-relaxed">{cs.solution}</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">The Results</h2>
                    <p className="text-secondary-foreground leading-relaxed">{cs.results}</p>
                  </div>
                </ScrollReveal>
              </>
            )}
            <ScrollReveal delay={300}>
              <div className="glass-card p-8">
                <Quote size={24} className="text-accent/40 mb-4" />
                <p className="text-lg text-foreground italic leading-relaxed mb-4">{cs.testimonial}</p>
                <p className="text-sm text-muted-foreground">— {cs.client}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Get Similar Results"
        subtext="Book a discovery call and let's map out your acquisition strategy."
      />
    </Layout>
  );
};

export default CaseStudyDetail;
