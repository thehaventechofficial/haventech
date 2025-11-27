'use client'
import { Button } from "../ui/button";
import { ArrowRight, Code, Smartphone, Cloud, Palette, Star } from "lucide-react";
import ServiceCard from "../ServiceCard";
import PortfolioCard from "../PortfolioCard";
import Navigation from "../Navigation";
import Footer from "../Footer";
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
      image: "/assets/hybridify.png",
    },
    {
      id: "fitness-app",
      title: "Fitness Tracking App",
      category: "Mobile Development",
      image: "/assets/cp.png",
    },
    {
      id: "cloud-migration",
      title: "Enterprise Cloud Migration",
      category: "Cloud Solutions",
      image: "/assets/everyone.png",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, hsl(var(--foreground)) 0px, hsl(var(--foreground)) 2px, transparent 2px, transparent 40px)`,
        }}></div>

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

        <div className="absolute top-20 left-10 w-20 h-20 border-4 border-primary rotate-45 animate-float"></div>
        <div className="absolute bottom-32 right-20 w-16 h-16 bg-primary animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 border-4 border-accent animate-float" style={{ animationDelay: "0.5s" }}></div>
      </section>

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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Client Testimonials</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A glimpse of what our project partners say about working with us
            </p>
          </div>


          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Complete Pakistan */}
            <div className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all bg-gray-50/40 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Complete Pakistan</h3>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-yellow-500">
                    <path d="M12 .587l3.668 7.568L24 9.748l-6 5.848L19.335 24 12 19.897 4.665 24 6 15.596 0 9.748l8.332-1.593z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "Haven Tech delivered a clean, scalable, and modern digital platform for our business.
                Their team is professional and truly understands long-term partnership."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Zeeshan</p>
                <p className="text-sm text-gray-500">CEO, Complete Pakistan</p>
              </div>
            </div>


            {/* Everyone.World */}
            <div className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all bg-gray-50/40 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Everyone.World</h3>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-yellow-500">
                    <path d="M12 .587l3.668 7.568L24 9.748l-6 5.848L19.335 24 12 19.897 4.665 24 6 15.596 0 9.748l8.332-1.593z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "The Haven Tech team exceeded expectations with technical excellence and smooth execution.
                Their dedication made our project journey seamless."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Damoun Dolat</p>
                <p className="text-sm text-gray-500">CEO, Everyone.World</p>
              </div>
            </div>

            {/* Kafela */}
            <div className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all bg-gray-50/40 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Kafela</h3>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-yellow-500">
                    <path d="M12 .587l3.668 7.568L24 9.748l-6 5.848L19.335 24 12 19.897 4.665 24 6 15.596 0 9.748l8.332-1.593z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "Working with Haven Tech has been a turning point. Their design thinking and engineering quality
                helped us build a much stronger platform."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Rakibul Hasan</p>
                <p className="text-sm text-gray-500">CEO, Kafela</p>
              </div>
            </div>
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
