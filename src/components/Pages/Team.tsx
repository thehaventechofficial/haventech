'use client'
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import TeamCard from "../../components/TeamCard";
import team1 from "../../../public/assets/team-1.jpg";
import team2 from "../../../public/assets/team-2.jpg";
import team3 from "../../../public/assets/team-3.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: '/assets/team-1.jpg',
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "sarah@haventech.com",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: '/assets/team-2.jpg',
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "michael@haventech.com",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image: '/assets/team-3.jpg',
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "emily@haventech.com",
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      image: '/assets/team-1.jpg',
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "david@haventech.com",
    },
    {
      name: "Lisa Anderson",
      role: "Product Manager",
      image: '/assets/team-2.jpg',
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "lisa@haventech.com",
    },
    {
      name: "James Wilson",
      role: "Senior Designer",
      image: '/assets/team-3.jpg',
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "james@haventech.com",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl text-muted-foreground">
              Talented individuals working together to create exceptional digital experiences
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <TeamCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 gradient-soft">
        <div className="container mx-auto px-4">
          <div className="glass-card p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Join Our Team</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're always looking for talented individuals to join our growing team
            </p>
            <a
              href="mailto:careers@haventech.com"
              className="inline-flex items-center justify-center rounded-full bg-accent text-accent-foreground px-8 py-3 font-medium hover:opacity-90 transition-opacity"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
