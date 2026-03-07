import servicesPagesData from '@/app/lib/Jsonfiles/services_pages_data.json';
import { notFound } from 'next/navigation';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import type { Metadata } from 'next';
import CategoryClient from './CategoryClient';

interface PageProps {
    params: Promise<{
        category: string;
    }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { category } = await params;
    const categoryData = servicesPagesData.find((c) => c.page === category);

    if (!categoryData) {
        return {
            title: "Category Not Found | Haven Tech",
        };
    }

    return {
        title: categoryData.metadata.title,
        description: categoryData.metadata.description,
        openGraph: {
            title: categoryData.metadata.openGraph.title,
            description: categoryData.metadata.openGraph.description,
            url: `https://www.thehaventech.com/services/${category}`,
            images: [
                { url: "/images/OG-image.png" },
                ...categoryData.metadata.openGraph.images.map(img => ({ url: img }))
            ],
        },
        alternates: {
            canonical: `https://www.thehaventech.com/services/${category}`,
        },
    };
}

export async function generateStaticParams() {
    return servicesPagesData.map((category) => ({
        category: category.page,
    }));
}

export default async function CategoryPage({ params }: PageProps) {
    const { category } = await params;
    const categoryData = servicesPagesData.find((c) => c.page === category);

    if (!categoryData) {
        notFound();
    }

    return (
        <>
            <Header />
            <CategoryClient categoryData={categoryData} />
            <Footer />
        </>
    );
}
