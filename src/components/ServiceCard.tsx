'use client'
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

const ServiceCard = ({ icon: Icon, title, description, link }: ServiceCardProps) => {
  const CardContent = () => (
    <>
      <div className="mb-4 inline-block p-3 rounded-full bg-accent/10 text-accent animate-float">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-heading font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </>
  );

  if (link) {
    return (
      <Link href={link} className="block">
        <div className="glass-card p-6 hover-lift cursor-pointer group">
          <CardContent />
        </div>
      </Link>
    );
  }

  return (
    <div className="glass-card p-6 hover-lift">
      <CardContent />
    </div>
  );
};

export default ServiceCard;
