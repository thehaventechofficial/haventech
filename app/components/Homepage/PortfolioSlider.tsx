'use client';

import {
    Box,
    Container,
    Flex,
    Heading,
    HStack,
    Image,
    Stack,
    Text,
    IconButton,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useState, useCallback } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const MotionBox = motion(Box);

const portfolioItems = [
    {
        id: 1,
        year: '2026',
        tags: ['NEXTJS', 'TAILWIND', 'NODEJS', 'CHAKRA UI'],
        title: 'Sorsify',
        description:
            'A comprehensive digital solutions agency platform providing scalable marketing, 24/7 omnichannel support, and Shopify ecommerce development for global enterprises.',
        image: '/images/sorsify-mockup.png',
    },
    {
        id: 2,
        year: '2026',
        tags: ['SOLANA', 'WEB3', 'NEXTJS', 'VERCEL'],
        title: 'Crypto Gaming',
        description:
        'A Web3 gaming hub integrated with the Solana blockchain. Features five arcade-style games with NFT-gated access and on-chain progress tracking.',
        image: '/images/cryptogaming.png',
    },
    {
        id: 3,
        year: '2026',
        tags: ['CYBERSECURITY', 'EDTECH', 'NESTJS', 'FIREBASE'],
        title: 'Cyber Unicorns',
        description:
            'An interactive cybersecurity education platform and consultancy hub offering jargon-free training, vCISO services, and mobile-based learning resources.',
        image: '/images/cyber unicorn.png',
    },
    {
        id: 4,
        year: '2026',
        tags: ['NEXTJS', 'MONGODB', 'AWS', 'I18NEXT'],
        title: 'Complete Pakistan',
        description:
            'A massive-scale overseas employment portal connecting talent with Gulf-region opportunities through verified OEP directories and real-time job matching.',
        image: '/images/complete-pakistan.png',
    },
    {
        id: 5,
        year: '2026',
        tags: ['I18NEXT', 'NEXTJS', 'SWIPERSLIDER', 'CHAKRA UI'],
        title: 'Kafela',
        description:
            'An authentic Bengali Islamic educational platform providing structured access to Quran, 34,000+ Hadith, and real-time spiritual tools.',
        image: '/images/kafela.png',
    },
    {
        id: 6,
        year: '2026',
        tags: ['ETHEREUM', 'BLOCKCHAIN', 'DAO', 'NEXTJS'],
        title: 'Everyone World',
        description:
            'A decentralized social ecosystem and Web3 hub. Replaces subscription tools with a unified global stream, zero-fee ecommerce, and community governance.',
        image: '/images/everyone.png',
    }
];

const AUTO_PLAY_INTERVAL = 50000;

export default function PortfolioSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
    }, []);

    const prevSlide = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, AUTO_PLAY_INTERVAL);

        return () => clearInterval(timer);
    }, [nextSlide]);

    const activeItem = portfolioItems[currentIndex];
    return (
        <Box
            as="section"
            bg="#050505"
            py={{ base: 20, md: 32 }}
            position="relative"
            overflow="hidden"
            color="white"
        >
            <AnimatePresence mode="wait">
                <MotionBox
                    key={activeItem.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 0.03, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 1 }}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    zIndex={0}
                    pointerEvents="none"
                >
                    <Text
                        fontSize={{ base: "8rem", md: "18rem" }}
                        fontWeight="900"
                        lineHeight="1"
                        whiteSpace="nowrap"
                        textAlign="center"
                    >
                        {activeItem.title.toUpperCase()}
                    </Text>
                </MotionBox>
            </AnimatePresence>

            <Container maxW="1400px" position="relative" zIndex={2}>
                <Flex direction={{ base: 'column', lg: 'row' }} align="center" gap={12}>
                    <Stack spacing={8} flex="1" zIndex={3}>
                        <Box>
                            <HStack spacing={3} mb={4}>
                                <Box h="1px" w="40px" bg="#FF4D00" />
                                <Text
                                    color="#FF4D00"
                                    fontSize="xs"
                                    fontWeight="800"
                                    letterSpacing="0.4em"
                                    textTransform="uppercase"
                                >
                                    Project {String(currentIndex + 1).padStart(2, '0')} // {activeItem.year}
                                </Text>
                            </HStack>

                            <AnimatePresence mode="wait">
                                <MotionBox
                                    key={activeItem.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                >
                                    <Heading
                                        as="h2"
                                        fontSize={{ base: '3xl', md: 'display-lg' }}
                                        lineHeight="tight"
                                        mb={6}
                                        letterSpacing="-0.04em"
                                    >
                                        {activeItem.title}
                                    </Heading>
                                    <Text
                                        fontSize="lg"
                                        color="whiteAlpha.800"
                                        maxW="450px"
                                        lineHeight="1.6"
                                    >
                                        {activeItem.description}
                                    </Text>
                                </MotionBox>
                            </AnimatePresence>
                        </Box>

                        <HStack spacing={4} wrap="wrap">
                            {activeItem.tags.map((tag) => (
                                <Text key={tag} fontSize="xs" fontWeight="700" color="whiteAlpha.700" letterSpacing="widest">
                                    #{tag}
                                </Text>
                            ))}
                        </HStack>

                        <HStack spacing={4} pt={4}>
                            <IconButton
                                aria-label="Prev"
                                icon={<FiArrowLeft />}
                                onClick={prevSlide}
                                variant="outline"
                                colorScheme="whiteAlpha.800"
                                borderRadius="pill"
                                size="lg"
                                _hover={{ bg: '#FF4D00', borderColor: '#FF4D00', transform: 'scale(1.1)' }}
                            />
                            <IconButton
                                aria-label="Next"
                                icon={<FiArrowRight />}
                                onClick={nextSlide}
                                variant="outline"
                                colorScheme="whiteAlpha.800"
                                borderRadius="pill"
                                size="lg"
                                _hover={{ bg: '#FF4D00', borderColor: '#FF4D00', transform: 'scale(1.1)' }}
                            />
                        </HStack>
                    </Stack>

                    <Box flex="1.2" position="relative" h={{ base: '400px', md: '620px' }} w="full">
                        <AnimatePresence initial={false} custom={direction}>
                            <MotionBox
                                key={currentIndex}
                                custom={direction}
                                position="absolute"
                                w="full"
                                h="full"
                                initial={{ opacity: 0, scale: 0.9, rotateY: direction > 0 ? 15 : -15 }}
                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                exit={{ opacity: 0, scale: 1.1, rotateY: direction > 0 ? -15 : 15 }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                style={{ perspective: "1200px" }}
                            >
                                <Box
                                    w="full"
                                    h="full"
                                    borderRadius="card"
                                    overflow="hidden"
                                    boxShadow="0 50px 100px -20px rgba(0,0,0,0.7)"
                                    position="relative"
                                >
                                    <Image
                                        src={activeItem.image}
                                        alt={activeItem.title}
                                        w="100%"
                                        h="100%"
                                        objectFit="cover"
                                    />
                                    <Box
                                        position="absolute"
                                        inset="0"
                                        bg="linear-gradient(to top, rgba(5,5,5,0.6) 0%, transparent 50%)"
                                    />
                                </Box>
                            </MotionBox>
                        </AnimatePresence>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
}