import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-transparent pt-24 pb-12">
    <div className="container mx-auto px-6 md:px-8 max-w-6xl">
      <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8 mb-24">
        
        {/* Brand */}
        <div className="md:w-1/3">
          <Link to="/" className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white block mb-2">
            Websphrex Media
          </Link>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-6">
            Your client acquisition partner.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com/in/shantanu-shrivastava07/" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:shantanu@growthifyu.com" className="text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 md:w-2/3 justify-end">

          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-1">Services</span>
            <a href="#services" className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Cold Email Outreach</a>
            <a href="#services" className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">LinkedIn Outbound</a>
            <a href="#services" className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Paid Advertising</a>
            <a href="#services" className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Content Systems</a>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-1">Global Locations</span>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Kondapur, Hyderabad, India (HQ)</span>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">London, UK</span>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Dubai, UAE</span>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Wyoming, USA</span>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-400 dark:text-gray-500 font-medium">© {new Date().getFullYear()} Websphrex Media. All rights reserved.</p>
        <div className="flex gap-8">
          <span className="text-sm font-medium text-gray-400 dark:text-gray-500 cursor-pointer hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</span>
          <span className="text-sm font-medium text-gray-400 dark:text-gray-500 cursor-pointer hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
