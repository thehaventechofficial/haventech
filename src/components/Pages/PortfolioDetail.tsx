'use client'
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import projectWeb from "../../../public/assets/project-web.jpg";
import projectMobile from "../../../public/assets/project-mobile.jpg";
import projectCloud from "../../../public/assets/project-cloud.jpg";
import { useParams } from "next/navigation";
import Link from "next/link";

const PortfolioDetail = () => {
  const { projectId } = useParams();

  const projectData: Record<string, any> = {
    "ecommerce-platform": {
      title: "E-Commerce Platform",
      category: "Web Development",
      client: "Retail Co.",
      year: "2024",
      image: '/assets/everyone.png',
      description: "A comprehensive e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
      challenge: "The client needed a scalable solution that could handle high traffic during peak seasons while maintaining fast page load times and a seamless checkout experience.",
      solution: "We implemented a microservices architecture with Redis caching, CDN integration, and optimized database queries. The result was a 60% improvement in page load times and 99.9% uptime.",
      results: [
        "250% increase in online sales",
        "60% faster page load times",
        "40% reduction in cart abandonment",
        "99.9% uptime during peak seasons",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    },
    "fitness-app": {
      title: "Fitness Tracking App",
      category: "Mobile Development",
      client: "FitLife Inc.",
      year: "2023",
      image: '/assets/cp.png',
      description: "A comprehensive fitness tracking mobile application with workout planning, nutrition tracking, and social features to keep users motivated.",
      challenge: "Creating an engaging mobile experience that works offline and syncs seamlessly when connectivity is restored.",
      solution: "Built with React Native for cross-platform compatibility, implemented offline-first architecture, and integrated with health APIs.",
      results: [
        "100K+ downloads in 3 months",
        "4.8-star rating on app stores",
        "35% daily active user rate",
        "Featured by Apple App Store",
      ],
      technologies: ["React Native", "Firebase", "GraphQL", "HealthKit", "Google Fit"],
    },
  };
// @ts-ignore
  const project = projectData[projectId || "ecommerce-platform"] || projectData["ecommerce-platform"];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-soft">
        <div className="container mx-auto px-4">
          <Link href="/portfolio" className="inline-flex items-center text-accent hover:underline mb-6 animate-fade-in">
            <ArrowLeft className="mr-2" size={20} />
            Back to Portfolio
          </Link>
          <div className="max-w-4xl animate-fade-in">
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="text-accent font-medium">{project.category}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">{project.client}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">{project.year}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-muted-foreground">{project.description}</p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="glass-card overflow-hidden max-w-5xl mx-auto animate-fade-in">
            <img src={project.image} alt={project.title} className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="glass-card p-8 animate-fade-in">
              <h2 className="text-3xl font-heading font-bold mb-4">The Challenge</h2>
              <p className="text-muted-foreground">{project.challenge}</p>
            </div>
            <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-3xl font-heading font-bold mb-4">Our Solution</h2>
              <p className="text-muted-foreground">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-8 text-center">Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.results.map((result: string, index: number) => (
                <div key={index} className="glass-card p-6 text-center hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <p className="text-lg font-semibold">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold mb-8">Technologies Used</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {project.technologies.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="glass-card px-6 py-3 text-foreground font-medium hover-scale animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-soft">
        <div className="container mx-auto px-4">
          <div className="glass-card p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Like What You See?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can create something similar for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full glass">
                <Link href="/portfolio">
                  View More Projects
                  <ExternalLink className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioDetail;
