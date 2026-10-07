import { useState } from "react";
import { Quote, Play } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "Shyam Sundar",
    title: "Founder and CEO",
    company: "Go Floaters",
    companyUrl: "/case-studies/go-floaters",
    quote: "Websphrex Media built our entire B2B acquisition engine from scratch. We went from zero pipeline to 20+ meetings in under 30 days. The results speak for themselves.",
  },
  {
    name: "Sowmya Lakshmi G",
    title: "Founder and CEO",
    company: "Konnect Mojo",
    companyUrl: "/case-studies/konnect-mojo",
    quote: "From launch strategy to 5,000+ leads and paying customers — Websphrex Media delivered on every front. They're not just an agency, they're a growth partner.",
  },
  {
    name: "Jason Galvin",
    title: "Founder",
    company: "Herbal Groups",
    companyUrl: "/case-studies/herbal-groups",
    quote: "They managed over $100K in ad spend for us and consistently delivered strong ROAS. Professional, data-driven, and always optimizing.",
  },
];

const VideoPlayer = ({ videoId, title }: { videoId: string, title: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-muted cursor-pointer group" onClick={() => setIsPlaying(true)}>
      {!isPlaying ? (
        <>
          <img 
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
            onError={(e) => {
              // Fallback to hqdefault if maxresdefault doesn't exist
              e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            }}
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-transparent transition-colors">
            <div className="w-16 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
              <Play className="text-white fill-white" size={24} />
            </div>
          </div>
        </>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          className="absolute top-0 left-0 w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

const TestimonialsSection = () => (
  <section className="section-padding">
    <div className="container mx-auto px-4 md:px-8">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">What Our Clients Say</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          Don't take our word for it — hear from the businesses we've helped grow.
        </p>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className="glass-card p-6 hover-lift h-full flex flex-col">
              <Quote size={24} className="text-accent/40 mb-4" />
              <p className="text-secondary-foreground leading-relaxed mb-6 flex-1 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-sm font-bold text-accent">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.title}</p>
                  <Link
                    to={t.companyUrl}
                    className="text-xs text-accent hover:text-accent/80 transition-colors"
                  >
                    {t.company} →
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal>
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Video Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-4 overflow-hidden rounded-xl">
              <VideoPlayer videoId="v31135oaa3c" title="Go Floaters Testimonial" />
              <p className="mt-4 text-center font-semibold text-foreground">Go Floaters</p>
            </div>

            <div className="glass-card p-4 overflow-hidden rounded-xl">
              <VideoPlayer videoId="D13EnkkNbGI" title="Herbal Groups Testimonial" />
              <p className="mt-4 text-center font-semibold text-foreground">Herbal Groups</p>
            </div>

            <div className="glass-card p-4 overflow-hidden rounded-xl">
              <VideoPlayer videoId="g9ZtLl7zoLE" title="Konnect Mojo Testimonial" />
              <p className="mt-4 text-center font-semibold text-foreground">Konnect Mojo</p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default TestimonialsSection;
