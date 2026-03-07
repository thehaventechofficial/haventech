'use client';

import { 
    Box, 
    Container, 
    Heading, 
    Text, 
    Flex, 
    SimpleGrid, 
    Button, 
    Stack, 
    Icon, 
    VStack, 
    Accordion, 
    AccordionItem, 
    AccordionButton, 
    AccordionPanel, 
    AccordionIcon, 
    Badge 
} from '@chakra-ui/react';
import Link from 'next/link';
import { BsArrowLeft, BsCheckCircleFill, BsArrowRight } from 'react-icons/bs';
import PageHero from '@/app/components/Common/PageHero';
import FAQSection from '@/app/components/FAQSection/FAQSection';
import { useContactPopup } from '@/app/components/ContactPopup/ContactContext';

interface ServiceDetailClientProps {
    serviceData: any;
    category: string;
}

export default function ServiceDetailClient({ serviceData, category }: ServiceDetailClientProps) {
    const { onOpen } = useContactPopup();

    return (
        <Box as="main" bg="white" minH="100vh">
            <PageHero
                title={serviceData.title}
                subtitle={`Services / ${category.split('-').join(' ')} / ${serviceData.title}`}
                image={serviceData.banner}
                ctaText="GET IN TOUCH"
                onCtaClick={onOpen}
            />

            <Container maxW="1400px" py={24}>
                <SimpleGrid columns={{ base: 1, lg: 12 }} spacing={{ base: 12, lg: 24 }}>
                    {/* Left Content Area */}
                    <Box gridColumn={{ lg: "span 8" }}>
                        <VStack align="start" spacing={12}>
                            {/* Overview Section */}
                            <Box>
                                <Text color="brand.red" fontWeight="bold" letterSpacing="widest" textTransform="uppercase" mb={4}>
                                    Overview
                                </Text>
                                <Heading as="h2" size="2xl" mb={8} color="gray.800" fontWeight="700" lineHeight="short">
                                    {serviceData.heading}
                                </Heading>
                                <Text fontSize="xl" color="gray.600" lineHeight="tall">
                                    {serviceData.description}
                                </Text>
                            </Box>

                            {/* Use Cases Section */}
                            {serviceData.useCases && (
                                <Box w="full">
                                    <Text color="brand.red" fontWeight="bold" letterSpacing="widest" textTransform="uppercase" mb={4}>
                                        Use Cases
                                    </Text>
                                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                                        {serviceData.useCases.map((useCase: any) => (
                                            <Box 
                                                key={useCase.id} 
                                                p={8} 
                                                bg="gray.50" 
                                                borderRadius="card" 
                                                border="1px solid" 
                                                borderColor="gray.100"
                                            >
                                                <Heading as="h4" size="md" mb={4} color="gray.800" lineHeight="short">
                                                    {useCase.title}
                                                </Heading>
                                                <Text color="gray.600" lineHeight="base">
                                                    {useCase.description}
                                                </Text>
                                            </Box>
                                        ))}
                                    </SimpleGrid>
                                </Box>
                            )}

                            {/* How It Works Section */}
                            {serviceData.howItWorks && (
                                <Box w="full">
                                    <Text color="brand.red" fontWeight="bold" letterSpacing="widest" textTransform="uppercase" mb={4}>
                                        How It Works
                                    </Text>
                                    <VStack spacing={6} align="start">
                                        {serviceData.howItWorks.map((step: any, idx: number) => (
                                            <Flex key={idx} gap={6}>
                                                <Flex
                                                    w={12}
                                                    h={12}
                                                    bg="brand.red"
                                                    color="white"
                                                    borderRadius="pill"
                                                    align="center"
                                                    justify="center"
                                                    flexShrink={0}
                                                    fontWeight="bold"
                                                    fontSize="xl"
                                                >
                                                    {idx + 1}
                                                </Flex>
                                                <Box>
                                                    <Heading as="h4" size="md" mb={2} color="gray.800" lineHeight="short">
                                                        {step.step}
                                                    </Heading>
                                                    <Text color="gray.600" fontSize="lg" lineHeight="base">
                                                        {step.description}
                                                    </Text>
                                                </Box>
                                            </Flex>
                                        ))}
                                    </VStack>
                                </Box>
                            )}

                            {/* Tools Section */}
                            {serviceData.tools && (
                                <Box w="full">
                                    <Text color="brand.red" fontWeight="bold" letterSpacing="widest" textTransform="uppercase" mb={4}>
                                        Technologies & Tools
                                    </Text>
                                    <Flex flexWrap="wrap" gap={3}>
                                        {serviceData.tools.map((tool: string, idx: number) => (
                                            <Badge
                                                key={idx}
                                                px={4}
                                                py={2}
                                                borderRadius="pill"
                                                bg="gray.100"
                                                color="gray.700"
                                                fontSize="md"
                                                textTransform="none"
                                            >
                                                {tool}
                                            </Badge>
                                        ))}
                                    </Flex>
                                </Box>
                            )}

                            <FAQSection faqs={serviceData.faqs}/>
                        </VStack>
                    </Box>

                    {/* Right Sidebar */}
                    <Box gridColumn={{ lg: "span 4" }}>
                        <Box
                            bg="gray.900"
                            p={10}
                            borderRadius="card"
                            position="sticky"
                            top="120px"
                            color="white"
                            boxShadow="2xl"
                        >
                            <Heading as="h4" size="lg" mb={6} lineHeight="short">
                                {serviceData.cta.text}
                            </Heading>
                            <Button
                                size="lg"
                                w="full"
                                bg="brand.red"
                                color="white"
                                _hover={{ transform: "translateY(-2px)", bg: "red.600" }}
                                h={14}
                                fontSize="lg"
                                borderRadius="pill"
                                onClick={onOpen}
                            >
                                {serviceData.cta.button || "Get Started"}
                            </Button>
                        </Box>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    );
}
