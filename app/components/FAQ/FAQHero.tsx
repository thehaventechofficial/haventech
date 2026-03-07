'use client';

import PageHero from '../Common/PageHero';
import { useContactPopup } from '../ContactPopup/ContactContext';

export default function FAQHero() {
  const { onOpen } = useContactPopup();
  return (
    <PageHero
      title="How can we help today?"
      subtitle="FAQ"
      image="https://images.unsplash.com/photo-1454165833762-012174d89955?q=80&w=2670&auto=format&fit=crop"
      ctaText="GET IN TOUCH"
      onCtaClick={onOpen}
    />
  );
}
