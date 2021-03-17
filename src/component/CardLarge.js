import React, { useState, useEffect } from 'react'
import { Box, Image, Text, Link, Flex, Divider, Button, LinkOverlay } from '@chakra-ui/react'

export default function CardLarge({ data }) {
    // const [temperature, setTemperature] = useState(data.current.temp)



    return (
        <Flex justifyContent="center" >
            <Flex padding='10px' justifyContent='center' alignItems='center' direction='column' borderWidth='medium' width='630px'>
                <Box alignItems='center' width='600px'>
                    <Text>Malaysia, MY</Text>
                    <Text>Date</Text>
                </Box>

                <Flex direction='row'>
                    <Flex alignItems='center' justifyContent="space-around" width='600px'>
                        <Box>
                            <Text fontSize='6xl'>20 C</Text>
                            <Text fontWeight='light' color="gray.500">feels like 30C</Text>
                        </Box>

                        <Box>
                            <Text>Gambar</Text>
                        </Box>
                    </Flex>
                </Flex>

                <Divider colorScheme='green' width='550px' />

                <Link>
                    <Flex direction='row' justifyContent='space-around' width='600px' >
                        <Text>asdsa</Text>
                        <Text>asdsa</Text>
                        <Text>asdsa</Text>
                    </Flex>
                </Link>

                <Link>
                    <Flex direction='row' justifyContent='space-around' width='600px' >
                        <Text>asdsa</Text>
                        <Text>asdsa</Text>
                        <Text>asdsa</Text>
                    </Flex>
                </Link>
                <Link>
                    <Flex direction='row' justifyContent='space-around' width='600px' >
                        <Text>asdsa</Text>
                        <Text>asdsa</Text>
                        <Text>asdsa</Text>
                    </Flex>
                </Link>
            </Flex>
        </Flex>
    )
}
