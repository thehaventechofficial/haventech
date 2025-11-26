'use client'
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import PortfolioCard from "../../components/PortfolioCard";
import projectWeb from "../../../public/assets/project-web.jpg";
import projectMobile from "../../../public/assets/project-mobile.jpg";
import projectCloud from "../../../public/assets/project-cloud.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      category: "Web Development",
      image: '/assets/project-web.jpg',
    },
    {
      id: "fitness-app",
      title: "Fitness Tracking App",
      category: "Mobile Development",
      image: '/assets/project-mobile.jpg',
    },
    {
      id: "cloud-migration",
      title: "Enterprise Cloud Migration",
      category: "Cloud Solutions",
      image: '/assets/project-cloud.jpg',
    },
    {
      id: "fintech-dashboard",
      title: "FinTech Analytics Dashboard",
      category: "Web Development",
      image: '/assets/project-web.jpg',
    },
    {
      id: "healthcare-app",
      title: "Healthcare Management App",
      category: "Mobile Development",
      image: '/assets/project-mobile.jpg',
    },
    {
      id: "saas-platform",
      title: "SaaS Platform Redesign",
      category: "UI/UX Design",
      image: '/assets/project-cloud.jpg',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground">
              Explore our latest projects and see how we've helped businesses achieve their digital goals
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <PortfolioCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-soft">
        <div className="container mx-auto px-4">
          <div className="glass-card p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Have a Project in Mind?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's create something amazing together
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-accent text-accent-foreground px-8 py-3 font-medium hover:opacity-90 transition-opacity"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
