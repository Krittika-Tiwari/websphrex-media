import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const metrics = [
  { value: 5000000, suffix: "+", label: "Ad Spend Managed", prefix: "$" },
  { value: 100000, suffix: "+", label: "Leads Generated" },
  { value: 15, suffix: "+", label: "Industries Served" },
  { value: 5000, suffix: "+", label: "Meetings Booked", disableFormat: true },
];

const Counter = ({ target, suffix, prefix = "", disableFormat = false }: { target: number; suffix: string; prefix?: string, disableFormat?: boolean }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  const formatNumber = (n: number) => {
    if (disableFormat) return n.toString();
    
    if (target >= 1000000) {
      const val = (n / 1000000).toFixed(1);
      return `${val.replace(/\.0$/, "")}M`;
    }
    if (target >= 1000) return `${Math.floor(n / 1000)}k`;
    return n.toString();
  };

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-foreground mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {prefix}{count > 0 ? formatNumber(count) : "0"}{count >= target ? suffix.toLowerCase().replace("k", "") : ""}
      </div>
    </div>
  );
};

const MetricsSection = () => (
  <section className="section-padding">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {metrics.map((m, i) => (
          <ScrollReveal key={m.label} delay={i * 100}>
            <div className="text-center">
              <Counter target={m.value} suffix={m.suffix} prefix={m.prefix} disableFormat={m.disableFormat} />
              <p className="text-sm text-muted-foreground mt-2">{m.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default MetricsSection;
