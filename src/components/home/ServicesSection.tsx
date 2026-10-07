import { Mail, Linkedin, Megaphone, PenTool, Layers, Settings, Workflow, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const GHL_LINK = "https://api.leadconnectorhq.com/widget/bookings/growthifyu-discovery";

const multiChannelService = {
  icon: Workflow,
  title: "Multi-Channel Strategy",
  subhead: "The full acquisition engine — outbound, inbound, ads, and systems working together",
  metric: "Every channel orchestrated as one",
  features: [
    "Full acquisition engine architecture",
    "Outbound + inbound + paid + systems",
    "Unified strategy across all touchpoints",
    "We become your acquisition department",
  ],
};

const individualServices = [
  {
    icon: Mail,
    title: "Cold Email Outreach",
    subhead: "High-volume infrastructure that fills your inbox with replies",
    metric: "5,000+ leads generated",
    features: [
      "Deliverability handled (domain setup, warmup, rotation)",
      "Copy that gets replies, not deletes",
      "We handle the infrastructure. You take the meetings.",
    ],
  },
  {
    icon: Linkedin,
    title: "LinkedIn Outbound",
    subhead: "Reach decision-makers where they actually check messages",
    metric: "Decision-makers reached directly",
    features: [
      "Targeted connection campaigns",
      "DM sequences that don't sound like spam",
      "Profile optimization for credibility",
    ],
  },
  {
    icon: Megaphone,
    title: "Paid Ads (Meta & Google)",
    subhead: "Performance campaigns that turn spend into pipeline",
    metric: "$200K+ in ad spend managed",
    features: [
      "Campaign strategy + creative + targeting",
      "Optimization for leads, not just clicks",
      "We've scaled e-commerce and B2B campaigns profitably",
    ],
  },
  {
    icon: PenTool,
    title: "Content & Inbound",
    subhead: "Positioning and distribution that attracts the right buyers",
    metric: "Authority-building engines",
    features: [
      "Content strategy that drives inbound leads",
      "SEO-driven content systems",
      "Distribution across channels",
    ],
  },
  {
    icon: Layers,
    title: "Funnel & System Builds",
    subhead: "Landing pages and sequences that convert traffic into booked calls",
    metric: "Traffic → booked calls",
    features: [
      "High-converting landing pages",
      "Lead capture funnels",
      "Email sequences that nurture and close",
    ],
  },
  {
    icon: Settings,
    title: "RevOps & CRM Setup",
    subhead: "The infrastructure to track, manage, and scale your pipeline",
    metric: "Systems-first approach",
    features: [
      "GoHighLevel, HubSpot, or custom CRM builds",
      "Pipelines, workflows, automation",
      "Reporting dashboards that show what's working",
    ],
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 md:py-32 relative">
    <div className="container mx-auto px-6 md:px-8 max-w-7xl">
      <ScrollReveal>
        <div className="mb-16 md:mb-24 flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">The Full Stack</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-2xl">
            Choose exactly how you want to scale.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-20">
          <div className="group relative bg-[#0a0a0a] dark:bg-black rounded-[2.5rem] p-8 md:p-14 shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col md:flex-row gap-12 items-start md:items-center justify-between border border-gray-800">
            {/* Background elements */}
            <div className="absolute top-1/2 left-3/4 -translate-y-1/2 -translate-x-1/2 p-8 opacity-[0.05] blur-3xl mix-blend-overlay">
              <Workflow size={400} className="text-white" />
            </div>

            <div className="relative z-10 md:w-[45%]">
              <div className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold tracking-wide uppercase mb-8 bg-white text-gray-900 leading-none shadow-sm">
                ⭐ Most Popular
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">{multiChannelService.title}</h3>
              <p className="text-gray-300 text-[1.05rem] leading-relaxed mb-6 font-medium">{multiChannelService.subhead}</p>
              <div className="bg-white/5 rounded-2xl p-4 mb-10 border border-white/10 backdrop-blur-sm inline-block">
                <span className="text-white font-bold tracking-tight block text-sm uppercase text-gray-400 mb-1">Impact</span>
                <span className="text-white font-bold tracking-tight text-lg">{multiChannelService.metric}</span>
              </div>
              <div className="block">
                <a href={GHL_LINK} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-white text-gray-900 hover:bg-gray-100 border border-transparent rounded-xl px-8 h-14 w-full md:w-auto font-bold text-[1.05rem] shadow-sm transition-transform hover:scale-[1.02]">
                    Book a Call <ArrowRight size={18} className="ml-2" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative z-10 md:w-[50%] w-full">
              <ul className="space-y-4">
                {multiChannelService.features.map((f, j) => (
                  <li key={j} className="text-gray-100 flex items-start gap-4 bg-white/5 rounded-2xl p-5 border border-white/10 backdrop-blur-md shadow-sm transition-colors hover:bg-white/10">
                    <Check size={22} className="text-gray-300 mt-0.5 shrink-0" strokeWidth={3} />
                    <span className="font-semibold text-[1.05rem]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-10 flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Individual Channels</h3>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {individualServices.map((s, i) => (
          <ScrollReveal key={i} delay={i * 80}>
            <div className="group relative bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 p-8 rounded-[2rem] h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-2 hover:border-gray-300 dark:hover:border-gray-700">

              {/* Metric Badge at Top */}
              <div className="mb-8">
                <span className="inline-flex items-center px-3 py-1.5 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-lg text-xs font-bold text-gray-900 dark:text-gray-100 tracking-wide uppercase">
                  {s.metric}
                </span>
              </div>

              <div className="mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center mb-6 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:border-blue-100 dark:group-hover:border-blue-800 transition-colors duration-500">
                  <s.icon size={22} className="text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">{s.title}</h3>
                <p className="text-[0.95rem] font-medium text-gray-500 dark:text-gray-400 leading-relaxed">{s.subhead}</p>
              </div>

              <ul className="space-y-4 flex-1 mb-10">
                {s.features.map((f, j) => (
                  <li key={j} className="text-[0.95rem] text-gray-700 dark:text-gray-300 flex items-start gap-3">
                    <Check size={18} className="text-blue-600 dark:text-blue-500 mt-0.5 shrink-0" strokeWidth={2.5} />
                    <span className="font-medium">{f}</span>
                  </li>
                ))}
              </ul>

              <a href={GHL_LINK} target="_blank" rel="noopener noreferrer" className="mt-auto block">
                <Button variant="outline" className="w-full justify-between rounded-xl h-14 bg-transparent border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 group-hover:border-blue-200 dark:group-hover:border-blue-900/50 transition-colors">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">Book a Call</span>
                  <ArrowRight size={18} className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </Button>
              </a>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
