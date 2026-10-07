import ScrollReveal from "@/components/ScrollReveal";

const screenshots = [
  { imgUrl: "/cold email campaign - reply.jpg", caption: "6.89% reply rate on cold email campaign", label: "Cold Email Dashboard" },
  { imgUrl: "/Calander booked.jpg", caption: "25+ qualified meetings booked in 30 days", label: "Meeting Pipeline" },
  { imgUrl: "/Leads Generated.jpg", caption: "Consistent high-quality lead flow", label: "Lead Generation" },
  { imgUrl: "/Amount Spend.jpg", caption: "$200K+ in managed ad spend with positive ROAS", label: "Ad Performance" },
];

const ScreenshotResults = () => (
  <section className="py-20 md:py-28 relative z-20">
    <div className="container mx-auto px-6 md:px-8 max-w-6xl">
      <ScrollReveal>
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">Results in Action</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl font-medium">
            Real dashboards. Real numbers. Real results.
          </p>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {screenshots.map((s, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className="group overflow-hidden flex flex-col h-full bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-[1.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <div className="bg-gray-100 dark:bg-black flex-grow relative aspect-video overflow-hidden">
                <img 
                  src={s.imgUrl} 
                  alt={s.label} 
                  className="w-full h-full object-cover object-top opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                />
              </div>
              <div className="p-6 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] relative z-10">
                <h4 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500 mb-2">{s.label}</h4>
                <p className="text-gray-900 dark:text-gray-100 font-semibold">{s.caption}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ScreenshotResults;
