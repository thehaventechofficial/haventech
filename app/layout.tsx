import type { Metadata } from "next";
import { Sora, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./components/Auth/AuthProvider";
import Header from "./components/Header/Header";
import ScrollContext from "./components/ScrollContext/ScrollContext";
import ContactPopupWrapper from "./components/ContactPopup/ContactPopupWrapper";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thehaventech.com"),
  title: {
    default: "AI & Blockchain Engineering Company | Haven Tech",
    template: "%s | Haven Tech",
  },
  description: "Haven Tech builds AI systems, blockchain platforms, and scalable digital products. From MVPs to enterprise solutions across global markets.",
  keywords: ["Haven Tech", "AI engineering", "blockchain development", "AI systems", "blockchain platforms", "digital products", "MVP development", "enterprise solutions", "smart contracts", "DeFi", "tokenization"],
  authors: [{ name: "Haven Tech" }],
  creator: "Haven Tech",
  publisher: "Haven Tech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "AI & Blockchain Engineering Company | Haven Tech",
    description: "Haven Tech builds AI systems, blockchain platforms, and scalable digital products. From MVPs to enterprise solutions across global markets.",
    type: "website",
    url: "https://www.thehaventech.com/",
    siteName: "Haven Tech",
    images: [{
      url: "/images/seo_image.jpg",
      width: 1200,
      height: 630,
      alt: "Haven Tech AI & Blockchain Engineering"
    }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Blockchain Engineering Company | Haven Tech",
    description: "Haven Tech builds AI systems, blockchain platforms, and scalable digital products. From MVPs to enterprise solutions across global markets.",
    images: ["/images/seo_image.jpg"],
    creator: "@TheHavenTech",
  },
  alternates: {
    canonical: "/",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Haven Tech",
    "url": "https://www.thehaventech.com",
    "logo": "https://www.thehaventech.com/favicon.ico",
    "description": "Haven Tech builds AI systems, blockchain platforms, and scalable digital products.",
    "sameAs": [
      "https://twitter.com/TheHavenTech",
      "https://linkedin.com/company/thehaventech",
      "https://github.com/thehaventech"
    ]
  };

  return (
    <html lang="en" className={`${sora.variable} ${bricolage.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${sora.className} antialiased`}
      >
        <AuthProvider>
          <ScrollContext>
            {children}
            <ContactPopupWrapper />
            <BackToTopButton />
          </ScrollContext>
        </AuthProvider>
      </body>
    </html>
  );
}
