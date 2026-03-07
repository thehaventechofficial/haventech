'use client';

import PageHero from '../Common/PageHero';
import { useContactPopup } from '../ContactPopup/ContactContext';

export default function WorkHero() {
    const { onOpen } = useContactPopup();
    return (
        <PageHero
            title="We build products people love."
            subtitle="Our Work"
            image="/images/work.jpg"
            ctaText="GET IN TOUCH"
            onCtaClick={onOpen}
        />
    );
}
