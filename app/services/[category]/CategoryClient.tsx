'use client';

import { 
    Box, 
    Container, 
    Heading, 
    SimpleGrid, 
    Text, 
    Flex, 
    Button, 
    Stack, 
    VStack, 
    Icon, 
    Accordion, 
    AccordionItem, 
    AccordionButton, 
    AccordionPanel, 
    AccordionIcon 
} from '@chakra-ui/react';
import Link from 'next/link';
import { BsArrowRight, BsCheckCircleFill } from 'react-icons/bs';
import PageHero from '@/app/components/Common/PageHero';
import { useContactPopup } from '@/app/components/ContactPopup/ContactContext';
import FAQSection from '@/app/components/FAQSection/FAQSection';

interface CategoryClientProps {
    categoryData: any;
}

export default function CategoryClient({ categoryData }: CategoryClientProps) {
    const { onOpen } = useContactPopup();

    return (
        <Box as="main" bg="white" minH="100vh">
            <PageHero
                title={categoryData.title}
                subtitle={`Services / ${categoryData.title}`}
                image="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2626&auto=format&fit=crop"
                ctaText="GET IN TOUCH"
                onCtaClick={onOpen}
            />

            <Container maxW="1400px" py={20}>
                <VStack spacing={8} align="start" mb={20}>
                    <Heading as="h2" size="2xl" color="gray.800" lineHeight="short">
                        {categoryData.heading}
                    </Heading>
                    <Text fontSize="xl" color="gray.600" lineHeight="tall">
                        {categoryData.description}
                    </Text>
                </VStack>

                {/* Services Grid Section */}
                <Heading as="h3" size="xl" mb={10} color="gray.800">
                    Our Specialized Services
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={32}>
                    {categoryData.services.map((service: any, index: number) => (
                        <Box
                            key={service.id}
                            bg="white"
                            border="1px solid"
                            borderColor="gray.100"
                            borderRadius="card"
                            p={8}
                            transition="all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                            _hover={{
                                borderColor: 'brand.red',
                                transform: 'translateY(-10px)',
                                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)',
                            }}
                            position="relative"
                            role="group"
                        >
                            <Text
                                position="absolute"
                                top={4}
                                right={6}
                                fontSize="6xl"
                                fontWeight="900"
                                color="gray.50"
                                lineHeight="shorter"
                                zIndex="0"
                            >
                                0{index + 1}
                            </Text>

                            <VStack align="start" spacing={4} position="relative" zIndex={1}>
                                <Heading as="h4" size="lg" color="gray.800" lineHeight="short">
                                    {service.title}
                                </Heading>
                                <Text color="gray.600" fontSize="lg" lineHeight="base">
                                    {service.description}
                                </Text>
                                <Link href={`/services/${categoryData.page}/${service.slug}`}>
                                    <Flex
                                        align="center"
                                        color="gray.800"
                                        fontWeight="bold"
                                        fontSize="lg"
                                        _groupHover={{ color: 'brand.red' }}
                                        transition="all 0.3s"
                                    >
                                        Learn More
                                        <Box as="span" ml={3} transition="transform 0.3s" _groupHover={{ transform: 'translateX(5px)' }}>
                                            <BsArrowRight />
                                        </Box>
                                    </Flex>
                                </Link>
                            </VStack>
                        </Box>
                    ))}
                </SimpleGrid>

                {/* Why Choose Us Section */}
                {categoryData.whyChoose && (
                    <Box mb={32}>
                        <Heading as="h3" size="xl" mb={10} color="gray.800">
                            Why Choose NCX for {categoryData.title}?
                        </Heading>
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                            {categoryData.whyChoose.map((item: string, idx: number) => (
                                <Flex
                                    key={idx}
                                    align="center"
                                    bg="gray.50"
                                    p={6}
                                    borderRadius="inner"
                                    border="1px solid"
                                    borderColor="gray.100"
                                >
                                    <Icon as={BsCheckCircleFill} color="brand.red" mr={4} />
                                    <Text color="gray.700" fontWeight="medium">{item}</Text>
                                </Flex>
                            ))}
                        </SimpleGrid>
                    </Box>
                )}

                {/* FAQs Section */}
                {/* {categoryData.faqs && (
                    <Box mb={20}>
                        <Heading as="h3" size="xl" mb={10} color="gray.800">
                            {categoryData.faqs.heading}
                        </Heading>
                        <Accordion allowMultiple>
                            {categoryData.faqs.items.map((faq: any, idx: number) => (
                                <AccordionItem key={idx} border="none" mb={4}>
                                    <AccordionButton
                                        bg="gray.50"
                                        p={6}
                                        borderRadius="inner"
                                        _hover={{ bg: "gray.100" }}
                                        _expanded={{ bg: "brand.red", color: "white" }}
                                    >
                                        <Box flex="1" textAlign="left" fontWeight="bold" fontSize="lg">
                                            {faq.question}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={6} pt={4} px={6} color="gray.600" fontSize="lg" lineHeight="base">
                                        {faq.answer}
                                    </AccordionPanel>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </Box>
                )} */}
                <FAQSection faqs={categoryData.faqs}/>

                {/* CTA Section */}
                <Box
                    bg="gray.900"
                    borderRadius="card"
                    p={{ base: 10, md: 20 }}
                    textAlign="center"
                    color="white"
                    mt={20}
                >
                    <Heading size="2xl" mb={8} lineHeight="short">
                        {categoryData.cta.text}
                    </Heading>
                    <Button
                        size="lg"
                        bg="red.500"
                        color="white"
                        px={12}
                        h={16}
                        fontSize="xl"
                        borderRadius="pill"
                        onClick={onOpen}
                        _hover={{ transform: 'translateY(-5px)', shadow: '2xl', bg: 'red.600' }}
                        w={{ base: "full", md: "auto" }}
                    >
                        Get Started
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
