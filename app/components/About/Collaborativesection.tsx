"use client";

import { useRef } from "react";
import { Box, Text, Flex, Container } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { RiTeamLine, RiLightbulbFlashLine, RiHandHeartLine, RiCodeSSlashLine, RiGlobalLine, RiRocket2Line } from "react-icons/ri";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);

const images = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
        alt: "Team brainstorming on a wall of sticky notes",
        className: "top-left",
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=600&q=80",
        alt: "Professional with laptop in creative office",
        className: "mid-left",
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80",
        alt: "Group workshop activity with bowls and art supplies",
        className: "center-large",
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
        alt: "Person presenting at whiteboard",
        className: "center-small",
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
        alt: "Two people in discussion",
        className: "right-top",
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
        alt: "Modern industrial co-working space",
        className: "far-right-top",
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
        alt: "Team collaboration over documents",
        className: "far-right-bottom",
    },
];

const highlights = [
    { icon: RiCodeSSlashLine, label: "Projects Delivered", value: "150+" },
    { icon: RiGlobalLine, label: "Global Clients", value: "40+" },
    { icon: RiRocket2Line, label: "Startups Launched", value: "25+" },
];

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
    }),
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.88 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
    }),
};

const tileStyles: Record<string, object> = {
    "top-left": {
        gridColumn: "1 / 2",
        gridRow: "1 / 2",
        borderRadius: "20px",
        aspectRatio: "4/3",
    },
    "mid-left": {
        gridColumn: "1 / 2",
        gridRow: "2 / 3",
        borderRadius: "20px",
        aspectRatio: "3/4",
    },
    "center-large": {
        gridColumn: "2 / 4",
        gridRow: "1 / 3",
        borderRadius: "20px",
        aspectRatio: "auto",
    },
    "center-small": {
        gridColumn: "4 / 5",
        gridRow: "1 / 2",
        borderRadius: "20px",
        aspectRatio: "3/4",
    },
    "right-top": {
        gridColumn: "5 / 6",
        gridRow: "1 / 2",
        borderRadius: "20px",
        aspectRatio: "3/4",
    },
    "far-right-top": {
        gridColumn: "6 / 7",
        gridRow: "1 / 2",
        borderRadius: "20px",
        aspectRatio: "3/4",
    },
    "far-right-bottom": {
        gridColumn: "5 / 7",
        gridRow: "2 / 3",
        borderRadius: "20px",
        aspectRatio: "16/9",
    },
};

export default function CollaborativeSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <Box
            as="section"
            bg="gray.50"
            py={{ base: 16, md: 24 }}
            overflow="hidden"
            position="relative"
        >
            <Box
                position="absolute"
                inset={0}
                opacity={0.035}
                pointerEvents="none"
                bgImage={`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`}
                bgSize="200px"
                zIndex={0}
            />

            <Container maxW="1400px" px={{ base: 5, md: 10 }}>

                <MotionFlex
                    direction="column"
                    align="center"
                    textAlign="center"
                    mb={{ base: 12, md: 16 }}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    ref={ref}
                >
                    <MotionText
                        custom={0}
                        // @ts-ignore
                        variants={fadeUp}
                        as="span"
                        fontSize="xs"
                        fontWeight="600"
                        letterSpacing="0.18em"
                        textTransform="uppercase"
                        color="red.500"
                        mb={3}
                    >
                        Our Culture
                    </MotionText>

                    <MotionText
                        custom={1}
                        // @ts-ignore
                        variants={fadeUp}
                        as="h2"
                        fontSize={{ base: "2xl", md: "4xl" }}
                        fontWeight="300"
                        color="gray.800"
                        lineHeight="1.25"
                        maxW="560px"
                        fontFamily="'Georgia', serif"
                        letterSpacing="-0.01em"
                    >
                        Achieving sustainable progress through{" "}
                        <Text as="em" fontStyle="italic" color="gray.600">
                            collaborative innovation
                        </Text>{" "}
                        and shared expertise
                    </MotionText>
                </MotionFlex>

                {/* ── Collage Grid ─────────────────────────────────── */}
                <MotionBox
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    display="grid"
                    gridTemplateColumns={{
                        base: "repeat(2, 1fr)",
                        md: "repeat(3, 1fr)",
                        lg: "repeat(6, 1fr)",
                    }}
                    gridTemplateRows={{ base: "auto", lg: "220px 200px" }}
                    gap={3}
                    mb={14}
                >
                    {images.map((img, i) => (
                        <MotionBox
                            key={img.id}
                            custom={i}
                            // @ts-ignore
                            variants={scaleIn}
                            overflow="hidden"
                            position="relative"
                            {...(tileStyles[img.className] as object)}
                            _after={{
                                content: '""',
                                position: "absolute",
                                inset: 0,
                                background:
                                    "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.12))",
                                borderRadius: "inherit",
                            }}
                            whileHover={{ scale: 1.025, zIndex: 2 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] } as any}
                            boxShadow="0 4px 24px rgba(0,0,0,0.07)"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={img.src}
                                alt={img.alt}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    display: "block",
                                    transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
                                }}
                                loading="lazy"
                            />
                        </MotionBox>
                    ))}
                </MotionBox>

                <MotionFlex
                    justify="center"
                    gap={{ base: 8, md: 20 }}
                    flexWrap="wrap"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {highlights.map((h, i) => (
                        <MotionBox
                            key={h.label}
                            custom={i + images.length}
                            // @ts-ignore
                            variants={fadeUp}
                            textAlign="center"
                        >
                            <Flex justify="center" mb={2} color="red.400">
                                <h.icon size={26} />
                            </Flex>
                            <Text
                                fontSize={{ base: "2xl", md: "3xl" }}
                                fontWeight="700"
                                color="gray.800"
                                lineHeight={1}
                                fontFamily="'Georgia', serif"
                            >
                                {h.value}
                            </Text>
                            <Text
                                fontSize="sm"
                                color="gray.500"
                                mt={1}
                                letterSpacing="0.05em"
                                textTransform="uppercase"
                                fontWeight="500"
                            >
                                {h.label}
                            </Text>
                        </MotionBox>
                    ))}
                </MotionFlex>

            </Container>
        </Box>
    );
}