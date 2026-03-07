'use client';

import PageHero from '../Common/PageHero';
import { useContactPopup } from '../ContactPopup/ContactContext';

export default function AboutHero() {
    const { onOpen } = useContactPopup();
    return (
        <PageHero
            title="Better Tech Means Together."
            subtitle="About Us"
            image="/images/about-team.png"
            ctaText="GET IN TOUCH"
            onCtaClick={onOpen}
        />
    );
}
