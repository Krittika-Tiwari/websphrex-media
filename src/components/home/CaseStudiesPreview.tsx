import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { caseStudies } from "@/data/caseStudies";

const GHL_LINK = "https://api.leadconnectorhq.com/widget/bookings/growthifyu-discovery";

const CaseStudiesPreview = () => (
  <section id="case-studies" className="section-padding">
    <div className="container mx-auto px-4 md:px-8">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">Metric-Driven Results</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          Real results for real businesses. Every engagement is measured by pipeline and revenue.
        </p>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStudies.slice(0, 3).map((cs, i) => (
          <ScrollReveal key={cs.slug} delay={i * 100}>
            <Link to={`/case-studies/${cs.slug}`} className="block h-full">
              <div className="glass-card overflow-hidden hover-lift group h-full flex flex-col">
                <div className="h-48 bg-gradient-to-br from-accent/5 via-secondary/50 to-background border-b border-border/20 flex flex-col items-start justify-between p-6 relative overflow-hidden group-hover:border-accent/20 transition-all">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-500"></div>
                  <div className="absolute -bottom-4 -right-4 text-foreground/5 transform -rotate-12 group-hover:text-accent/10 group-hover:scale-110 transition-all duration-500">
                     <TrendingUp size={140} strokeWidth={1} />
                  </div>
                  
                  <div className="flex items-center gap-2 text-accent/80 z-10 bg-background/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-accent/10">
                    <TrendingUp size={14} className="text-accent" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/70">Growth Metric</span>
                  </div>
                  <div className="z-10 mt-auto w-full">
                    <p className="text-3xl font-black text-foreground/20 tracking-tight uppercase drop-shadow-sm group-hover:text-foreground/30 transition-colors duration-300 truncate">
                      {cs.client}
                    </p>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col relative z-20 bg-background/50">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cs.tags.map((tag) => (
                      <span key={tag} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-[1.1rem] leading-snug font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {cs.headline}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground mb-6 flex-1">{cs.client}</p>
                  <span className="text-sm font-bold text-accent flex items-center gap-1.5 mt-auto group-hover:gap-2 transition-all">
                    Read Case Study <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link to="/case-studies">
            <Button variant="outline" size="lg">
              View All Case Studies <ArrowRight size={16} />
            </Button>
          </Link>
          <a href={GHL_LINK} target="_blank" rel="noopener noreferrer">
            <Button variant="accent" size="lg">
              Get Similar Results <ArrowRight size={16} />
            </Button>
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CaseStudiesPreview;
