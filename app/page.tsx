import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "./components/Homepage/HeroSection";
import ServicesSection from "./components/Homepage/ServicesSection";
import ServicesSection2 from "./components/ServiceSection/ServiceSection";
import ProcessSection from "./components/Homepage/ProcessSection";
import JourneySection from "./components/Homepage/JourneySection";
import PortfolioSlider from "./components/Homepage/PortfolioSlider";
import TechnologyWeUse from "./components/Homepage/TechnologyWeUse";
import HomeCTA from "./components/Homepage/HomeCTA";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import IndustrySlider from "./components/Homepage/Industries";

export const metadata: Metadata = {
  title: "AI & Blockchain Engineering Company | Haven Tech",
  description: "Haven Tech builds AI systems, blockchain platforms, and scalable digital products. From MVPs to enterprise solutions across global markets.",
  keywords: ["Haven Tech", "AI engineering", "blockchain development", "AI systems", "blockchain platforms", "digital products", "MVP development", "enterprise solutions", "smart contracts", "DeFi", "tokenization"],
  openGraph: {
    title: "AI & Blockchain Engineering Company | Haven Tech",
    description: "Haven Tech builds AI systems, blockchain platforms, and scalable digital products. From MVPs to enterprise solutions across global markets.",
    url: "https://www.thehaventech.com/",
    images: [{
      url: "/images/seo_image.jpg",
      width: 1200,
      height: 630,
      alt: "Haven Tech AI & Blockchain Engineering"
    }],
  },
  alternates: {
    canonical: "https://www.thehaventech.com/",
  },
};

export default async function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection2 />
        {/* <ServicesSection /> */}
        <ProcessSection />
        <JourneySection />
        <PortfolioSlider />
        <TechnologyWeUse />
        <HomeCTA />
        {/* <IndustrySlider /> */}
      </main>
      <Footer />
    </>
  );
}
