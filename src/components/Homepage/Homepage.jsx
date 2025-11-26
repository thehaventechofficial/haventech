'use client'
import { Button } from "../ui/button";
import { ArrowRight, Code, Smartphone, Cloud, Palette, Star } from "lucide-react";
import ServiceCard from "../ServiceCard";
import PortfolioCard from "../PortfolioCard";
import Navigation from "../Navigation";
import Footer from "../Footer";
import heroImage from "../../../public/assets/hero-bg.jpg";
import projectWeb from "../../../public/assets/project-web.jpg";
import projectMobile from "../../../public/assets/project-mobile.jpg";
import projectCloud from "../../../public/assets/project-cloud.jpg";
import Link from "next/link";

const Homepage = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and best practices.",
      link: "/services/web-development",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions for iOS and Android.",
      link: "/services/mobile-apps",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and seamless migration services.",
      link: "/services/cloud-solutions",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-centered design that drives engagement and conversion.",
      link: "/services/ui-ux-design",
    },
  ];

  const portfolioHighlights = [
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "/assets/project-web.jpg",
    },
    {
      id: "fitness-app",
      title: "Fitness Tracking App",
      category: "Mobile Development",
      image: "/assets/project-mobile.jpg",
    },
    {
      id: "cloud-migration",
      title: "Enterprise Cloud Migration",
      category: "Cloud Solutions",
      image: "/assets/project-cloud.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Diagonal stripe pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, hsl(var(--foreground)) 0px, hsl(var(--foreground)) 2px, transparent 2px, transparent 40px)`,
        }}></div>
        
        {/* Red accent shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10 text-center pt-20">
          <div className="max-w-5xl mx-auto animate-fade-in">
            <div className="inline-block mb-6 px-8 py-3 bg-secondary text-primary-foreground font-bold uppercase tracking-wider text-sm animate-fade-in border-l-4 border-primary">
              Digital Excellence
            </div>
            
            <h1 className="text-6xl md:text-8xl font-heading font-black mb-8 leading-[1.05] animate-fade-in uppercase" style={{ animationDelay: '0.1s' }}>
              Build.
              <br />
              <span className="text-primary">Launch.</span>
              <br />
              Dominate.
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in font-medium" style={{ animationDelay: '0.2s' }}>
              Bold solutions for ambitious brands. We create digital experiences that command attention and drive results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button asChild size="lg" className="text-lg px-10 py-7 font-bold uppercase tracking-wide shadow-glow hover:scale-105 transition-transform">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-10 py-7 font-bold uppercase tracking-wide border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
                <Link href="/portfolio">Our Work</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Geometric accent elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border-4 border-primary rotate-45 animate-float"></div>
        <div className="absolute bottom-32 right-20 w-16 h-16 bg-primary animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 border-4 border-accent animate-float" style={{ animationDelay: "0.5s" }}></div>
      </section>

      {/* Services Preview */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="rounded-full glass">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-20 gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our latest work and success stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {portfolioHighlights.map((project, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <PortfolioCard {...project} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/portfolio">View Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What our clients say about working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card p-6 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={18} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Haven Tech transformed our digital presence with their innovative approach and exceptional technical expertise. Highly recommended!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20"></div>
                  <div>
                    <p className="font-semibold">Client Name</p>
                    <p className="text-sm text-muted-foreground">CEO, Company</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="glass-card p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's work together to bring your digital vision to life
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">
                Work with Haven Tech
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;
