import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const GHL_LINK = "https://api.leadconnectorhq.com/widget/bookings/growthifyu-discovery";

const tools = [
  { name: "Clay", image: "/Brand logos/1.png" },
  { name: "Apify", image: "/Brand logos/2.png" },
  { name: "Instant Data Scrapper", image: "/Brand logos/3.png" },
  { name: "Never Bounce", image: "/Brand logos/4.png" },
  { name: "Apollo", image: "/Brand logos/5.png" },
  { name: "Findymail", image: "/Brand logos/6.png" },
  { name: "Mailmeteor", image: "/Brand logos/7.png" },
  { name: "Loom", image: "/Brand logos/8.png" },
  { name: "Lumyna", image: "/Brand logos/9.png" },
  { name: "Instantly", image: "/Brand logos/10.png" },
  { name: "Porkbun", image: "/Brand logos/11.png" },
  { name: "warmy.io", image: "/Brand logos/12.png" },
  { name: "Linkedin", image: "/Brand logos/13.png" },
  { name: "Google Ads", image: "/Brand logos/14.png" },
  { name: "Meta Ads", image: "/Brand logos/15.png" },
  { name: "LinkedIn Sales Navigator", image: "/Brand logos/16.png" },
  { name: "Google Workspace", image: "/Brand logos/17.png" }
];

const HeroSection = () => (
  <section className="relative min-h-[100svh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-transparent">
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center max-w-4xl">
      <ScrollReveal>
        <div className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-800 px-4 py-1.5 text-sm font-medium mb-8 bg-white/50 dark:bg-black/50 backdrop-blur-sm text-gray-600 dark:text-gray-400">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2.5"></span>
          Your Client Acquisition Partner
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-gray-900 dark:text-white leading-[1.05] mb-8">
          We Build the Engine <br className="hidden md:block" />
          <span className="text-blue-600 dark:text-blue-500">That Fills Your Calendar</span>
        </h1>
      </ScrollReveal>

      <ScrollReveal>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Multi-channel client acquisition for coaches, consultants, and B2B businesses. We handle outbound, inbound, ads, and systems, <span className="font-semibold text-gray-900 dark:text-white">you focus on closing.</span>
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <a href={GHL_LINK} target="_blank" rel="noopener noreferrer">
            <Button className="w-full sm:w-auto h-14 px-8 rounded-full text-base font-bold shadow-md shadow-blue-500/10 hover:shadow-lg transition-all bg-blue-600 hover:bg-blue-700 text-white border-0">
              Start Getting Clients in 30 Days
            </Button>
          </a>
          <a href="#services">
            <Button variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-full text-base font-bold border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all text-gray-900 dark:text-white bg-transparent">
              See Our Work
            </Button>
          </a>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="w-full max-w-[90vw] overflow-hidden mt-16 md:mt-24 relative [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div className="flex w-max animate-scroll items-center gap-12 md:gap-20">
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={index}
                className="flex items-center justify-center cursor-default h-16 md:h-24"
              >
                <img 
                  src={tool.image} 
                  alt={tool.name} 
                  className="h-full w-auto object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default HeroSection;
