import { Phone } from "lucide-react";
import { WHATSAPP_NUMBER, whatsappLink } from "@/config/site";
import { WhatsAppIcon } from "./shared";

const message = "Hi Websphrex, I'm an interior designer and would like to know more.";

/** Phone: a WhatsApp / Call bar pinned to the bottom. Desktop: a single floating WhatsApp button. */
const ContactBar = () => (
  <>
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-charcoal/15 bg-bone/95 font-body text-[14px] font-medium backdrop-blur md:hidden">
      <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center justify-center gap-2 py-4 text-charcoal">
        <Phone className="h-4 w-4" strokeWidth={1.5} /> Call
      </a>
      <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#1F7A4D] py-4 text-white">
        <WhatsAppIcon /> WhatsApp
      </a>
    </div>
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Websphrex on WhatsApp"
      className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#1F7A4D] text-white shadow-lg transition-transform hover:scale-105 md:flex"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  </>
);

export default ContactBar;
