"use client";

import { useRef } from "react";
import { Box, Text, Flex, Container, Badge, Stack } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import {
    RiArrowRightLine,
    RiCheckboxCircleFill,
    RiAwardFill,
    RiGroupFill,
    RiSparklingFill,
} from "react-icons/ri";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);

// ── Animation variants ────────────────────────────────────────────────────
const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
};

const slideRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.11 },
    }),
};

const bullets = [
    "Empowering teams with cutting-edge strategies",
    "Building inclusive, high-performance cultures",
    "Delivering measurable, sustainable outcomes",
];

const stats = [
    { icon: RiAwardFill, value: "15+", label: "Years of Impact" },
    { icon: RiGroupFill, value: "3K+", label: "Lives Transformed" },
    { icon: RiCheckboxCircleFill, value: "98%", label: "Client Satisfaction" },
];

export default function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <Box as="section" bg="#f7f6f3" py={{ base: 12, md: 20 }} ref={ref}>
            <Container maxW="1440px" px={{ base: 4, md: 8 }}>
                <Stack spacing={{ base: 6, md: 8 }}>
                    <Flex
                        direction={{ base: "column", lg: "row" }}
                        borderRadius="32px"
                        overflow="hidden"
                        boxShadow="0 8px 48px rgba(0,0,0,0.09)"
                        minH={{ base: "auto", lg: "520px" }}
                        bg="white"
                    >
                        <MotionBox
                            flex={{ base: "none", lg: "1.1" }}
                            position="relative"
                            minH={{ base: "280px", lg: "auto" }}
                            overflow="hidden"
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            // @ts-ignore
                            variants={slideLeft}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&q=85"
                                alt="Our team collaborating"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    display: "block",
                                }}
                            />

                            <Box
                                position="absolute"
                                inset={0}
                                bgGradient="linear(to-tr, rgba(185,28,28,0.25), transparent 60%)"
                            />
                            <MotionBox
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.65, duration: 0.55, ease: [0.22, 1, 0.36, 1] } as any}
                                position="absolute"
                                bottom={7}
                                right={7}
                                bg="white"
                                borderRadius="20px"
                                px={6}
                                py={4}
                                boxShadow="0 12px 40px rgba(0,0,0,0.16)"
                                display="flex"
                                alignItems="center"
                                gap={4}
                            >
                                <Box
                                    w="48px"
                                    h="48px"
                                    borderRadius="14px"
                                    bg="red.50"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    color="red.500"
                                >
                                    <RiSparklingFill size={22} />
                                </Box>
                                <Box>
                                    <Text
                                        fontSize="2xl"
                                        fontWeight="900"
                                        color="red.500"
                                        lineHeight={1}
                                        fontFamily="'Georgia', serif"
                                    >
                                        10+
                                    </Text>
                                    <Text fontSize="xs" color="gray.500" mt={0.5} fontWeight="500">
                                        Years of Excellence
                                    </Text>
                                </Box>
                            </MotionBox>
                        </MotionBox>

                        <MotionBox
                            flex="1"
                            bg="white"
                            px={{ base: 7, md: 12, xl: 16 }}
                            py={{ base: 10, md: 14 }}
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            // @ts-ignore
                            variants={slideRight}
                        >
                            <MotionBox
                                custom={0}
                                // @ts-ignore
                                variants={fadeUp}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                            >
                                <Badge
                                    bg="red.50"
                                    color="red.500"
                                    fontSize="xs"
                                    fontWeight="700"
                                    letterSpacing="0.14em"
                                    textTransform="uppercase"
                                    px={4}
                                    py={1.5}
                                    borderRadius="full"
                                    mb={5}
                                >
                                    Who We Are
                                </Badge>
                            </MotionBox>

                            <MotionText
                                custom={1}
                                // @ts-ignore
                                variants={fadeUp}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                as="h2"
                                fontSize={{ base: "2xl", md: "3xl", xl: "4xl" }}
                                fontWeight="900"
                                color="gray.900"
                                lineHeight={1.18}
                                letterSpacing="-0.025em"
                                mb={5}
                                fontFamily="'Georgia', serif"
                            >
                                We Build{" "}
                                <Text
                                    as="span"
                                    color="red.500"
                                    position="relative"
                                    _after={{
                                        content: '""',
                                        position: "absolute",
                                        bottom: "-2px",
                                        left: 0,
                                        right: 0,
                                        height: "3px",
                                        bg: "red.200",
                                        borderRadius: "full",
                                    }}
                                >
                                    Powerful Digital Solutions
                                </Text>{" "}
                                for the Future
                            </MotionText>

                            <MotionText
                                custom={2}
                                // @ts-ignore
                                variants={fadeUp}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                fontSize={{ base: "sm", md: "md" }}
                                color="gray.500"
                                lineHeight={1.85}
                                mb={8}
                                maxW="460px"
                            >
                                At The Haven Tech, we help businesses transform their ideas into scalable digital products. Our team specializes in modern Web2 development, blockchain-powered Web3 solutions, and AI-driven innovations. We combine strong technical expertise with a deep understanding of business needs to create products that are secure, scalable, and built for long-term growth.
                            </MotionText>

                            {/* Bullet points */}
                            <Stack spacing={3} mb={10}>
                                {bullets.map((b, i) => (
                                    <MotionFlex
                                        key={b}
                                        custom={3 + i}
                                        // @ts-ignore
                                        variants={fadeUp}
                                        initial="hidden"
                                        animate={isInView ? "visible" : "hidden"}
                                        align="center"
                                        gap={3}
                                    >
                                        <Box
                                            w="28px"
                                            h="28px"
                                            borderRadius="8px"
                                            bg="red.50"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                            color="red.500"
                                            flexShrink={0}
                                        >
                                            <RiCheckboxCircleFill size={16} />
                                        </Box>
                                        <Text fontSize="sm" color="gray.700" fontWeight="500">
                                            {b}
                                        </Text>
                                    </MotionFlex>
                                ))}
                            </Stack>

                            {/* CTA */}
                            <MotionBox
                                custom={6}
                                // @ts-ignore
                                variants={fadeUp}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                            >
                                <Flex
                                    as="button"
                                    align="center"
                                    gap={3}
                                    bg="red.500"
                                    color="white"
                                    px={7}
                                    py={4}
                                    borderRadius="full"
                                    fontWeight="700"
                                    fontSize="sm"
                                    letterSpacing="0.02em"
                                    width="fit-content"
                                    cursor="pointer"
                                    _hover={{
                                        bg: "red.600",
                                        transform: "translateY(-2px)",
                                    }}
                                    transition="all 0.25s ease"
                                >
                                    Let's Connect
                                    <RiArrowRightLine size={17} />
                                </Flex>
                            </MotionBox>
                        </MotionBox>
                    </Flex>
                </Stack>
            </Container>
        </Box>
    );
}