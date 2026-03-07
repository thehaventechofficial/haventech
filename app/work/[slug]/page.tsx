import type { Metadata } from "next";
import ProjectDetailsClient from './ProjectDetailsClient';
import { projects } from '../../components/Work/WorkData';
import { notFound } from 'next/navigation';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: "Project Not Found | Haven Tech",
        };
    }

    return {
        title: `${project.title} | Case Study`,
        description: project.description,
        openGraph: {
            title: `${project.title} | AI & Blockchain Case Study`,
            description: project.description,
            url: `https://www.thehaventech.com/work/${slug}`,
            images: [{ url: project.thumbnail }],
        },
        alternates: {
            canonical: `https://www.thehaventech.com/work/${slug}`,
        },
    };
}

export default function ProjectDetailsPage() {
    return <ProjectDetailsClient />;
}
