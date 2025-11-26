import { Linkedin, Twitter, Mail } from "lucide-react";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

const TeamCard = ({ name, role, image, linkedin, twitter, email }: TeamCardProps) => {
  return (
    <div className="glass-card p-6 hover-lift text-center">
      <div className="mb-4 mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-accent/20">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-heading font-semibold mb-1">{name}</h3>
      <p className="text-muted-foreground mb-4">{role}</p>
      <div className="flex justify-center gap-3">
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <Linkedin size={18} />
          </a>
        )}
        {twitter && (
          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <Twitter size={18} />
          </a>
        )}
        {email && (
          <a
            href={`mailto:${email}`}
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <Mail size={18} />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
