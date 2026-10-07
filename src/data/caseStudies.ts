export interface CaseStudySection {
  title: string;
  content: string[];
}

export interface CaseStudy {
  slug: string;
  client: string;
  headline: string;
  tags: string[];
  description: string;
  challenge?: string;
  solution?: string;
  results?: string;
  testimonial: string;
  sections?: CaseStudySection[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "go-floaters",
    client: "Go Floaters",
    headline: "From Zero B2B Funnel to 20+ Sales Meetings in Under 30 Days",
    tags: ["Outbound", "GTM Strategy"],
    description: "Go Floaters had no B2B acquisition funnel. We built their entire GTM strategy from scratch — cold outreach, targeting, and messaging — and generated 20+ qualified sales meetings in less than 30 days.",
    testimonial: "Websphrex Media built our entire B2B acquisition engine from scratch. We went from zero pipeline to 20+ meetings in under 30 days. The results speak for themselves.",
    sections: [
      {
        title: "The Problem",
        content: [
          "GoFloaters was not facing a traffic problem. It was facing a lead relevance problem.",
          "The office space category naturally attracts mixed intent: companies looking for long-term office space, people searching for single desks, day pass users, hot desk seekers, and meeting room enquiries.",
          "Because of this, the funnel was pulling in a wider audience than the business actually wanted.",
          "That created 3 major issues: low-fit enquiries entering the pipeline, time wasted on irrelevant conversations, and weaker alignment between marketing and sales."
        ]
      },
      {
        title: "Objective",
        content: [
          "The goal was to improve the acquisition system so that GoFloaters could: attract more serious business enquiries, reduce irrelevant workspace requests, improve sales efficiency, and create a stronger path from enquiry to office discussion.",
          "This was not about generating more noise. It was about generating better-fit demand."
        ]
      },
      {
        title: "What We Fixed",
        content: [
          "1. Positioning: GoFloaters had to be presented clearly as a solution for: companies, team office requirements, monthly office space, long-term needs, expansion, relocation, or new office setup. This immediately created a clearer distinction between serious office seekers and casual workspace users.",
          "2. Qualification: The funnel needed to stop attracting broad workspace intent and start filtering for actual business requirements. The acquisition flow was tightened to better match real office need, team-based requirement, clearer buying intent, and business decision-makers. This helped reduce low-quality enquiries entering the system.",
          "3. Buyer Journey: Office search is not a quick purchase. It usually involves internal discussions, budget checks, location comparison, shortlist review, site visits, and decision-maker approval. Instead of pushing shallow conversions, the process was reworked to support a more serious and consultative decision path.",
          "4. Follow-Up: A lot of opportunities are lost after the first response. So the post-enquiry process was strengthened to ensure interested prospects did not go cold, follow-up became more consistent, and conversations moved forward with more control. This improved the chance of turning initial interest into actual business discussions.",
          "5. Reply and Objection Handling: Not every reply means the same thing. Some prospects are ready to talk. Others are interested but hesitant. A more structured handling process helped separate direct intent, curiosity, objections, and low-priority interest. This made the funnel more stable and reduced drop-off during early conversations."
        ]
      },
      {
        title: "Result",
        content: [
          "The result was a more focused acquisition system.",
          "Instead of feeding the pipeline with broad and mixed-quality demand, the funnel became better at attracting more relevant business enquiries, stronger office search intent, and better-fit prospects for the GoFloaters model.",
          "This improved the overall quality of conversations and reduced wasted effort on enquiries that were unlikely to convert."
        ]
      },
      {
        title: "Impact",
        content: [
          "The biggest shift was this: GoFloaters moved from a broad workspace enquiry funnel to a more qualified B2B office search funnel.",
          "That meant: cleaner lead flow, better marketing-to-sales alignment, less time spent on irrelevant leads, and stronger foundation for serious office conversations."
        ]
      },
      {
        title: "Conclusion",
        content: [
          "GoFloaters did not need a louder funnel. It needed a more accurate one.",
          "By improving positioning, qualification, buyer-journey alignment, follow-up, and early-stage handling, the acquisition process became more relevant, more efficient, and more useful from a business standpoint."
        ]
      }
    ]
  },
  {
    slug: "konnect-mojo",
    client: "Konnect Mojo",
    headline: "Building a Structured GTM Engine for Lead Generation, Demo Booking, and Sales Readiness",
    tags: ["GTM Strategy", "Lead Generation"],
    description: "KonnectMojo had a strong market opportunity and founder credibility, but needed a structured GTM engine. We built a full system to activate warm opportunities and generate scalable demand.",
    testimonial: "From launch strategy to 5,000+ leads and paying customers — Websphrex Media delivered on every front. They're not just an agency, they're a growth partner.",
    sections: [
      {
        title: "1. Situation & Problem",
        content: [
          "KonnectMojo had a strong market opportunity. The product solved real problems for interior designers and studios such as scattered enquiries, weak follow-up, poor project visibility, and operational chaos.",
          "Warm opportunities existed, but they needed proper CRM handling, tagging, follow-up discipline, and a clearer path to demo booking.",
          "The issue was not just lead volume. The bigger issue was that the GTM process was not yet fully structured across lead handling, follow-up, content deployment, webinar conversion, telecalling, demo flow, and sales support."
        ]
      },
      {
        title: "2. What We Set Out to Do",
        content: [
          "We worked to help KonnectMojo build a more organized GTM engine that could: activate warm opportunities better, generate fresh demand consistently, improve follow-up quality, strengthen market authority, and support sales with clearer backend systems.",
          "The GTM plan was built around five active tracks: Webinar Engine, Influencer & Industry Authority, Warm/Cold Calling & Outreach, LinkedIn Content Engine, and Sales Infrastructure."
        ]
      },
      {
        title: "3. Channels Used",
        content: [
          "Webinar Funnel: Webinars were used as the core demand generation and demo-booking channel. This included registration landing pages, live sessions, replay follow-up, and webinar-to-VSL repurposing.",
          "Meta Ads: Used to drive webinar registrations creatively with pain-based, educational, transformation-led, and urgency-led angles.",
          "Warm and Cold Calling: Calling was used to activate both warm and new lead pools, including IndiaWood lead follow-up and expansion into new outbound databases.",
          "WhatsApp Outreach: Integrated into the lead nurturing flow for webinar invites, reminder communication, and contact activation.",
          "LinkedIn Content: Used as the authority and trust-building channel with educational posts, testimonial content, founder-led authority posts, and lead magnet CTAs.",
          "Influencer & Industry Authority: Focused on influencer outreach and authority building through networks like FFSC and IIID."
        ]
      },
      {
        title: "4. Execution Process",
        content: [
          "Phase 1 - Foundation: We focused on cleaning up the base by locking webinar topics, preparing landing pages, onboarding telecallers, loading leads in CRM, and drafting the demo playbook.",
          "Phase 2 - Activation: Launched Meta webinar campaigns, started telecaller follow-up, began influencer outreach, scheduled LinkedIn content, and integrated WhatsApp.",
          "Phase 3 - Conversion Follow-Up: After each webinar, replay links were sent, offer communication pushed, telecallers followed up, and demos were booked.",
          "Phase 4 - Repurposing: Content was repurposed into VSL assets, clips, quote creatives, and educational content.",
          "Phase 5 - Expansion: Expanded into new database building, outbound contact creation, deeper collaboration, and stronger cross-channel execution."
        ]
      },
      {
        title: "5. Key Challenges We Helped Remove",
        content: [
          "1. Warm leads were not being worked through a tight enough process.",
          "2. Follow-up depended too much on people, not process.",
          "3. Content needed to support growth, not just visibility.",
          "4. Marketing and sales needed better connection.",
          "5. Sales readiness needed improvement."
        ]
      },
      {
        title: "6. Outcome & Conclusion",
        content: [
          "The biggest outcome was not just more activity. It was a more structured GTM system.",
          "By aligning webinars, Meta ads, telecalling, WhatsApp follow-up, LinkedIn content, authority-building efforts, and sales support, KonnectMojo moved toward a more organized growth engine.",
          "KonnectMojo did not need another disconnected campaign. It needed a proper GTM structure. Through this engagement, growth moved from scattered effort to a repeatable system."
        ]
      }
    ]
  },
  {
    slug: "herbal-groups",
    client: "Herbal Groups",
    headline: "How Herbal Groups Used Google Ads to Drive High-Intent Calls and Sales",
    tags: ["Paid Ads", "Google Ads", "E-commerce"],
    description: "Herbal Groups focused on products designed to support testosterone improvement. We brought in people actively searching for a solution, turned that demand into qualified inbound calls, and converted those calls into sales.",
    testimonial: "They managed over $100K in ad spend for us and consistently delivered strong ROAS. Professional, data-driven, and always optimizing.",
    sections: [
      {
        title: "The Challenge",
        content: [
          "Herbal Groups operates in a category where customer intent matters a lot.",
          "This is not an impulse-buy product. In many cases, people want clarity before making a decision. They want to understand the product, ask questions, and feel confident before taking the next step.",
          "You can spend money driving clicks, but clicks alone do not build revenue. The real challenge was building a system that could: attract the right search intent, generate meaningful phone calls, convert those calls into sales, and measure performance based on business outcomes."
        ]
      },
      {
        title: "The Strategy",
        content: [
          "To solve that, we used Google Ads as the primary acquisition channel.",
          "Google Search allows you to appear in front of people at the moment they are actively looking for a solution. That gives you access to stronger intent than most interruption-based channels.",
          "The campaign focused on three things: 1. Intent-first targeting, 2. Call-driven conversion, 3. Revenue-focused decision making."
        ]
      },
      {
        title: "What We Did",
        content: [
          "Search-Led Customer Acquisition: We built the campaign around search demand. This allowed Herbal Groups to reach potential customers at the point where they were already looking for help.",
          "Focus on Calls Over Vanity Metrics: For this business, the phone call was a critical conversion point. A call is a much stronger signal than a casual click because it shows the prospect is willing to take action. It was structured as a call-generation engine designed to produce real sales conversations.",
          "Optimization Around Business Outcomes: The campaign was managed with a performance mindset. Decisions were not based only on impressions or clicks, but on whether quality calls were being generated, turning into sales, and producing revenue."
        ]
      },
      {
        title: "The Results",
        content: [
          "The campaign helped Herbal Groups build a stronger and more measurable acquisition system through Google Ads.",
          "Key outcomes included: 1,268+ qualified calls, 257 sales, $42.9K+ in tracked revenue, $26.5K+ in ad spend, and 1.62x observed return on ad spend.",
          "These results show that the campaign was doing more than generating attention. It was driving inbound intent, creating real sales opportunities, and producing measurable revenue from search traffic."
        ]
      },
      {
        title: "Why This Worked",
        content: [
          "The Channel Matched the Buyer Intent: Google Ads captured users already in the market.",
          "The Conversion Path Matched the Product: For Herbal Groups, a phone call was not friction. It was part of the sales process to help bridge the gap between interest and action.",
          "The Campaign Was Managed Like a Sales System: The campaign was treated like a revenue system, with focus placed on qualified calls, sales activity, and return rather than empty performance signals."
        ]
      },
      {
        title: "Challenges We Helped Solve & Conclusion",
        content: [
          "Challenges solved included unqualified traffic, weak conversion quality, disconnected reporting, and inconsistent revenue generation.",
          "Herbal Groups did not need more random traffic. It needed a customer acquisition system that could convert search intent into real conversations and sales. By using Google Ads as a high-intent acquisition channel and building the campaign around call-driven conversion, Herbal Groups generated qualified inbound demand and increased sales opportunities."
        ]
      }
    ]
  },
  {
    slug: "prime-home-safety",
    client: "Prime Home Safety",
    headline: "Driving High-Intent Inbound Calls for a US Home Security Offer with Google Ads",
    tags: ["Paid Ads", "Google Ads", "Lead Generation"],
    description: "Prime Home Safety was one of the security offers we managed under a broader home security advertising account in the US. The objective was straightforward: generate inbound phone calls from homeowners actively looking for security solutions, then route that traffic into the call handling and sales process efficiently.",
    testimonial: "Prime Home Safety generated a steady stream of inbound call activity through Google Ads... The backend results showed that while not every call converted, the campaign was capable of producing genuine sales outcomes, not just empty lead volume.",
    sections: [
      {
        title: "The Challenge",
        content: [
          "The home security space is highly competitive, and call-driven lead generation in this category comes with a lot of waste if the campaign is not controlled properly.",
          "The account had to deal with the usual friction that comes with this market: low-intent callers, missed calls and dropped calls, no-answer traffic, irrelevant or unqualified enquiries, and call handling dependency after the lead is generated.",
          "In other words, generating calls alone was not enough. The real challenge was producing usable call volume while keeping the campaign aligned with actual business outcomes."
        ]
      },
      {
        title: "What We Did",
        content: [
          "We ran Google Ads with a call-generation focus, built around capturing intent from users already searching for home safety and security-related solutions.",
          "Our work centered around three things:",
          "1. Intent-Driven Traffic Acquisition: We focused on bringing in people who were already in-market rather than trying to force demand from cold audiences. This helped keep the campaign aligned with action, not just clicks.",
          "2. Call-Focused Lead Flow: The campaign strategy was structured around generating phone enquiries directly, so the account could move prospects into conversations faster instead of depending entirely on long-form lead nurturing.",
          "3. Ongoing Quality Monitoring: This mattered a lot. The backend data clearly showed a mix of outcomes across the call flow, including no answers, hang-ups, transferred calls, callbacks, foreign-language calls, and completed sales. That meant campaign management could not be handled blindly. We had to watch quality patterns, not just top-level volume."
        ]
      },
      {
        title: "The Outcome",
        content: [
          "Prime Home Safety generated a steady stream of inbound call activity through Google Ads, including: transferred calls, callback opportunities, direct sales, and validated engagement from real homeowners across multiple US locations.",
          "The backend results showed that while not every call converted, the campaign was capable of producing genuine sales outcomes, not just empty lead volume. That is the difference between a campaign that looks active and one that is commercially useful."
        ]
      },
      {
        title: "Why This Worked",
        content: [
          "What made this campaign effective was not just ad delivery. It was the combination of: matching search intent with the right acquisition channel, using a direct-response call model, and continuously evaluating lead quality after the click.",
          "In competitive service categories like home security, you do not win by chasing cheap leads. You win by building a system that can consistently generate real conversations and absorb the operational noise that comes with call-based acquisition.",
          "Prime Home Safety is a strong example of how Google Ads can be used not just to drive traffic, but to create a predictable inbound call engine for a security-focused offer."
        ]
      }
    ]
  },
  {
    slug: "global-home-safety",
    client: "Global Home Safety",
    headline: "Scaling Call-Based Lead Generation for a Second Home Security Offer in the US",
    tags: ["Paid Ads", "Google Ads", "Lead Generation"],
    description: "Global Home Safety was the second security offer we managed within the same broader advertising environment. The goal was to generate inbound phone calls from homeowners looking for security solutions and convert that search demand into qualified call opportunities.",
    testimonial: "The campaign data clearly showed that the offer was able to generate more than just raw call traffic. It produced actionable opportunities and closed outcomes, even within a noisy lead environment.",
    sections: [
      {
        title: "The Challenge",
        content: [
          "By the time Global Home Safety was being pushed, the reality was already clear: call campaigns in this category attract a wide range of outcomes.",
          "Some callers are highly ready to buy. Others drop off, hang up, call by mistake, or never make it through the full process. That means scaling a campaign like this is not just about increasing budget. It requires a setup that can tolerate noise while still producing real business value.",
          "The main challenge was balancing volume with quality."
        ]
      },
      {
        title: "Our Approach",
        content: [
          "We used Google Ads as the primary acquisition channel and built the campaign around inbound call generation.",
          "The work was focused on three layers:",
          "1. Capturing Existing Demand: Instead of relying on broad awareness messaging, the campaign targeted users already searching with intent. This is critical in a service like home security, where urgency and trust play a major role in conversion.",
          "2. Building for Call Action, Not Passive Traffic: The objective was not just clicks to a page. The campaign was designed to generate direct call activity, helping the business move prospects into sales conversations faster.",
          "3. Reading the Backend, Not Just the Frontend: The call sheet showed a realistic mix of outcomes: transferred calls, callback requests, wrong numbers, dropped calls, not-interested responses, and completed sales. That backend visibility helped separate surface-level lead volume from actual commercial traction."
        ]
      },
      {
        title: "The Outcome",
        content: [
          "Global Home Safety generated inbound calls across multiple states in the US and produced a mix of: successful call transfers, sales-qualified conversations, direct sales, and repeat indicators of genuine market demand.",
          "The campaign data clearly showed that the offer was able to generate more than just raw call traffic. It produced actionable opportunities and closed outcomes, even within a noisy lead environment."
        ]
      },
      {
        title: "What This Case Proves",
        content: [
          "Global Home Safety reinforces an important point: in call-driven Google Ads campaigns, performance is not about vanity numbers.",
          "A campaign is only useful if it can: generate real inbound intent, move prospects into conversation quickly, and survive low-quality traffic without collapsing overall efficiency.",
          "That is what this project demonstrated.",
          "For security and home-service offers, Google Ads can become a strong acquisition channel when the campaign is built around intent, monitored through backend call outcomes, and optimized with business reality in mind rather than platform-level optimism."
        ]
      }
    ]
  }
];
