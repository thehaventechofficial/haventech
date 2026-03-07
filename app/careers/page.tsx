import type { Metadata } from "next";
import CareersClient from './CareersClient';

export const metadata: Metadata = {
    title: "Careers | Join the Haven Tech Team | AI & Blockchain Jobs",
    description: "Explore career opportunities at Haven Tech. Join our mission to build innovative AI and blockchain systems. Work with global markets and cutting-edge technology.",
    keywords: "Haven Tech careers, AI jobs, blockchain development jobs, tech careers, hiring software engineers",
    openGraph: {
        title: "Careers | Join the Haven Tech Team | AI & Blockchain Jobs",
        description: "Explore career opportunities at Haven Tech. Join our mission to build innovative AI and blockchain systems. Work with global markets and cutting-edge technology.",
        url: "https://www.thehaventech.com/careers",
        images: [{ url: "/images/seo_image.jpg" }],
    },
    alternates: {
        canonical: "https://www.thehaventech.com/careers",
    },
};

export default function CareersPage() {
    return <CareersClient />;
}
