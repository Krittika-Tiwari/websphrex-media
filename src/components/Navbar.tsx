import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Contact", path: "/contact" },
];

const GHL_LINK = "https://api.leadconnectorhq.com/widget/bookings/growthifyu-discovery";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:pt-6 pointer-events-none flex justify-center">
      <nav
        className={`pointer-events-auto w-full max-w-6xl transition-all duration-300 rounded-2xl border ${
          scrolled || mobileOpen
            ? "bg-background/85 backdrop-blur-xl border-border shadow-lg"
            : "bg-background/40 backdrop-blur-md border-border/50 shadow-sm"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 md:px-8">
          <Link to="/" className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
            Websphrex Media
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-foreground ${
                  location.pathname === link.path ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href={GHL_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="accent" size="sm" className="rounded-full px-6">Book a Call</Button>
            </a>
          </div>

          <button
            className="md:hidden text-foreground p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-6 pt-2 flex flex-col gap-4 border-t border-border/50">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium py-2 transition-colors ${
                  location.pathname === link.path ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href={GHL_LINK} target="_blank" rel="noopener noreferrer" className="mt-2">
              <Button variant="accent" size="lg" className="w-full rounded-xl">Book a Call</Button>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
