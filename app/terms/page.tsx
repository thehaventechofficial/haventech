import type { Metadata } from "next";
import LegalLayout from '../components/Legal/LegalLayout';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export const metadata: Metadata = {
    title: "Terms and Conditions | Haven Tech",
    description: "Review the terms and conditions for using Haven Tech's AI, blockchain, and digital engineering services.",
    openGraph: {
        title: "Terms and Conditions | Haven Tech",
        description: "Review the terms and conditions for using Haven Tech's AI, blockchain, and digital engineering services.",
        url: "https://www.Haven Tech.io/terms",
        images: [{ url: "https://www.Haven Tech.io/images/seo_image.jpg" }],
    },
    alternates: {
        canonical: "https://www.Haven Tech.io/terms",
    },
};

export default function TermsPage() {
    return (
        <>
            <Header />
            <main>
                <LegalLayout title="Terms and Conditions" lastUpdated="January 7, 2026">
                    <section>
                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using the services provided by Haven Tech ("we," "us," or "our"),
                            you agree to be bound by these Terms and Conditions. If you do not agree to these terms,
                            please refrain from using our services.
                        </p>
                    </section>

                    <section>
                        <h2>2. Services Description</h2>
                        <p>
                            Haven Tech specializes in Blockchain development, AI solutions, web applications,
                            and mobile app development. Our services are provided "as is" and are subject to change
                            without notice.
                        </p>
                    </section>

                    <section>
                        <h2>3. Intellectual Property</h2>
                        <p>
                            All content, software, and intellectual property developed by Haven Tech or provided
                            through our platforms remain the exclusive property of Haven Tech, unless otherwise
                            specified in a separate agreement.
                        </p>
                        <ul>
                            <li>Unauthorized reproduction is prohibited.</li>
                            <li>Users may not reverse engineer our software.</li>
                            <li>Trademarks and logos are owned by Haven Tech.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>4. User Responsibilities</h2>
                        <p>
                            As a user of our services, you agree to:
                        </p>
                        <ul>
                            <li>Provide accurate information when requested.</li>
                            <li>Maintain the security of any accounts associated with our services.</li>
                            <li>Use our services only for lawful purposes.</li>
                            <li>Avoid any activity that could harm or disrupt our infrastructure.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>5. Limitation of Liability</h2>
                        <p>
                            Haven Tech shall not be liable for any indirect, incidental, special, consequential,
                            or punitive damages resulting from your use of or inability to use our services.
                        </p>
                    </section>

                    <section>
                        <h2>6. Governing Law</h2>
                        <p>
                            These terms shall be governed by and construed in accordance with the laws of the
                            jurisdiction in which Haven Tech operates, without regard to its conflict of law principles.
                        </p>
                    </section>

                    <section>
                        <h2>7. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these terms at any time. Significant changes will be
                            communicated via our platform or email. Your continued use of our services after such
                            modifications constitutes acceptance of the new terms.
                        </p>
                    </section>

                    <section>
                        <h2>8. Contact Us</h2>
                        <p>
                            If you have any questions about these Terms and Conditions, please contact us at
                            legal@Haven Tech.com.
                        </p>
                    </section>
                </LegalLayout>
            </main>
            <Footer />
        </>
    );
}
