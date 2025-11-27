import Contact from '../../components/Pages/Contact'
import React from 'react'
export const metadata = {
  title: "Contact Us | Haventech – Let’s Build Something Great",
  description:
    "Get in touch with Haventech for software development, product design, Web3 solutions, and digital transformation services.",
  keywords: [
    "Contact Haventech",
    "Software Development Inquiry",
    "Hire Developers",
    "Web3 Consultation",
    "Startup Tech Partner",
  ],
  openGraph: {
    title: "Contact Haventech – Start Your Project Today",
    description:
      "Reach out to Haventech for expert guidance, project planning, or collaboration opportunities.",
    url: "https://thehaventech.com/contact",
    images: [
      {
        url: "https://thehaventech.com/Images/OG-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Haventech",
      },
    ],
    type: "website",
  },
};

const page = () => {
  return (
    <Contact />
  )
}

export default page