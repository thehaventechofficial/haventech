import Servicespage from '../../components/Pages/Services'
import React from 'react'
export const metadata = {
  title: "Our Services | Haventech – Software, Web3 & Product Development",
  description:
    "Discover Haventech’s services including Web development, Mobile apps, Web3 solutions, Blockchain, UI/UX design, and full-stack software development.",
  keywords: [
    "Software Development Services",
    "Web3 Services",
    "Blockchain Development",
    "UI UX Design",
    "Full Stack Agency",
    "Haventech Services",
  ],
  openGraph: {
    title: "Haventech Services – Build Digital Products with Confidence",
    description:
      "Explore our software, product development, and Web3 services crafted for startups and enterprises.",
    url: "https://thehaventech.com/services",
    images: [
      {
        url: "https://thehaventech.com/Images/OG-image.png",
        width: 1200,
        height: 630,
        alt: "Haventech Services",
      },
    ],
    type: "website",
  },
};

const page = () => {
  return (
    <Servicespage />
  )
}

export default page