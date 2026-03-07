import servicesNestedData from '@/app/lib/Jsonfiles/services_nested_pages_data.json';
import servicesList from '@/app/lib/Jsonfiles/services_list.json';
import { notFound } from 'next/navigation';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import type { Metadata } from 'next';
import ServiceDetailClient from './ServiceDetailClient';

interface PageProps {
    params: Promise<{
        category: string;
        service: string;
    }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { service } = await params;
    const serviceData = servicesNestedData.find((s) => s.slug === service);

    if (!serviceData) {
        return {
            title: "Service Not Found | Haven Tech",
        };
    }

    return {
        title: serviceData.metadata.title,
        description: serviceData.metadata.description,
        openGraph: {
            title: serviceData.metadata.openGraph.title,
            description: serviceData.metadata.openGraph.description,
            url: `https://www.thehaventech.com/services/${serviceData.slug}`,
            images: [
                { url: "/images/OG-image.png" },
                ...serviceData.metadata.openGraph.images.map(img => ({ url: img }))
            ],
        },
        alternates: {
            canonical: `https://www.thehaventech.com/services/${serviceData.slug}`,
        },
    };
}

export async function generateStaticParams() {
    return servicesList.map((item) => ({
        category: item.page,
        service: item.slug,
    }));
}

export default async function ServiceDetailsPage({ params }: PageProps) {
    const { category, service } = await params;

    const serviceData = servicesNestedData.find((s) => s.slug === service);
    if (!serviceData) {
        notFound();
    }

    return (
        <>
            <Header />
            <ServiceDetailClient serviceData={serviceData} category={category} />
            <Footer />
        </>
    );
}
