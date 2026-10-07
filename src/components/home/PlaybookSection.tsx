import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MultiChannelArticle } from "./MultiChannelArticle";
import { ColdEmailArticle } from "./ColdEmailArticle";
import { CrmSetupArticle } from "./CrmSetupArticle";
import { PaidAdsArticle } from "./PaidAdsArticle";
import { SaasGtmArticle } from "./SaasGtmArticle";
import { LinkedinArticle } from "./LinkedinArticle";

const articles = [
  {
    category: "Outbound",
    title: "The 2026 Cold Email Playbook: How to Land in Inboxes & Book Meetings",
    date: "2026",
    content: <ColdEmailArticle />,
  },
  {
    category: "Strategy",
    title: "Multi-Channel vs. Single-Channel: Why One-Trick Agencies Fail in 2026",
    date: "2026",
    content: <MultiChannelArticle />,
  },
  {
    category: "RevOps",
    title: "CRM Setup Guide: Building a Pipeline That Actually Converts",
    date: "2026",
    content: <CrmSetupArticle />,
  },
  {
    category: "Paid Ads",
    title: "Meta & Google Ads in 2026: What's Working for B2B Right Now",
    date: "2026",
    content: <PaidAdsArticle />,
  },
  {
    category: "GTM",
    title: "SaaS Go-to-Market Launch: From Zero to First 100 Customers",
    date: "2026",
    content: <SaasGtmArticle />,
  },
  {
    category: "LinkedIn",
    title: "LinkedIn Outbound in 2026: DMs That Get Replies, Not Ignored",
    date: "2026",
    content: <LinkedinArticle />,
  },
];

const PlaybookCard = ({ a }: { a: any }) => (
  <div className="glass-card p-6 hover-lift group cursor-pointer h-full flex flex-col text-left">
    <span className="text-xs font-bold text-accent uppercase tracking-widest mb-3">{a.category}</span>
    <h3 className="text-base font-semibold text-foreground mb-4 leading-snug flex-1 group-hover:text-accent transition-colors">
      {a.title}
    </h3>
    <div className="flex items-center justify-between">
      <span className="text-xs text-muted-foreground">{a.date}</span>
      <ArrowRight size={14} className="text-muted-foreground group-hover:text-accent transition-colors" />
    </div>
  </div>
);

const PlaybookSection = () => (
  <section className="section-padding relative">
    <div className="absolute inset-0 grid-pattern opacity-10" />
    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">The Playbook</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          Insights, frameworks, and strategies from the front lines of client acquisition.
        </p>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {articles.map((a, i) => (
          <ScrollReveal key={i} delay={i * 60}>
            {a.content ? (
              <Dialog>
                <DialogTrigger asChild>
                  <div className="h-full">
                    <PlaybookCard a={a} />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold mb-4">{a.title}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    {a.content}
                  </div>
                </DialogContent>
              </Dialog>
            ) : (
              <PlaybookCard a={a} />
            )}
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default PlaybookSection;
