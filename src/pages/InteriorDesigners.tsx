import { useEffect } from "react";
import Masthead from "@/components/interiors/Masthead";
import Hero from "@/components/interiors/Hero";
import Letter from "@/components/interiors/Letter";
import SampleWork from "@/components/interiors/SampleWork";
import AuditForm from "@/components/interiors/AuditForm";
import Services from "@/components/interiors/Services";
import WhyUs from "@/components/interiors/WhyUs";
import Process from "@/components/interiors/Process";
import Questions from "@/components/interiors/Questions";
import Closing from "@/components/interiors/Closing";
import ContactBar from "@/components/interiors/ContactBar";
import StructuredData from "@/components/interiors/StructuredData";

const InteriorDesigners = () => {
  useEffect(() => {
    document.title = "Marketing for Interior Designers in India | Websphrex Media";
  }, []);

  return (
    <div className="min-h-screen bg-bone pb-14 font-body text-charcoal antialiased md:pb-0">
      <Masthead />
      <main id="main">
        <Hero />
        <Letter />
        <SampleWork />
        <AuditForm />
        <Services />
        <WhyUs />
        <Process />
        <Questions />
      </main>
      <Closing />
      <ContactBar />
      <StructuredData />
    </div>
  );
};

export default InteriorDesigners;
