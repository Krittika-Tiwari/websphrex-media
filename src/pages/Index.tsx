import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import LogoStrip from "@/components/home/LogoStrip";
import MetricsSection from "@/components/home/MetricsSection";
import ProblemSection from "@/components/home/ProblemSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ScreenshotResults from "@/components/home/ScreenshotResults";
import PlaybookSection from "@/components/home/PlaybookSection";
import CTABlock from "@/components/CTABlock";

const Index = () => (
  <Layout>
    <HeroSection />
    <LogoStrip />
    <MetricsSection />
    <ProblemSection />
    <ServicesSection />
    <ProcessSection />
    <CaseStudiesPreview />
    <TestimonialsSection />
    <ScreenshotResults />
    <PlaybookSection />
    <CTABlock />
  </Layout>
);

export default Index;
