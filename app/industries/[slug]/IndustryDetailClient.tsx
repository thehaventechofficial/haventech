'use client';

import { useRef } from 'react';
import PageHero from '@/app/components/Common/PageHero';
import {
    Box, Container, Heading, Text, SimpleGrid,
    Flex, Button, List, ListItem, ListIcon, Icon,
    VStack, HStack, Badge, Grid, GridItem,
    useColorModeValue, Image, Stack, Accordion,
    AccordionItem, AccordionButton, AccordionPanel, AccordionIcon
} from '@chakra-ui/react';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import { BsArrowRight, BsCheckCircle, BsLightningCharge, BsShieldCheck, BsCpu, BsBriefcase, BsCheck2Circle } from 'react-icons/bs';
import { FiArrowUpRight, FiLayers, FiActivity, FiGlobe, FiZap, FiLayout } from 'react-icons/fi';
import Link from 'next/link';
import * as FaIcons from 'react-icons/fa';
import { IndustryData } from '@/app/lib/industries';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useContactPopup } from '../../components/ContactPopup/ContactContext';

const MotionBox = motion(Box);

interface IndustryDetailClientProps {
    industry: IndustryData;
}

const industryImages: Record<string, string> = {
    'finance-fintech': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop',
    'real-estate': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop',
    'supply-chain': 'https://images.unsplash.com/photo-1565514020179-026b92b2d70b?q=80&w=2000&auto=format&fit=crop',
    'healthcare': 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2000&auto=format&fit=crop',
    'gaming-metaverse': 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=2670'
};

