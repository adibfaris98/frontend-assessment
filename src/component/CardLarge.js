import React from 'react'
import { Box, Image, Text, Link } from '@chakra-ui/react'

export default function CardLarge() {
    return (
        <Box mt={5}>
            <Box p={4} display="flex" border="1px" borderRadius="10">
                <Box flexShrink={0}>
                    <Image
                        borderRadius="lg"
                        width={40}
                        src="https://bit.ly/2jYM25F"
                        alt="Woman paying for a purchase"
                    />
                </Box>
                <Box mt={0} ml={6}>
                    <Text
                        fontWeight="bold"
                        textTransform="uppercase"
                        fontSize="lg"
                        letterSpacing="wide"
                        color="orange.600"
                    >
                        Temperature
    </Text>
                    <Link
                        mt={1}
                        display="block"
                        fontSize="lg"
                        lineHeight="normal"
                        fontWeight="semibold"
                        href="#"
                    >
                        Weather
    </Link>
                    <Text mt={2} color="gray.500">
                        Date
</Text>
                </Box>
            </Box>
        </Box>
    )
}
