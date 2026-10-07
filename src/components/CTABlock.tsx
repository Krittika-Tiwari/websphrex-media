import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const GHL_LINK = "https://api.leadconnectorhq.com/widget/bookings/growthifyu-discovery";

interface CTABlockProps {
  heading?: string;
  subtext?: string;
  showEmbed?: boolean;
}

const CTABlock = ({
  heading = "Ready to Fill Your Calendar?",
  subtext = "Book a free discovery call and we'll map out your acquisition strategy in 30 minutes.",
  showEmbed = false,
}: CTABlockProps) => (
  <section className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 grid-pattern opacity-30" />
    <div className="container mx-auto text-center relative z-10">
      <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{heading}</h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">{subtext}</p>
      {showEmbed ? (
        <div className="max-w-2xl mx-auto">
          <iframe
            src={GHL_LINK}
            className="w-full h-[600px] rounded-xl border border-border"
            title="Book a Discovery Call"
          />
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={GHL_LINK} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="xl">
              Book A Meeting <ArrowRight size={20} />
            </Button>
          </a>
          <Link to="/contact">
            <Button variant="heroOutline" size="xl">
              Learn More
            </Button>
          </Link>
        </div>
      )}
    </div>
  </section>
);

export default CTABlock;
