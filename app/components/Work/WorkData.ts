export interface Project {
    slug: string;
    title: string;
    category: string;
    client: string;
    year: string;
    thumbnail: string;
    description: string;
    fullDescription: string;
    challenge: string;
    solution: string;
    results: string[];
    technologies: string[];
    images: string[];
    stats?: { label: string, value: string }[];
}

export const projects: Project[] = [
    {
        slug: 'sorsify-digital',
        title: 'Sorsify: Scaling Agency',
        category: 'Digital Agency',
        client: 'Sorsify LLC',
        year: '2026',
        thumbnail: '/images/sorsify.png',
        description: 'Comprehensive digital agency platform for scaling SMBs with Shopify and omnichannel support.',
        fullDescription: 'Sorsify is a global digital hub providing end-to-end marketing and development. We implemented a robust Shopify-first ecommerce architecture and integrated 24/7 omnichannel support systems to maximize client retention.',
        challenge: 'Creating a unified platform that handles high-volume marketing data while managing complex Shopify store integrations for multiple clients.',
        solution: 'Built using Next.js and Chakra UI for a premium UX, utilizing Node.js microservices to handle real-time support data and agency analytics.',
        results: [
            '40% increase in client store conversion rates',
            'Integrated 24/7 omnichannel support for 10+ industries',
            'Zero-lag dashboard for managing global marketing campaigns'
        ],
        stats: [
            { label: 'Clients Helped', value: '50+' },
            { label: 'Avg ROI', value: '3.5x' },
            { label: 'Uptime', value: '100%' }
        ],
        technologies: ['Next.js', 'Chakra UI', 'Node.js', 'Tailwindcss'],
        images: [
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop'
        ]
    },
    {
        slug: 'crypto-gaming-hub',
        title: 'Crypto Gaming Hub',
        category: 'Web3 / Gaming',
        client: 'Gems Web3',
        year: '2026',
        thumbnail: '/images/CNM.png',
        description: 'Solana-integrated gaming arcade featuring NFT-gated access and on-chain rewards.',
        fullDescription: 'A high-speed gaming platform built on Solana. Users connect Phantom wallets to mint NFTs for 0.01 SOL, unlocking five arcade games where high scores and tokens are stored directly on the blockchain.',
        challenge: 'Ensuring sub-second game state synchronization between the browser-based arcade and the Solana mainnet.',
        solution: 'Leveraged the Solana SDK with Rust-based smart contracts and Next.js to provide a seamless Web3 connection that feels like a traditional web app.',
        results: [
            '10k+ unique NFTs minted in the first month',
            'Sub-second transaction finality for gaming actions',
            'Successfully launched 5 integrated crypto-themed games'
        ],
        stats: [
            { label: 'Blockchain', value: 'Solana' },
            { label: 'Mint Price', value: '0.01 SOL' },
            { label: 'Games', value: '5 Total' }
        ],
        technologies: ['Solana', 'Rust', 'Next.js', 'Vercel'],
        images: [
            'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2000&auto=format&fit=crop'
        ]
    },
    {
        slug: 'cyber-unicorns',
        title: 'Cyber Unicorns: EdTech',
        category: 'Cybersecurity',
        client: 'Cyber Unicorns AU',
        year: '2026',
        thumbnail: '/images/cu.png',
        description: 'Jargon-free cybersecurity education and consultancy platform for businesses and families.',
        fullDescription: 'Cyber Unicorns provides a simplified approach to digital safety. The platform includes a mobile education app, boardroom hypothetical simulators, and a vCISO service for enterprise-grade security advice without the noise.',
        challenge: 'Translating complex cybersecurity frameworks into digestible, engaging learning content for non-technical users.',
        solution: 'Developed a gamified learning platform using NextAuth for secure access and NestJS/Firebase to power real-time training progress.',
        results: [
            'Partnered with major brands like Hungry Jacks',
            'Launched mobile apps on iOS and Android',
            'Achieved 95% user completion rate on cyber courses'
        ],
        stats: [
            { label: 'Users', value: '25k+' },
            { label: 'Safety Rating', value: '99%' },
            { label: 'Consultants', value: 'Expert' }
        ],
        technologies: ['NestJS', 'Firebase', 'NextAuth', 'Next.js'],
        images: [
            'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop'
        ]
    },
    {
        slug: 'complete-pakistan',
        title: 'Complete Pakistan',
        category: 'HR Tech / Marketplace',
        client: 'Global Employment Portal',
        year: '2026',
        thumbnail: '/images/cp.png',
        description: 'One-stop portal for overseas employment, visa tracking, and workforce verification.',
        fullDescription: 'Complete Pakistan connects Pakistani workers with international Gulf-region jobs. The portal manages CVs, verifies trade certifications, and handles GAMCA medical appointments to ensure a safe migration path.',
        challenge: 'Managing a massive database of users while ensuring all job postings are verified and protected against fraudulent recruitment agencies.',
        solution: 'Implemented AWS-backed storage and MongoDB for scalable user data management, using i18next for multi-language support (English/Urdu/Arabic).',
        results: [
            '50k+ verified trade certifications processed',
            'Drastic reduction in recruitment fraud reports',
            'Unified tracking for GAMCA and BEOE permissions'
        ],
        stats: [
            { label: 'CVs Managed', value: '100k+' },
            { label: 'Agency Partners', value: '40+' },
            { label: 'Cost Saved', value: '30%' }
        ],
        technologies: ['MongoDB', 'AWS', 'Next.js', 'i18next'],
        images: [
            'https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?_gl=1*towoj4*_ga*MTM4MDAzNDM3MS4xNzU2NzYwNTc2*_ga_8JE65Q40S6*czE3NzU1MDY2NjAkbzgkZzEkdDE3NzU1MDY2ODAkajQwJGwwJGgw',
            'https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?_gl=1*towoj4*_ga*MTM4MDAzNDM3MS4xNzU2NzYwNTc2*_ga_8JE65Q40S6*czE3NzU1MDY2NjAkbzgkZzEkdDE3NzU1MDY2ODAkajQwJGwwJGgw'
        ]
    },
    {
        slug: 'everyone-world',
        title: 'Everyone: Web3 Social',
        category: 'Blockchain Social',
        client: 'Everyone DAO',
        year: '2026',
        thumbnail: '/images/everyone.png',
        description: 'Decentralized social media platform governed by a DAO with zero platform fees.',
        fullDescription: 'Everyone is a global blockchain platform replacing subscription models. It integrates social posting, website builders, and ecommerce into a single chronological stream where users own their data and identity.',
        challenge: 'Creating a highly scalable decentralized governance system that can manage 144,000+ founding members without centralized oversight.',
        solution: 'Developed an Ethereum-based DAO architecture and integrated an AI "Visibility Assistant" to manage organic SEO across the blockchain stream.',
        results: [
            'Successfully launched the first 144,000 founder numbers',
            'Implemented a zero-fee ecommerce blockchain store',
            'Developed a fully chronological, non-algorithmic feed'
        ],
        stats: [
            { label: 'Founders', value: '144k Cap' },
            { label: 'Platform Fees', value: '0%' },
            { label: 'Governance', value: 'DAO' }
        ],
        technologies: ['Ethereum', 'Next.js', 'Blockchain', 'Node.js'],
        images: [
            'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop'
        ]
    },
    {
        slug: 'kafela-islamic',
        title: 'Kafela: Knowledge Portal',
        category: 'EdTech / Religion',
        client: 'Kafela Foundation',
        year: '2026',
        thumbnail: '/images/kafela.png',
        description: 'Authentic Bengali Islamic educational platform with live prayer tools and 34k+ Hadith records.',
        fullDescription: 'Kafela is a comprehensive resource for spiritual growth. We built a data-intensive platform featuring a searchable Hadith library, location-based prayer timings, and a multi-category educational system.',
        challenge: 'Maintaining high performance and search accuracy across a massive database of 34,000+ Sahih Hadith entries in Bengali.',
        solution: 'Optimized search using MongoDB indexing and enhanced the UI/UX with SwiperSlider for an engaging mobile learning experience.',
        results: [
            'Search results delivered in under 200ms',
            'Accurate real-time prayer timings for 100+ cities',
            'Verified Islamic source library built for scale'
        ],
        stats: [
            { label: 'Hadith Records', value: '34k+' },
            { label: 'Daily Users', value: '15k+' },
            { label: 'Lang', value: 'Bengali' }
        ],
        technologies: ['Next.js', 'SwiperSlider', 'Chakra UI', 'i18next'],
        images: [
            'https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1584551309087-99178652f786?q=80&w=2000&auto=format&fit=crop'
        ]
    }
];