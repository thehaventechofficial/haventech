import React from 'react'
import AboutPage from '../../components/Pages/AboutPage'
export const metadata = {
  title: "About Us | Haventech – Your Trusted Digital Innovation Partner",
  description:
    "Learn about Haventech, a leading software and product development agency helping startups and enterprises build world-class digital solutions.",
  keywords: [
    "About Haventech",
    "Software Agency",
    "Product Development Team",
    "Web3 Agency",
    "Blockchain Development",
    "Full Stack Developers",
  ],
  openGraph: {
    title: "About Haventech – Leading Software & Product Development Agency",
    description:
      "Discover Haventech’s mission, values, and the expert team behind our world-class digital products.",
    url: "https://thehaventech.com/about",
    siteName: "Haventech",
    images: [
      {
        url: "https://thehaventech.com/Images/OG-image.png",
        width: 1200,
        height: 630,
        alt: "About Haventech",
      },
    ],
    type: "website",
  },
};

const page = () => {
  return (
    <AboutPage />
  )
}

export default page