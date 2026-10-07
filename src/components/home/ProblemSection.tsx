import { MessageSquareOff, MailX, Flame, Puzzle, UserX, Target } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const painPoints = [
  { icon: MessageSquareOff, text: "You're posting 5x a week. Zero calls booked." },
  { icon: MailX, text: "Your cold emails get 0.3% replies (if they even land)." },
  { icon: Flame, text: "You've burned $10K on ads. Got clicks, not clients." },
  { icon: Puzzle, text: "You're running 6 channels. None of them talk to each other." },
  { icon: UserX, text: "You're the CEO, marketer, and SDR. You can't scale yourself." },
  { icon: Target, text: "Your CRM has 500 'leads.' Your calendar has 2 meetings." },
];

const ProblemSection = () => (
  <section className="py-24 md:py-32 relative overflow-hidden">
    <div className="container mx-auto px-6 md:px-8 max-w-7xl">
      <ScrollReveal>
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <div className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-800 px-3 py-1 text-xs font-semibold tracking-wide uppercase mb-6 bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400">
            The Reality
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Sound Familiar?</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            Most businesses struggle with fragmented acquisition efforts. Here's what we hear every single day from founders.
          </p>
        </div>
      </ScrollReveal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {painPoints.map((p, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className="group relative bg-white dark:bg-[#0a0a0a] backdrop-blur-sm border border-gray-200 dark:border-gray-800 p-8 md:p-10 rounded-[2rem] transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 dark:hover:shadow-blue-500/10 hover:-translate-y-2 hover:border-gray-300 dark:hover:border-gray-700 overflow-hidden">
              
              {/* Subtle hover gradient flare */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5 dark:to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-gray-900 flex items-center justify-center mb-8 border border-gray-100 dark:border-gray-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:border-blue-100 dark:group-hover:border-blue-800 transition-colors duration-500">
                  <p.icon size={26} className="text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <p className="text-gray-900 dark:text-gray-100 text-[1.1rem] font-medium leading-[1.6] tracking-tight">{p.text}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
