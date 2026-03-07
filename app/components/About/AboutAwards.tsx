'use client';
import { Box, Container, Heading, Text, SimpleGrid, Stack, Image, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const awards = [
    { name: 'Top Blockchain Company', issuer: 'Clutch', image: '/images/clutchAwards.webp' },
    { name: 'Top Software Development Company', issuer: 'Global AI Summit', image: '/images/softsuggestAwards.webp' },
    { name: 'Top Rated Blockchain Service Providers', issuer: 'Tech Innovation Awards', image: '/images/goodFirmsAwards.webp' },
    { name: 'Top Mobile App Developers 2026', issuer: 'Forbes', image: '/images/mobilappDailyAwards.webp' },
    { name: 'Top Software Developers 2026', issuer: 'Green Future Index', image: '/images/topDevsAwards.webp' },
    { name: 'Top Software Development Company', issuer: 'Glassdoor', image: '/images/designRush.webp' },
];

const AwardItem = ({ name, issuer, index, image }: { name: string, issuer: string, index: number, image: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
        >
            <Box
                p={4}
                border="1px solid"
                borderColor={useColorModeValue('gray.200', 'whiteAlpha.200')}
                borderRadius="xl"
                textAlign="center"
                transition="all 0.3s"
                _hover={{ borderColor: 'red.600', bg: useColorModeValue('gray.50', 'whiteAlpha.50') }}
            >
                <Stack spacing={3}>
                    <Image
                        src={image}
                        height="100px"
                        width="100px"
                        borderRadius="full"
                        mx="auto"
                        mb={2}
                        objectFit="cover"
                    />
                    <Heading fontSize="lg" fontWeight="700">{name}</Heading>
                    <Text fontSize="sm" color="gray.500">{issuer}</Text>
                </Stack>
            </Box>
        </motion.div>
    )
}

export default function AboutAwards() {
    return (
        <Box py={{ base: 12, md: 24 }} borderTop="1px solid" borderColor={useColorModeValue('gray.100', 'whiteAlpha.100')}>
            <Container maxW="1400px">
                <Stack spacing={12}>
                    <Box textAlign="center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Text color="red.600" fontWeight="bold" fontSize="sm" letterSpacing="0.1em" textTransform="uppercase" mb={2}>
                                Recognition
                            </Text>
                            <Heading fontSize={{ base: "3xl", md: "4xl" }} fontWeight="800">
                                Global Standards & Recognition
                            </Heading>
                        </motion.div>
                    </Box>

                    <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={6}>
                        {awards.map((award, index) => (
                            <AwardItem key={index} {...award} index={index} />
                        ))}
                    </SimpleGrid>
                </Stack>
            </Container>
        </Box>
    );
}
