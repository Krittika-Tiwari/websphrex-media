import ScrollReveal from "@/components/ScrollReveal";

const logos = [
  "Go Floaters", 
  "Konnect Mojo", 
  "Herbal Groups", 
  "Security Co.", 
  "Sanyog iCRM", 
  "Physics Wallah",
  "Synergy Decor",
  "Global Home Security",
  "Prime Home Security",
  "My Health EVO",
  "Source That Deal",
  "Mymed Care",
  "Fortune Fluency",
  "Gradical GMBH",
  "Sleak Pads",
  "Chennai Fertility",
  "Eva fertility"
];

const LogoStrip = () => (
  <section className="py-16 relative overflow-hidden border-y border-border/40 bg-gradient-to-b from-background via-accent/5 to-background">
    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <ScrollReveal>
        <div className="flex items-center justify-center gap-4 mb-10 opacity-80">
          <div className="h-px bg-border/60 flex-1 max-w-[100px]"></div>
          <p className="text-center text-xs text-muted-foreground uppercase tracking-[0.2em] font-semibold">
            Trusted by industry leaders
          </p>
          <div className="h-px bg-border/60 flex-1 max-w-[100px]"></div>
        </div>
        
        <div className="w-full overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] py-2">
          <div className="flex w-max animate-scroll items-center gap-16 md:gap-28">
            {[...logos, ...logos, ...logos].map((name, index) => (
              <div
                key={index}
                className="text-2xl md:text-3xl font-black tracking-tight text-foreground/40 hover:text-accent transition-all duration-300 hover:scale-110 cursor-default whitespace-nowrap drop-shadow-sm"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default LogoStrip;
