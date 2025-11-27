import Team from '../../components/Pages/Team'
import React from 'react'
export const metadata = {
  title: "Our Team | Haventech – Meet the Minds Behind the Innovation",
  description:
    "Meet the talented engineers, designers, and strategists who power Haventech’s digital solutions.",
  keywords: [
    "Haventech Team",
    "Software Engineers",
    "Web3 Developers",
    "Blockchain Experts",
    "Product Designers",
    "Tech Team",
  ],
  openGraph: {
    title: "Haventech Team – Innovators, Builders & Problem Solvers",
    description:
      "Get to know the experts behind Haventech’s world-class software development services.",
    url: "https://thehaventech.com/team",
    images: [
      {
        url: "https://thehaventech.com/Images/OG-image.png",
        width: 1200,
        height: 630,
        alt: "Haventech Team",
      },
    ],
    type: "website",
  },
};

const page = () => {
  return (
    <Team />
  )
}

export default page