'use client'
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ServiceCard from "../../components/ServiceCard";
import { Code, Smartphone, Cloud, Palette, Database, Shield } from "lucide-react";

const Servicespage = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with React, Vue, and modern frameworks. Responsive, fast, and scalable solutions.",
      link: "/services/web-development",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
      link: "/services/mobile-apps",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "AWS, Azure, and Google Cloud infrastructure design, migration, and optimization services.",
      link: "/services/cloud-solutions",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality for exceptional user experiences.",
      link: "/services/ui-ux-design",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust API development, database design, and server-side architecture using Node.js, Python, and more.",
      link: "/services/backend-development",
    },
    {
      icon: Shield,
      title: "Security & DevOps",
      description: "Comprehensive security audits, CI/CD pipeline setup, and DevOps best practices implementation.",
      link: "/services/security-devops",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive digital solutions designed to help your business thrive in the modern world
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology for delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs and goals" },
              { step: "02", title: "Design", description: "Creating beautiful, functional solutions" },
              { step: "03", title: "Development", description: "Building with cutting-edge technology" },
              { step: "04", title: "Launch", description: "Deploying and optimizing for success" },
            ].map((phase, index) => (
              <div key={index} className="glass-card p-6 text-center hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl font-heading font-bold text-accent mb-3">{phase.step}</div>
                <h3 className="text-xl font-heading font-semibold mb-2">{phase.title}</h3>
                <p className="text-muted-foreground text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicespage;
