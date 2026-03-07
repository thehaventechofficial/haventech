import type { Metadata } from "next";
import CTASection from "../components/FAQ/FAQCTA";
import HeroSection from "../components/FAQ/FAQHero";
import FAQSection from "../components/FAQ/FAQItem";

export const metadata: Metadata = {
  title: "FAQs | AI & Blockchain Engineering Questions | Haven Tech",
  description: "Find answers to commonly asked questions about Haven Tech's AI systems, blockchain platforms, and digital product engineering services.",
  keywords: "Haven Tech FAQ, AI development questions, blockchain engineering help, tech service inquiries",
  openGraph: {
    title: "FAQs | AI & Blockchain Engineering Questions | Haven Tech",
    description: "Find answers to commonly asked questions about Haven Tech's AI systems, blockchain platforms, and digital product engineering services.",
    url: "https://www.thehaventech.com/faq",
    images: [{ url: "/images/OG-image.png" }],
  },
  alternates: {
    canonical: "https://www.thehaventech.com/faq",
  },
};

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Box } from "@chakra-ui/react";

export default function FAQPage() {
  return (
    <>
      <Header />
      <Box as="main" bg="white" >
        <HeroSection />
        <FAQSection />
        <CTASection />
      </Box>
      <Footer />
    </>
  );
}