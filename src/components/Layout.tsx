import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col relative">
    <div className="stars-grid-wrapper">
      <div className="stars-glow-1"></div>
      <div className="stars-glow-2"></div>
      <div className="stars-glow-3"></div>
    </div>
    <Navbar />
    <main className="flex-1 pt-16 md:pt-20 relative z-0">{children}</main>
    <Footer />
  </div>
);

export default Layout;
