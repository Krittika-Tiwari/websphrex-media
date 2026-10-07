import Layout from "@/components/Layout";
import CTABlock from "@/components/CTABlock";
import ServicesSection from "@/components/home/ServicesSection";

const Services = () => (
  <Layout>
    <div className="pt-16 md:pt-24">
      <ServicesSection />
    </div>
    <CTABlock showEmbed />
  </Layout>
);

export default Services;
