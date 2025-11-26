'use client'

import Link from "next/link";

interface PortfolioCardProps {
  id: number | string;
  title: string;
  category: string;
  image: string | null;
}

const PortfolioCard = ({ id, title, category, image }: PortfolioCardProps) => {
  return (
    <Link href={`/portfolio/${id}`} className="group block">
      <div className="glass-card overflow-hidden hover-lift">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <div className="text-white">
              <p className="text-sm font-medium text-accent mb-1">{category}</p>
              <h3 className="text-xl font-heading font-semibold">{title}</h3>
            </div>
          </div>
        </div>
        <div className="p-4 md:hidden">
          <p className="text-sm font-medium text-accent mb-1">{category}</p>
          <h3 className="text-lg font-heading font-semibold">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;
