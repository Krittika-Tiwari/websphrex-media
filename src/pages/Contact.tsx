import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const GHL_LINK = "https://api.leadconnectorhq.com/widget/bookings/growthifyu-discovery";

const Contact = () => {

  return (
    <Layout>
      <section className="section-padding relative">
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">Let's Talk Growth</h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-12">
              Book a free discovery call and let's map out your acquisition strategy.
            </p>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            {/* Booking Widget */}
            <ScrollReveal>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-6 text-center">Book a Discovery Call</h2>
                <div className="glass-card overflow-hidden">
                  <iframe
                    src={GHL_LINK}
                    className="w-full h-[600px]"
                    title="Book a Discovery Call"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
