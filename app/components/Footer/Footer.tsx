'use client'
import Image from 'next/image';
import Link from 'next/link';
import { BsTwitterX, BsLinkedin, BsGithub } from 'react-icons/bs';

const footerLinks = [
    {
        title: 'Services',
        links: [
            { name: 'AI & LLM Solutions', href: '/services/ai-services' },
            { name: 'Blockchain Services', href: '/services/blockchain-services' },
            { name: 'Web Development', href: '/services/web-app-development-services' },
            { name: 'Mobile App Development', href: '/services/mobile-app-development-services' },
            { name: 'MVP & Prototyping', href: '/services/prototyping-and-mvp-services' },
        ]
    },
    {
        title: 'Industries',
        links: [
            { name: 'Finance & Fintech', href: '/industries/finance-fintech' },
            { name: 'Healthcare', href: '/industries/healthcare' },
            { name: 'Supply Chain', href: '/industries/supply-chain' },
            { name: 'Real Estate', href: '/industries/real-estate' },
            { name: 'Gaming & Metaverse', href: '/industries/gaming-metaverse' },
        ]
    },
    {
        title: 'Company',
        links: [
            { name: 'About Us', href: '/about' },
            { name: 'Work', href: '/work' },
            { name: 'Career', href: '/careers' },
            { name: 'Contact', href: '/contact' },
        ]
    },
    {
        title: 'Resources',
        links: [
            { name: 'FAQ', href: '/faq' },
            { name: 'Privacy Policy', href: '/privacy' },
            { name: 'Terms of Service', href: '/terms' },
            { name: 'Sitemap', href: '/sitemap.xml' },
        ]
    }
];

const Footer = () => {
    return (
        <footer className="relative bg-white border-t border-neutral-200">

            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
            <div className="max-w-[1400px] mx-auto px-6 pt-24 pb-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-14">
                    <div className="space-y-7 pr-6 border-r border-neutral-100 lg:border-r">
                        <Link href="/" className="inline-block">
                            <Image src="/images/logo.png" alt="Logo" width={200} height={20} />

                        </Link>

                        <p className="text-neutral-600 leading-relaxed max-w-md">
                            We architect cutting-edge digital products at the intersection of
                            Blockchain technology and Artificial Intelligence.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            {[
                                { Icon: BsTwitterX, href: 'https://twitter.com/TheHavenTech' },
                                { Icon: BsLinkedin, href: 'https://linkedin.com/company/thehaventech' },
                                { Icon: BsGithub, href: 'https://github.com/thehaventech' }
                            ].map(({ Icon, href }, i) => (
                                <Link
                                    key={i}
                                    href={href}
                                    className="w-11 h-11 rounded-inner border border-neutral-200 bg-white 
                                               flex items-center justify-center text-neutral-500 
                                               hover:text-red-600 hover:border-red-400/60 
                                               hover:shadow-sm transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {footerLinks.map((section) => (
                        <div key={section.title} className="space-y-6">

                            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-800 border-b border-neutral-200 pb-3">
                                {section.title}
                            </h4>

                            <ul className="space-y-3 pt-2">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-neutral-600 hover:text-red-600 
                                                       transition-colors duration-200 text-[15px] 
                                                       inline-block"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    ))}

                </div>

                <div className="mt-20 pt-8 border-t border-neutral-200 
                                flex flex-col md:flex-row items-center 
                                justify-between gap-6 text-sm text-neutral-500">

                    <p>
                        © {new Date().getFullYear()} Haven Tech. All rights reserved.
                    </p>

                    <div className="flex items-center gap-8">
                        <Link href="/privacy" className="hover:text-red-600 transition-colors">
                            Privacy
                        </Link>
                        <Link href="/terms" className="hover:text-red-600 transition-colors">
                            Terms
                        </Link>
                        <Link href="/sitemap.xml" className="hover:text-red-600 transition-colors">
                            Sitemap
                        </Link>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;
