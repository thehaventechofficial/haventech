'use client';

import PageHero from '@/app/components/Common/PageHero';
import {
    Box, Container, Heading, SimpleGrid, Text,
    Flex, Button, Icon, VStack, HStack,
    Grid, GridItem, Badge, Image
} from '@chakra-ui/react';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { FiArrowUpRight, FiLayers, FiActivity, FiGlobe } from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import { getIndustries } from '@/app/lib/industries';
import { motion } from 'framer-motion';
import { useContactPopup } from '../components/ContactPopup/ContactContext';

const industryIcons: Record<string, string> = {
    'finance-fintech': 'FaUniversity',
    'real-estate': 'FaBuilding',
    'supply-chain': 'FaTruck',
    'healthcare': 'FaStethoscope',
    'gaming-metaverse': 'FaGamepad'
};

const industryImages: Record<string, string> = {
    'finance-fintech': 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=2670',
    'real-estate': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2673',
    'supply-chain': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2670',
    'healthcare': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2670',
    'gaming-metaverse': 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=2670'
};

export default function IndustryListClient() {
    const industries = getIndustries();
    const { onOpen } = useContactPopup();

    return (
        <>
            <Header />
            <Box as="main" bg="white" minH="100vh">
                <PageHero
                    title="Expertise Across Every Domain"
                    subtitle="Revolutionizing Industries through Engineering Excellence"
                    image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2670&auto=format&fit=crop"
                    ctaText="GET IN TOUCH"
                    ctaHref="#"
                    onCtaClick={onOpen}
                />

                {/* Section Header */}
                <Box py={{ base: 20, md: 32 }} bg="white">
                    <Container maxW="1400px">
                        <VStack spacing={8} textAlign="center" mb={24}>
                            <HStack spacing={4}>
                                <Box w="20px" h="2px" bg="brand.red" />
                                <Text fontWeight="900" letterSpacing="0.2em" color="brand.red" textTransform="uppercase" fontSize="xs">
                                    Our Focus Areas
                                </Text>
                                <Box w="20px" h="2px" bg="brand.red" />
                            </HStack>
                            <Heading fontSize={{ base: "4xl", md: "7xl" }} fontWeight="900" letterSpacing="-0.03em" lineHeight="1">
                                High-complexity sectors <br />
                                <Text as="span" color="brand.red">met with precision.</Text>
                            </Heading>
                            <Text fontSize="xl" color="gray.600" maxW="800px" lineHeight="1.8">
                                We help enterprises and high-growth startups navigate their industry's most critical technical hurdles with scalable, future-proof architectures.
                            </Text>
                        </VStack>

                        {/* Industries Grid */}
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={12}>
                            {industries.map((industry, index) => {
                                const iconName = industryIcons[industry.slug] || 'FaIndustry';
                                const IconComponent = (FaIcons as any)[iconName] || FaIcons.FaIndustry;
                                const displayImage = industry.heroImage || industryImages[industry.slug] || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop";

                                return (
                                    <motion.div
                                        key={industry.slug}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                    >
                                        <Link href={`/industries/${industry.slug}`}>
                                            <Box
                                                role="group"
                                                bg="gray.50"
                                                borderRadius="4xl"
                                                h="100%"
                                                transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                                                position="relative"
                                                overflow="hidden"
                                                border="1px solid"
                                                borderColor="gray.100"
                                                _hover={{
                                                    bg: "white",
                                                    shadow: "2xl",
                                                    transform: "translateY(-12px)",
                                                    borderColor: "brand.red"
                                                }}
                                            >
                                                {/* Image Overlay Header */}
                                                <Box h="240px" overflow="hidden" position="relative">
                                                    <Image 
                                                        src={displayImage} 
                                                        alt={industry.title}
                                                        w="100%"
                                                        h="100%"
                                                        objectFit="cover"
                                                        transition="transform 0.6s"
                                                        _groupHover={{ transform: 'scale(1.1)' }}
                                                    />
                                                    <Box 
                                                        position="absolute" 
                                                        inset="0" 
                                                        bgGradient="linear(to-t, gray.800, transparent)" 
                                                        opacity={0.6}
                                                    />
                                                    <Flex
                                                        position="absolute"
                                                        bottom={6}
                                                        left={6}
                                                        boxSize={14}
                                                        bg="brand.red"
                                                        color="white"
                                                        borderRadius="2xl"
                                                        align="center"
                                                        justify="center"
                                                        transition="all 0.3s"
                                                        boxShadow="xl"
                                                        _groupHover={{ transform: "rotate(10deg) scale(1.1)" }}
                                                    >
                                                        <Icon as={IconComponent} boxSize={7} />
                                                    </Flex>
                                                </Box>

                                                {/* Content */}
                                                <VStack align="flex-start" spacing={6} p={8} h="calc(100% - 240px)">
                                                    <Box flex="1">
                                                        <Heading as="h3" fontSize="2xl" fontWeight="900" mb={4} color="gray.800" letterSpacing="-0.02em">
                                                            {industry.title}
                                                        </Heading>
                                                        <Text color="gray.600" fontSize="md" lineHeight="1.7" mb={8} noOfLines={3}>
                                                            {industry.heroDescription}
                                                        </Text>
                                                    </Box>

                                                    <HStack color="brand.red" fontWeight="900" fontSize="sm" letterSpacing="0.1em">
                                                        <Text>EXPLORE SOLUTIONS</Text>
                                                        <Icon as={FiArrowUpRight} boxSize={5} transition="transform 0.3s" _groupHover={{ transform: "translate(4px, -4px)" }} />
                                                    </HStack>
                                                </VStack>

                                                {/* Subtle Background Text */}
                                                <Box
                                                    position="absolute"
                                                    bottom="-20px"
                                                    right="-20px"
                                                    fontSize="140px"
                                                    fontWeight="900"
                                                    color="gray.100"
                                                    zIndex={-1}
                                                    opacity={0.3}
                                                    userSelect="none"
                                                >
                                                    {index + 1}
                                                </Box>
                                            </Box>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </SimpleGrid>
                    </Container>
                </Box>

                {/* Performance Banner */}
                <Box py={24} bg="#050505" color="white">
                    <Container maxW="1200px">
                        <Grid templateColumns={{ base: "1fr", lg: "repeat(4, 1fr)" }} gap={12}>
                            {[
                                { label: "Success Rate", value: "99%", icon: FiActivity },
                                { label: "Project Scale", value: "$4B+", icon: FiGlobe },
                                { label: "Tech Experts", value: "150+", icon: FiLayers },
                                { label: "Industry Awards", value: "12", icon: FiArrowUpRight },
                            ].map((stat, idx) => (
                                <VStack key={idx} align={{ base: "center", lg: "flex-start" }} spacing={4}>
                                    <Icon as={stat.icon} color="brand.red" boxSize={8} />
                                    <Heading size="2xl" fontWeight="900">{stat.value}</Heading>
                                    <Text color="whiteAlpha.600" fontWeight="700" letterSpacing="0.1em">{stat.label.toUpperCase()}</Text>
                                </VStack>
                            ))}
                        </Grid>
                    </Container>
                </Box>

                {/* CTA Section */}
                <Box py={32} bg="white">
                    <Container maxW="container.lg" textAlign="center">
                        <VStack spacing={10}>
                            <Heading fontSize={{ base: "4xl", md: "6xl" }} fontWeight="900" letterSpacing="-0.04em">
                                Deep Industry Knowledge. <br />
                                <Text as="span" color="brand.red">Pure Engineering Power.</Text>
                            </Heading>
                            <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
                                Stop struggling with fragmented tech. Partner with an engineering team that understands the nuances of your business sector.
                            </Text>
                            <Button
                                size="xl"
                                bg="brand.red"
                                color="white"
                                px={14}
                                h={20}
                                fontSize="xl"
                                fontWeight="900"
                                borderRadius="full"
                                _hover={{ bg: "black", transform: "translateY(-5px)", shadow: "2xl" }}
                                transition="all 0.3s"
                                rightIcon={<BsArrowRight />}
                                onClick={onOpen}
                            >
                                TALK TO AN EXPERT
                            </Button>
                        </VStack>
                    </Container>
                </Box>
            </Box>
            <Footer />
        </>
    );
}
