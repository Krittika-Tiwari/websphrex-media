// Page copy that is also published as structured data, kept in one place so the two never drift.
import { FeeKey } from "@/config/site";

export const services: { key: FeeKey; number: string; title: string; summary: string; includes: string[]; note?: string }[] = [
  {
    key: "google",
    number: "01",
    title: "Google Profile & SEO",
    summary:
      "When someone searches “interior designer in Bandra” or “luxury interiors Gurgaon”, your studio should be in the top three, with photos and reviews that do your work justice.",
    includes: [
      "Google Business Profile set up, photographed and updated every week",
      "A simple plan to collect more 5-star Google reviews",
      "Project pages on your website that show up in search",
    ],
  },
  {
    key: "instagram",
    number: "02",
    title: "Instagram & Reels",
    summary:
      "Instagram is where homeowners shortlist designers. We plan, edit and post your content, so your feed looks as premium as your projects.",
    includes: [
      "12 Reels and 8 posts a month, planned around your projects",
      "Site shoots and walkthroughs edited by us",
      "Replies to DMs and comments, so no enquiry is missed",
    ],
  },
  {
    key: "ads",
    number: "03",
    title: "Meta & Google Lead Ads",
    summary:
      "Ads shown only to homeowners in your target areas, with a short form that asks about budget and possession date, so you only call people who are serious.",
    includes: [
      "Instagram, Facebook and Google ad campaigns",
      "Budget filter on every enquiry — no “per sq ft” shoppers",
      "Enquiries sent straight to your WhatsApp",
    ],
    note: "Ad budget is paid directly to Meta or Google from your account, separate from our fee.",
  },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "Do you guarantee leads?",
    a: "No honest agency can guarantee leads, and you should be careful of anyone who does. What we promise is clear work, a monthly report on real enquiries, and no long lock-in if it isn't working.",
  },
  {
    q: "How soon will I start getting enquiries?",
    a: "Ads can bring enquiries within 2–4 weeks. Instagram usually takes 2–3 months to build. Google search takes 3–6 months. We'll give you a realistic picture for your city in the free audit.",
  },
  {
    q: "I don't have professional photos. Is that a problem?",
    a: "Not at all. Phone videos from your site work well for Reels, and we'll guide you on what to shoot. When you're ready, we can connect you with interiors photographers in major cities.",
  },
  {
    q: "Is there a lock-in period?",
    a: "Only 3 months to start, because good marketing needs that long to show results. After that it's month to month.",
  },
  {
    q: "Is GST extra? Can I pay quarterly?",
    a: "Yes, all fees are + 18% GST, and you'll get a proper GST invoice. You can pay monthly, or quarterly in advance.",
  },
  {
    q: "Do you work with architects and modular / furniture brands?",
    a: "Yes — architects, interior designers, turnkey contractors and premium furniture or kitchen studios.",
  },
  {
    q: "Will you work with my competitors?",
    a: "Not in your area. We take only one designer per locality, so we're never marketing two studios against each other.",
  },
  {
    q: "Who owns my Instagram, ads account and content?",
    a: "You do, always. If we ever stop working together, everything stays with you.",
  },
];
