import { getIndustryBySlug, getAllIndustrySlugs } from '@/app/lib/industries';
import { notFound } from 'next/navigation';
import IndustryDetailClient from './IndustryDetailClient';
import type { Metadata } from 'next';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const industry = getIndustryBySlug(slug);

    if (!industry) {
        return {
            title: "Industry Not Found",
        };
    }

    const displayImage = industry.heroImage || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop";

    return {
        title: `${industry.title} | Industry Solutions | Haven Tech`,
        description: industry.heroDescription,
        openGraph: {
            title: `${industry.title} | Enterprise AI & Blockchain Solutions`,
            description: industry.heroDescription,
            url: `https://www.thehaventech.com/industries/${slug}`,
            images: [{
                url: displayImage,
                alt: industry.title
            }],
        },
        alternates: {
            canonical: `https://www.thehaventech.com/industries/${slug}`,
        },
    };
}

export async function generateStaticParams() {
    return getAllIndustrySlugs().map((slug) => ({
        slug,
    }));
}

export default async function IndustryDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const industry = getIndustryBySlug(slug);

    if (!industry) {
        notFound();
    }

    return <IndustryDetailClient industry={industry} />;
}
