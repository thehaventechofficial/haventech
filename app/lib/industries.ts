import industriesDataRaw from './Jsonfiles/industries_data.json';

export interface IndustryOverview {
    title: string;
    content: string;
    stats: Array<{
        value: string;
        label: string;
    }>;
}

export interface IndustryChallenge {
    title: string;
    description: string;
}

export interface IndustrySolutionItem {
    category: string;
    title: string;
    description: string;
    features: string[];
    technologies: string[];
    benefits: string[];
}

export interface IndustryCTA {
    title: string;
    description: string;
    text: string;
}

export interface IndustryData {
    slug: string;
    title: string;
    heroTitle: string;
    heroDescription: string;
    heroImage: string | null;
    banner: string | null;
    overview: IndustryOverview;
    challenges: {
        title: string;
        description: string;
        items: IndustryChallenge[];
    };
    solutions: {
        title: string;
        items: IndustrySolutionItem[];
    };
    cta: IndustryCTA;
}

export type IndustriesDataMap = Record<string, IndustryData>;

const industriesData = industriesDataRaw as unknown as IndustriesDataMap;

export const getIndustries = (): IndustryData[] => {
    return Object.values(industriesData);
};

export const getIndustryBySlug = (slug: string): IndustryData | undefined => {
    return industriesData[slug];
};

export const getAllIndustrySlugs = (): string[] => {
    return Object.keys(industriesData);
};
