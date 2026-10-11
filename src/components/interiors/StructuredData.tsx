import { FEES, SITE_URL } from "@/config/site";
import { faqs, services } from "./content";

// Extends the Organization / ProfessionalService / WebSite graph in index.html (linked by @id)
// with data that must match what the page shows: services with live prices, and the FAQs.

const id = (fragment: string) => `${SITE_URL}/#${fragment}`;

const monthlyOffer = (price: number) => ({
  "@type": "Offer",
  price,
  priceCurrency: "INR",
  availability: "https://schema.org/InStock",
  priceSpecification: {
    "@type": "UnitPriceSpecification",
    price,
    priceCurrency: "INR",
    unitText: "MONTH",
    valueAddedTaxIncluded: false,
  },
});

const serviceNode = (name: string, description: string, price: number, fragment: string) => ({
  "@type": "Service",
  "@id": id(fragment),
  name,
  description,
  serviceType: name,
  provider: { "@id": id("organization") },
  areaServed: { "@type": "Country", name: "India" },
  audience: { "@type": "BusinessAudience", name: "Interior designers and architects" },
  offers: monthlyOffer(price),
});

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": id("webpage"),
      url: `${SITE_URL}/`,
      name: "Marketing for Interior Designers in India | Websphrex Media",
      description:
        "Instagram, Google profile, SEO and Meta lead ads for interior designers and architects in India. Get enquiries with real budgets. Free WhatsApp audit.",
      inLanguage: "en-IN",
      isPartOf: { "@id": id("website") },
      about: { "@id": id("service") },
      primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 },
      mainEntity: { "@id": id("faq") },
    },
    {
      "@id": id("service"),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Marketing services for interior designers",
        itemListElement: [
          ...services.map((s) => ({ "@type": "Offer", itemOffered: { "@id": id(`service-${s.key}`) } })),
          { "@type": "Offer", itemOffered: { "@id": id("service-complete") } },
        ],
      },
    },
    ...services.map((s) => serviceNode(`${s.title} for interior designers`, s.summary, FEES[s.key], `service-${s.key}`)),
    serviceNode(
      "Complete marketing package for interior designers",
      "Google profile & SEO, Instagram & Reels, and Meta & Google lead ads, handled by one team.",
      FEES.complete,
      "service-complete",
    ),
    {
      "@type": "FAQPage",
      "@id": id("faq"),
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

const StructuredData = () => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }} />
);

export default StructuredData;
