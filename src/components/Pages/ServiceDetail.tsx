'use client'
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import { useParams } from "next/navigation";
import Link from "next/link";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const serviceData: Record<string, any> = {
    "web-development": {
      title: "Web Development",
      description: "Build powerful, scalable web applications with modern technologies",
      features: [
        "Custom web application development",
        "Responsive design for all devices",
        "Progressive Web Apps (PWA)",
        "Single Page Applications (SPA)",
        "E-commerce solutions",
        "Content Management Systems",
      ],
      benefits: [
        "Fast loading times and optimal performance",
        "SEO-friendly architecture",
        "Scalable and maintainable codebase",
        "Cross-browser compatibility",
        "Security best practices",
      ],
    },
    "mobile-apps": {
      title: "Mobile App Development",
      description: "Create engaging mobile experiences for iOS and Android",
      features: [
        "Native iOS and Android development",
        "Cross-platform solutions with React Native",
        "App Store optimization",
        "Push notifications and analytics",
        "Offline functionality",
        "Third-party API integrations",
      ],
      benefits: [
        "Reach users on their preferred devices",
        "Native performance and user experience",
        "Reduced development costs with cross-platform",
        "Easy maintenance and updates",
        "Enhanced user engagement",
      ],
    },
    "cloud-solutions": {
      title: "Cloud Solutions",
      description: "Leverage the power of cloud computing for your business",
      features: [
        "Cloud architecture design",
        "AWS, Azure, and GCP services",
        "Cloud migration strategies",
        "Serverless computing",
        "Auto-scaling and load balancing",
        "Cost optimization",
      ],
      benefits: [
        "Reduced infrastructure costs",
        "Improved scalability and flexibility",
        "Enhanced security and compliance",
        "99.9% uptime guarantee",
        "Global content delivery",
      ],
    },
    "ui-ux-design": {
      title: "UI/UX Design",
      description: "Create beautiful, intuitive user experiences that drive results",
      features: [
        "User research and personas",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Usability testing",
        "Design systems",
        "Accessibility compliance",
      ],
      benefits: [
        "Increased user satisfaction",
        "Higher conversion rates",
        "Reduced development costs",
        "Consistent brand experience",
        "Improved user retention",
      ],
    },
  };
  // @ts-ignore
  const service = serviceData[serviceId || "web-development"] || serviceData["web-development"];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-soft">
        <div className="container mx-auto px-4">
          <Link href="/services" className="inline-flex items-center text-accent hover:underline mb-6 animate-fade-in">
            <ArrowLeft className="mr-2" size={20} />
            Back to Services
          </Link>
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-muted-foreground">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-8">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.features.map((feature: string, index: number) => (
                <div key={index} className="glass-card p-6 flex items-start gap-4 hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                    <Check className="text-accent" size={16} />
                  </div>
                  <p className="text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-8">Key Benefits</h2>
            <div className="space-y-4">
              {service.benefits.map((benefit: string, index: number) => (
                <div key={index} className="glass-card p-6 flex items-center gap-4 hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-foreground text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass-card p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help bring your project to life
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
