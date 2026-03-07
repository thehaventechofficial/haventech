import type { Metadata } from 'next';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
    title: "Our Services | AI, Blockchain & Digital Engineering | Haven Tech",
    description: "Explore Haven Tech's comprehensive services in AI development, blockchain engineering, web applications, and mobile solutions. From custom smart contracts to generative AI products.",
    keywords: ["Haven Tech services", "AI development", "blockchain engineering", "web apps", "mobile apps", "MVP development", "software consulting"],
    openGraph: {
        title: "Our Services | AI, Blockchain & Digital Engineering | Haven Tech",
        description: "Explore Haven Tech's comprehensive services in AI development, blockchain engineering, web applications, and mobile solutions.",
        url: "https://www.thehaventech.com/services",
        images: [{ url: "/images/OG-image.png" }],
    },
    alternates: {
        canonical: "https://www.thehaventech.com/services",
    },
};

export default function ServicesPage() {
    return (
        <>
            <Header />
            <ServicesClient />
            <Footer />
        </>
    );
}