export default function IndustryDetailClient({ industry }: IndustryDetailClientProps) {
    const { onOpen } = useContactPopup();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
    
    const displayImage = industry.heroImage || industryImages[industry.slug] || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop";
    const parallaxImg = industryImages[industry.slug] || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop";

    return (
        <>
            <Header />
            <Box as="main" bg="white" minH="100vh" ref={containerRef}>
                <PageHero
                    title={industry.title}
                    subtitle={`Industries / ${industry.title}`}
                    image={displayImage}
                    ctaText="GET IN TOUCH"
                    ctaHref="#"
                    onCtaClick={onOpen}
                />

                {/* Section 1: Overview & Stats */}
                <Box pb={{ base: 24, md: 32 }} bg="white">
                    <Container maxW="1400px">
                        <Grid templateColumns={{ base: "1fr", lg: "repeat(12, 1fr)" }} gap={20} alignItems="center">
                            <GridItem colSpan={{ base: 1, lg: 7 }}>
                                <VStack align="flex-start" spacing={10}>
                                    <HStack spacing={4}>
                                        <Box w="30px" h="2px" bg="brand.red" />
                                        <Text fontWeight="900" letterSpacing="0.2em" color="brand.red" textTransform="uppercase" fontSize="sm">
                                            The Landscape
                                        </Text>
                                    </HStack>
                                    <Heading fontSize={{ base: "4xl", md: "7xl" }} fontWeight="900" letterSpacing="-0.04em" lineHeight="1">
                                        {industry.overview.title.split(' ').map((word, i) => (
                                            word.toLowerCase() === 'secure,' || word.toLowerCase() === 'intelligent' || word.toLowerCase() === 'blockchain' || word.toLowerCase() === 'digital' ? 
                                            <Text as="span" key={i} color="brand.red">{word} </Text> : word + ' '
                                        ))}
                                    </Heading>
                                    <Text fontSize="xl" color="gray.600" lineHeight="1.8" maxW="800px">
                                        {industry.overview.content}
                                    </Text>
                                    <Box p={8} bg="black" borderRadius="3xl" w="100%" boxShadow="2xl">
                                        <Text color="white" fontSize="lg" fontWeight="500" fontStyle="italic">
                                            "{industry.heroDescription}"
                                        </Text>
                                    </Box>
                                </VStack>
                            </GridItem>

                            <GridItem colSpan={{ base: 1, lg: 5 }}>
                                <VStack spacing={6} align="stretch">
                                    {industry.overview.stats.map((stat, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                                        >
                                            <Box
                                                p={8}
                                                bg="gray.50"
                                                borderRadius="2xl"
                                                border="1px solid"
                                                borderColor="gray.100"
                                                transition="all 0.3s"
                                                _hover={{ bg: "white", boxShadow: "xl", borderColor: "brand.red" }}
                                            >
                                                <Heading fontSize="5xl" fontWeight="900" color="brand.red" mb={1}>
                                                    {stat.value}
                                                </Heading>
                                                <Text fontWeight="800" fontSize="lg" color="gray.800">
                                                    {stat.label}
                                                </Text>
                                            </Box>
                                        </motion.div>
                                    ))}
                                </VStack>
                            </GridItem>
                        </Grid>
                    </Container>
                </Box>

                {/* Section 2: Large Parallax Vision Section */}
                <Box h={{ base: "400px", md: "700px" }} position="relative" overflow="hidden" zIndex={1}>
                    <Box
                        as={motion.div}
                        style={{ y: parallaxY, scale: imageScale } as any}
                        position="absolute"
                        inset="0"
                        zIndex={0}
                    >
                        <Image
                            src={parallaxImg}
                            alt="Visionary Tech"
                            w="100%"
                            h="120%"
                            objectFit="cover"
                            filter="brightness(0.4) contrast(1.1)"
                        />
                    </Box>
                    <Box
                        position="absolute"
                        inset="0"
                        bgGradient="linear(to-b, white 0%, transparent 20%, transparent 80%, white 100%)"
                        zIndex={1}
                    />
                    <Container maxW="1200px" h="100%" position="relative" zIndex={2}>
                        <Flex align="center" justify="center" h="100%">
                            <VStack spacing={6} textAlign="center">
                                <Badge colorScheme="red" px={4} py={1} borderRadius="full" fontSize="xs" fontWeight="900" letterSpacing="0.1em">
                                    ENGINEERING THE FUTURE
                                </Badge>
                                <Heading color="white" fontSize={{ base: "4xl", md: "7xl" }} fontWeight="900" letterSpacing="-0.04em" lineHeight="1.1">
                                    Uncompromising Tech <br /> for High-Stakes Markets.
                                </Heading>
                            </VStack>
                        </Flex>
                    </Container>
                </Box>

                {/* Section 3: Challenges We Solve */}
                <Box py={32} bg="white">
                    <Container maxW="1440px">
                        <VStack spacing={20} align="stretch">
                            <Box textAlign="center" mb={10}>
                                <HStack justify="center" mb={6}>
                                    <Box w="20px" h="2px" bg="brand.red" />
                                    <Text fontWeight="900" color="brand.red" letterSpacing="0.2em" textTransform="uppercase">Critical Hurdles</Text>
                                    <Box w="20px" h="2px" bg="brand.red" />
                                </HStack>
                                <Heading fontSize={{ base: "3xl", md: "6xl" }} fontWeight="900" mb={8} letterSpacing="-0.02em">
                                    {industry.challenges.title}
                                </Heading>
                                <Text fontSize="xl" color="gray.600" maxW="1000px" mx="auto" lineHeight="1.8">
                                    {industry.challenges.description}
                                </Text>
                            </Box>

                            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                                {industry.challenges.items.map((challenge, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    >
                                        <Box
                                            bg="gray.50"
                                            p={10}
                                            borderRadius="3xl"
                                            border="1px solid"
                                            borderColor="gray.100"
                                            position="relative"
                                            transition="all 0.4s"
                                            h="100%"
                                            _hover={{ bg: "white", shadow: "2xl", borderColor: "brand.red", transform: "translateY(-10px)" }}
                                        >
                                            <Flex boxSize={14} bg="brand.red" borderRadius="xl" align="center" justify="center" mb={8} color="white" boxShadow="lg">
                                                <Icon as={[BsLightningCharge, BsShieldCheck, BsCpu, FiLayers, FiActivity, FiGlobe][idx % 6]} boxSize={7} />
                                            </Flex>
                                            <Heading fontSize="2xl" fontWeight="900" mb={4} color="gray.800">
                                                {challenge.title}
                                            </Heading>
                                            <Text color="gray.600" fontSize="lg" lineHeight="1.7">
                                                {challenge.description}
                                            </Text>
                                        </Box>
                                    </motion.div>
                                ))}
                            </SimpleGrid>
                        </VStack>
                    </Container>
                </Box>

                {/* Section 4: Our Industry Solutions (Detailed List) */}
                <Box py={32} bg="gray.900" color="white">
                    <Container maxW="1400px">
                        <VStack spacing={20} align="stretch">
                            <Box textAlign="left">
                                <Badge colorScheme="red" variant="solid" mb={6} px={4} py={1} borderRadius="md" fontWeight="900">
                                    SOLUTIONS TAILORED FOR YOU
                                </Badge>
                                <Heading fontSize={{ base: "4xl", md: "6xl" }} fontWeight="900" mb={8} letterSpacing="-0.03em" lineHeight="1.1">
                                    {industry.solutions.title}
                                </Heading>
                            </Box>

                            <Accordion allowMultiple>
                                {industry.solutions.items.map((solution, idx) => (
                                    <AccordionItem key={idx} border="none" mb={6}>
                                        <AccordionButton
                                            p={10}
                                            bg="whiteAlpha.50"
                                            borderRadius="3xl"
                                            border="1px solid"
                                            borderColor="whiteAlpha.100"
                                            _hover={{ bg: "whiteAlpha.100", borderColor: "brand.red" }}
                                            _expanded={{ bg: "white", color: "gray.900" }}
                                            transition="all 0.3s"
                                        >
                                            <HStack flex="1" spacing={6} textAlign="left">
                                                <Flex 
                                                    boxSize={14} 
                                                    bg="brand.red" 
                                                    color="white" 
                                                    borderRadius="2xl" 
                                                    align="center" 
                                                    justify="center"
                                                    flexShrink={0}
                                                >
                                                    <Icon as={FiZap} boxSize={7} />
                                                </Flex>
                                                <VStack align="start" spacing={1}>
                                                    <Badge colorScheme="red" variant="subtle" fontSize="xs">{solution.category}</Badge>
                                                    <Heading fontSize="2xl" fontWeight="900">{solution.title}</Heading>
                                                </VStack>
                                            </HStack>
                                            <AccordionIcon fontSize="2xl" />
                                        </AccordionButton>
                                        <AccordionPanel pb={10} pt={8} px={10}>
                                            <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={16}>
                                                <VStack align="start" spacing={8}>
                                                    <Text fontSize="xl" color="whiteAlpha.700" lineHeight="1.8">
                                                        {solution.description}
                                                    </Text>
                                                    <Box w="100%">
                                                        <Text fontWeight="900" color="brand.red" mb={4} fontSize="sm" letterSpacing="0.2em" textTransform="uppercase">Core Features</Text>
                                                        <SimpleGrid columns={2} spacing={4}>
                                                            {solution.features.map((f, i) => (
                                                                <HStack key={i} align="start">
                                                                    <Icon as={BsCheck2Circle} color="brand.red" mt={1} />
                                                                    <Text fontSize="md" fontWeight="600">{f}</Text>
                                                                </HStack>
                                                            ))}
                                                        </SimpleGrid>
                                                    </Box>
                                                </VStack>
                                                <VStack align="start" spacing={8}>
                                                    <Box w="100%">
                                                        <Text fontWeight="900" color="brand.red" mb={4} fontSize="sm" letterSpacing="0.2em" textTransform="uppercase">Technologies</Text>
                                                        <Flex wrap="wrap" gap={3}>
                                                            {solution.technologies.map((t, i) => (
                                                                <Badge key={i} px={4} py={2} borderRadius="lg" bg="whiteAlpha.100" color="white" fontWeight="700" variant="solid">{t}</Badge>
                                                            ))}
                                                        </Flex>
                                                    </Box>
                                                    <Box w="100%">
                                                        <Text fontWeight="900" color="brand.red" mb={4} fontSize="sm" letterSpacing="0.2em" textTransform="uppercase">Enterprise Benefits</Text>
                                                        <List spacing={3}>
                                                            {solution.benefits.map((b, i) => (
                                                                <ListItem key={i} fontSize="lg" display="flex" alignItems="center">
                                                                    <ListIcon as={BsArrowRight} color="brand.red" />
                                                                    <Text color="whiteAlpha.800">{b}</Text>
                                                                </ListItem>
                                                            ))}
                                                        </List>
                                                    </Box>
                                                </VStack>
                                            </Grid>
                                        </AccordionPanel>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </VStack>
                    </Container>
                </Box>

                {/* Final CTA Section */}
                <Box py={32} bg="white">
                    <Container maxW="1200px">
                        <Box 
                            bg="gray.900" 
                            borderRadius="4xl" 
                            p={{ base: 12, md: 24 }} 
                            textAlign="center" 
                            color="white"
                            position="relative"
                            overflow="hidden"
                            boxShadow="dark-lg"
                        >
                            {/* Abstract Background Glow */}
                            <Box 
                                position="absolute" 
                                top="-20%" 
                                right="-20%" 
                                boxSize="500px" 
                                bg="brand.red" 
                                filter="blur(150px)" 
                                opacity={0.15} 
                                zIndex={0}
                            />
                            
                            <VStack spacing={10} position="relative" zIndex={1}>
                                <Badge colorScheme="red" variant="outline" color="brand.red" px={6} py={2} borderRadius="full" fontSize="sm" fontWeight="900">
                                    PARTNER WITH US
                                </Badge>
                                <Heading fontSize={{ base: "4xl", md: "7xl" }} fontWeight="900" letterSpacing="-0.04em">
                                    {industry.cta.title}
                                </Heading>
                                <Text fontSize="2xl" color="whiteAlpha.700" maxW="800px" mx="auto" lineHeight="1.6">
                                    {industry.cta.description}
                                </Text>
                                <Button
                                    size="xl"
                                    bg="brand.red"
                                    color="white"
                                    px={16}
                                    h={20}
                                    fontSize="xl"
                                    fontWeight="900"
                                    borderRadius="full"
                                    _hover={{ bg: "white", color: "gray.900", transform: "scale(1.05)" }}
                                    transition="all 0.3s"
                                    w="full"
                                    maxW="400px"
                                    rightIcon={<FiArrowUpRight />}
                                    onClick={onOpen}
                                >
                                    {industry.cta.text}
                                </Button>
                            </VStack>
                        </Box>
                    </Container>
                </Box>
            </Box>
            <Footer />
        </>
    );
}
