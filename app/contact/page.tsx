import type { Metadata } from "next";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContactHero from "../components/ContactPage/ContactHero";
import LocationsSection from "../components/ContactPage/LocationsSection";
import ContactFormSection from "../components/ContactPage/ContactFormSection";
import MapView from "../components/ContactPage/MapView";

export const metadata: Metadata = {
    title: "Contact Us | AI & Blockchain Solutions | Haven Tech",
    description: "Get in touch with Haven Tech for project inquiries, collaborations, or any questions about our AI and blockchain engineering services.",
    keywords: "Contact Haven Tech, AI development inquiry, blockchain project consultation, tech partnership",
    openGraph: {
        title: "Contact Us | AI & Blockchain Solutions | Haven Tech",
        description: "Get in touch with Haven Tech for project inquiries, collaborations, or any questions about our AI and blockchain engineering services.",
        url: "https://www.Haven Tech.io/contact",
        images: [{ url: "https://www.Haven Tech.io/images/seo_image.jpg" }],
    },
    alternates: {
        canonical: "https://www.Haven Tech.io/contact",
    },
};

export default function ContactPage() {
    return (
        <>
            <Header />
            <main>
                <ContactHero />
                <LocationsSection />
                <ContactFormSection />
                <MapView />
            </main>
            <Footer />
        </>
    );
}
