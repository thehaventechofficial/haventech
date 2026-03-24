"use client";

import { useState, useRef } from "react";
import { Box, Text, Flex, Badge } from "@chakra-ui/react";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";
import { RiQuestionLine, RiAddLine, RiSubtractLine, RiChat3Line } from "react-icons/ri";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);

// ── Types ─────────────────────────────────────────────────────────────────
interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    faqs: {
        items: FAQItem[];
    };
}

// ── Animation variants ────────────────────────────────────────────────────
const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08 },
    },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const answerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
        opacity: 1,
        height: "auto",
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
        opacity: 0,
        height: 0,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
    },
};

function FAQCard({ faq, index, isOpen, onToggle }: {
    faq: FAQItem;
    index: number;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        // @ts-ignore
        <MotionBox
            variants={itemVariants}
            layout
            onClick={onToggle}
            cursor="pointer"
            borderRadius="24px"
            overflow="hidden"
            border="1.5px solid"
            borderColor={isOpen ? "red.400" : "gray.200"}
            bg={isOpen ? "white" : "white"}
            boxShadow={
                isOpen
                    ? "0"
                    : "0 2px 12px rgba(0,0,0,0.05)"
            }
            // transition="border-color 0.3s ease, box-shadow 0.3s ease"
            _hover={{
                borderColor: isOpen ? "red.400" : "red.200",
                boxShadow: isOpen
                    ? "0 8px 40px rgba(220,38,38,0.18)"
                    : "0 4px 20px rgba(220,38,38,0.1)",
            }}
            position="relative"
        >

            {/* Question row */}
            <Flex
                align="center"
                gap={4}
                px={{ base: 5, md: 7 }}
                py={5}
                userSelect="none"
            >
                {/* Index badge */}
                <Flex
                    flexShrink={0}
                    w="40px"
                    h="40px"
                    borderRadius="12px"
                    bg={isOpen ? "red.600" : "gray.100"}
                    align="center"
                    justify="center"
                    transition="background 0.3s ease"
                >
                    <Text
                        fontSize="sm"
                        fontWeight="800"
                        color={isOpen ? "white" : "gray.500"}
                        lineHeight={1}
                        transition="color 0.3s ease"
                        fontFamily="'Georgia', serif"
                    >
                        {String(index + 1).padStart(2, "0")}
                    </Text>
                </Flex>

                {/* Question text */}
                <Text
                    flex="1"
                    fontWeight="700"
                    fontSize={{ base: "sm", md: "md" }}
                    color={isOpen ? "gray.900" : "gray.800"}
                    lineHeight={1.45}
                    letterSpacing="-0.01em"
                    transition="color 0.3s ease"
                    pr={2}
                >
                    {faq.question}
                </Text>

                {/* Toggle icon */}
                <motion.div
                    animate={{ rotate: isOpen ? 0 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ flexShrink: 0 }}
                >
                    <Flex
                        w="36px"
                        h="36px"
                        borderRadius="10px"
                        bg={isOpen ? "red.50" : "gray.100"}
                        align="center"
                        justify="center"
                        color={isOpen ? "red.600" : "gray.400"}
                        transition="all 0.3s ease"
                        flexShrink={0}
                    >
                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {isOpen ? <RiSubtractLine size={18} /> : <RiAddLine size={18} />}
                        </motion.div>
                    </Flex>
                </motion.div>
            </Flex>

            {/* Answer panel */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <MotionBox
                        key="answer"
                        // @ts-ignore
                        variants={answerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        overflow="hidden"
                    >
                        <Box
                            px={{ base: 5, md: 7 }}
                            pb={6}
                            pt={0}
                            ml={{ base: 0, md: "56px" }}
                        >
                            {/* Divider */}
                            <Box
                                h="1px"
                                bg="red.100"
                                mb={4}
                                borderRadius="full"
                            />
                            {/* Answer */}
                            <Flex gap={3} align="flex-start">
                                <Box color="red.400" mt="2px" flexShrink={0}>
                                    <RiChat3Line size={16} />
                                </Box>
                                <Text
                                    color="gray.600"
                                    fontSize={{ base: "sm", md: "md" }}
                                    lineHeight={1.85}
                                    fontWeight="400"
                                >
                                    {faq.answer}
                                </Text>
                            </Flex>
                        </Box>
                    </MotionBox>
                )}
            </AnimatePresence>
        </MotionBox>
    );
}

// ── Main Component ────────────────────────────────────────────────────────
export default function FAQSection({ faqs }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    const handleToggle = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <Box w="full" ref={ref}>
            <MotionFlex
                direction="column"
                mb={8}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] } as any}
            >
                <Flex align="center" gap={3} mb={3}>
                    <Badge
                        bg="red.50"
                        color="red.600"
                        fontSize="xs"
                        fontWeight="800"
                        letterSpacing="0.16em"
                        textTransform="uppercase"
                        px={4}
                        py={1.5}
                        borderRadius="full"
                        border="1px solid"
                        borderColor="red.100"
                    >
                        Common Questions
                    </Badge>
                </Flex>

                <Text
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="900"
                    color="gray.900"
                    letterSpacing="-0.02em"
                    fontFamily="'Georgia', serif"
                    lineHeight={1.2}
                >
                    Everything you need to{" "}
                    <Text as="span" color="red.600" position="relative"
                        _after={{
                            content: '""',
                            position: "absolute",
                            bottom: "1px",
                            left: 0,
                            right: 0,
                            height: "2.5px",
                            bg: "red.200",
                            borderRadius: "full",
                        }}
                    >
                        know
                    </Text>
                </Text>
            </MotionFlex>

            {/* ── FAQ Cards ── */}
            <MotionBox
                as="ul"
                listStyleType="none"
                display="flex"
                flexDirection="column"
                gap={3}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {faqs.items.map((faq, idx) => (
                    <Box as="li" key={idx}>
                        <FAQCard
                            faq={faq}
                            index={idx}
                            isOpen={openIndex === idx}
                            onToggle={() => handleToggle(idx)}
                        />
                    </Box>
                ))}
            </MotionBox>

        </Box>
    );
}