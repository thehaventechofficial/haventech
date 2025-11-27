import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "../components/Layout/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Haventech | Leading Software & Product Development Agency",

  description:
    "Haventech delivers high-end software, Web2/Web3 solutions, blockchain development, and full-stack digital products for startups and enterprises worldwide.",

  keywords: [
    "Haventech",
    "Software Development Agency",
    "Product Development",
    "Web Development",
    "Web Application Development",
    "Web3 Development",
    "Blockchain Development",
    "Custom Software Solutions",
    "UI/UX Design",
    "Full Stack Development",
    "Next.js",
    "React",
    "Enterprise Software",
    "Startup Development",
    "Digital Product Agency"
  ],

  openGraph: {
    title: "Haventech | Leading Software & Product Development Agency",
    description:
      "Haventech specializes in Web2 & Web3 development, blockchain engineering, product design, and full-stack digital solutions for global brands.",
    url: "https://thehaventech.com",
    siteName: "Haventech",
    images: [
      {
        url: "https://thehaventech.com/Images/OG-image.png",
        width: 1200,
        height: 630,
        alt: "Haventech — Software & Product Development Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Haventech | Leading Software & Product Development Agency",
    description:
      "Haventech builds modern Web2/Web3 applications, blockchain systems, and full-stack software for startups and enterprises.",
    site: "@haventech",
    creator: "@haventech",
    images: ["https://thehaventech.com/Images/OG-image.png"],
  },

  other: {
    "og:type": "website",
    "og:site_name": "Haventech",
    "og:image": "https://thehaventech.com/Images/OG-image.png",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:url": "https://thehaventech.com",
    "og:locale": "en_US",
    "og:title": "Haventech | Leading Software & Product Development Agency",
    "og:description":
      "Haventech provides cutting-edge Web2/Web3 development, blockchain solutions, and full-stack product engineering.",

    "pinterest-rich-pin": "true",

    "linkedin:title": "Haventech | Leading Software & Product Development Agency",
    "linkedin:description":
      "A modern software and product development agency delivering Web2/Web3 apps, blockchain engineering, and digital solutions for global businesses.",
    "linkedin:image": "https://thehaventech.com/Images/OG-image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
