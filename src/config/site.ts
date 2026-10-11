// Everything the studio still needs to confirm lives here, so the page never has to be edited for it.

// TODO: replace with the live domain (also update index.html, public/robots.txt and public/sitemap.xml).
export const SITE_URL = "https://websphrexmedia.com";

// TODO: replace with the studio's WhatsApp number, digits only with country code (e.g. "919812345678").
export const WHATSAPP_NUMBER = "910000000000";

// TODO: replace with the number shown on the site.
export const PHONE_DISPLAY = "+91 00000 00000";

export const BOOKING_LINK = "https://api.leadconnectorhq.com/widget/bookings/growthifyu-discovery";

// TODO: replace with the studio's real address.
export const EMAIL = "hello@websphrexmedia.com";

export const CITIES = ["Mumbai", "Delhi NCR", "Bengaluru", "Hyderabad", "Pune", "Ahmedabad", "Chennai", "Kolkata"];

// Founding-client offer: lower `remaining` as designers sign.
export const FOUNDING_SPOTS = { total: 5, remaining: 5 };

// TODO: placeholder monthly fees in rupees, before GST. Replace with confirmed fees before launch.
export const FEES = {
  google: 25000,
  instagram: 35000,
  ads: 30000,
  complete: 75000,
} as const;

export type FeeKey = keyof typeof FEES;

export const formatFee = (key: FeeKey) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(FEES[key]);

export const whatsappLink = (text?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
