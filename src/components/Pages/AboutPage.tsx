import Navigation from "..//Navigation";
import Footer from "..//Footer";
import { Target, Eye, Award, Users } from "lucide-react";

const AboutPage = () => {
    return (
        <div className="min-h-screen">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 gradient-soft">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center animate-fade-in">
                        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">About Haven Tech</h1>
                        <p className="text-xl text-muted-foreground">
                            We're a team of passionate innovators dedicated to transforming businesses through technology and design excellence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="glass-card p-8 hover-lift">
                            <div className="inline-block p-3 rounded-full bg-accent/10 text-accent mb-4">
                                <Target size={32} />
                            </div>
                            <h2 className="text-3xl font-heading font-bold mb-4">Our Mission</h2>
                            <p className="text-muted-foreground">
                                To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value in an ever-evolving technological landscape.
                            </p>
                        </div>

                        <div className="glass-card p-8 hover-lift">
                            <div className="inline-block p-3 rounded-full bg-primary/10 text-primary mb-4">
                                <Eye size={32} />
                            </div>
                            <h2 className="text-3xl font-heading font-bold mb-4">Our Vision</h2>
                            <p className="text-muted-foreground">
                                To be the leading force in digital transformation, recognized for our commitment to excellence, innovation, and the success of our clients worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 gradient-soft">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Values</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="glass-card p-6 text-center hover-lift">
                            <div className="inline-block p-3 rounded-full bg-accent/10 text-accent mb-4 animate-float">
                                <Award size={28} />
                            </div>
                            <h3 className="text-xl font-heading font-semibold mb-3">Excellence</h3>
                            <p className="text-muted-foreground">
                                We strive for excellence in every project, delivering quality that exceeds expectations.
                            </p>
                        </div>

                        <div className="glass-card p-6 text-center hover-lift">
                            <div className="inline-block p-3 rounded-full bg-accent/10 text-accent mb-4 animate-float" style={{ animationDelay: "0.5s" }}>
                                <Users size={28} />
                            </div>
                            <h3 className="text-xl font-heading font-semibold mb-3">Collaboration</h3>
                            <p className="text-muted-foreground">
                                We believe in the power of teamwork and close collaboration with our clients.
                            </p>
                        </div>

                        <div className="glass-card p-6 text-center hover-lift">
                            <div className="inline-block p-3 rounded-full bg-accent/10 text-accent mb-4 animate-float" style={{ animationDelay: "1s" }}>
                                <Target size={28} />
                            </div>
                            <h3 className="text-xl font-heading font-semibold mb-3">Innovation</h3>
                            <p className="text-muted-foreground">
                                We embrace new technologies and creative solutions to solve complex challenges.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Journey</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            A timeline of growth and innovation
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-8">
                        {[
                            { year: "2020", title: "Founded", description: "Haven Tech was established with a vision to revolutionize digital solutions." },
                            { year: "2021", title: "Rapid Growth", description: "Expanded our team and delivered 50+ successful projects." },
                            { year: "2022", title: "Industry Recognition", description: "Awarded 'Best Digital Agency' by Tech Innovation Awards." },
                            { year: "2023", title: "Global Expansion", description: "Opened offices in three new countries, serving clients worldwide." },
                            { year: "2024", title: "Innovation Hub", description: "Launched our innovation lab focusing on AI and emerging technologies." },
                        ].map((milestone, index) => (
                            <div key={index} className="flex gap-6 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full glass flex items-center justify-center font-heading font-bold text-accent">
                                        {milestone.year}
                                    </div>
                                </div>
                                <div className="glass-card p-6 flex-grow">
                                    <h3 className="text-xl font-heading font-semibold mb-2">{milestone.title}</h3>
                                    <p className="text-muted-foreground">{milestone.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage;
