import { MetadataRoute } from 'next';
import { getAllIndustrySlugs } from './lib/industries';
import servicesPagesData from './lib/Jsonfiles/services_pages_data.json';
import { projects } from './components/Work/WorkData';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.thehaventech.com';

    // Static routes
    const staticRoutes = [
        '',
        '/about',
        '/work',
        '/careers',
        '/contact',
        '/industries',
        '/services',
        '/faq',
        '/privacy',
        '/terms',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic industry routes
    const industryRoutes = getAllIndustrySlugs().map((slug) => ({
        url: `${baseUrl}/industries/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Dynamic service category routes
    const serviceCategoryRoutes = servicesPagesData.map((category) => ({
        url: `${baseUrl}/services/${category.page}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Dynamic individual service routes
    const individualServiceRoutes = servicesPagesData.flatMap((category) =>
        category.services.map((service) => ({
            url: `${baseUrl}/services/${category.page}/${service.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        }))
    );

    // Dynamic work/project routes
    const projectRoutes = projects.map((project) => ({
        url: `${baseUrl}/work/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [
        ...staticRoutes,
        ...industryRoutes,
        ...serviceCategoryRoutes,
        ...individualServiceRoutes,
        ...projectRoutes,
    ];
}
