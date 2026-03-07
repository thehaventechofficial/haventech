'use client';

import servicesPagesData from '@/app/lib/Jsonfiles/services_pages_data.json';
import { Box, Container, Heading, SimpleGrid, Text, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import * as Icons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';
import PageHero from '@/app/components/Common/PageHero';
import { useContactPopup } from '@/app/components/ContactPopup/ContactContext';

const iconMap: any = { ...Icons, ...AiIcons };

const categoryIcons: Record<string, string> = {
    'ai-services': 'FiCpu',
    'blockchain-services': 'FiAnchor',
    'web-app-development-services': 'FiGlobe',
    'mobile-app-development-services': 'FiSmartphone',
    'prototyping-and-mvp-services': 'FiZap'
};

export default function ServicesClient() {
    const { onOpen } = useContactPopup();
    return (
        <Box as="main" bg="white">
            <PageHero
                title="Our Expertise"
                subtitle="Services"
                image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop"
                ctaText="GET IN TOUCH"
                onCtaClick={onOpen}
            />

            <Container maxW="1400px" py={32}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                    {servicesPagesData.map((category: any) => {
                        const iconName = categoryIcons[category.page] || 'FiBox';
                        const IconComponent = iconMap[iconName] || Icons.FiBox;
                        return (
                            <Link key={category.id} href={`/services/${category.page}`}>
                                <Box
                                    p={8}
                                    bg="gray.50"
                                    borderRadius="2xl"
                                    border="1px solid"
                                    borderColor="gray.100"
                                    transition="all 0.3s"
                                    _hover={{ borderColor: "brand.red", bg: "white", transform: "translateY(-5px)", shadow: "xl" }}
                                    height="full"
                                    role="group"
                                >
                                    <Box mb={6} color="brand.red">
                                        <IconComponent size={40} />
                                    </Box>
                                    <Heading as="h2" color="gray.800" size="lg" mb={4}>
                                        {category.title}
                                    </Heading>
                                    <Text color="gray.600" mb={8}>
                                        {category.heading}
                                    </Text>
                                    <Flex align="center" color="brand.red" fontWeight="bold">
                                        View Services <Box as="span" ml={2} transition="transform 0.3s" _groupHover={{ transform: 'translateX(5px)' }}><BsArrowRight /></Box>
                                    </Flex>
                                </Box>
                            </Link>
                        );
                    })}
                </SimpleGrid>
            </Container>
        </Box>
    );
}
