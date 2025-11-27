import Portfolio from '../../components/Pages/Portfolio'
import React from 'react'
export const metadata = {
  title: "Portfolio | Haventech – Our Featured Projects & Case Studies",
  description:
    "Explore Haventech’s portfolio of delivered software products, Web2 & Web3 platforms, and custom digital solutions.",
  keywords: [
    "Haventech Portfolio",
    "Case Studies",
    "Completed Projects",
    "Software Projects",
    "Web3 Products",
    "Custom Applications",
  ],
  openGraph: {
    title: "Haventech Portfolio – Real Projects, Real Impact",
    description:
      "Browse the successful projects developed by Haventech across multiple industries and technologies.",
    url: "https://thehaventech.com/portfolio",
    images: [
      {
        url: "https://thehaventech.com/Images/OG-image.png",
        width: 1200,
        height: 630,
        alt: "Haventech Portfolio",
      },
    ],
    type: "website",
  },
};

const page = () => {
  return (
    <Portfolio />
  )
}

export default page