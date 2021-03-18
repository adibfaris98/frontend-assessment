import React from 'react'
import moment from 'moment'
import { Box, Image, Text, Flex, Divider, Link as ChakraLink } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function CardLarge({ data }) {
    const convertUnixToDate = (unix) => {
        const date = new Date(unix * 1000)
        var formatted = moment(date).format("LLLL");
        return formatted
    }

    const convertUnixToDay = (unix) => {
        const date = new Date(unix * 1000)
        var formatted = moment(date).format("dddd");
        return formatted
    }

    return (
        <Flex justifyContent='center' marginBottom='50px' >
            <Flex padding='10px' justifyContent='center' alignItems='center' direction='column' borderWidth='thin' borderRadius='md' width='630px'>

                {data &&
                    <Box marginLeft='30px' alignItems='center' width='600px'>
                        <Text fontSize='3xl' fontWeight='medium'>{data.timezone}</Text>
                        <Text fontWeight='light' color="gray.500">{convertUnixToDate(data.current.dt)}</Text>
                    </Box>
                }

                <Flex direction='row'>
                    {data &&
                        <Flex alignItems='center' justifyContent="space-around" width='600px'>
                            <Box>
                                <Text fontSize='6xl'>{data.current.temp}&#8451;</Text>
                                <Text fontWeight='light' color="gray.500">{data.current.weather[0].main}, {data.current.weather[0].description}</Text>
                            </Box>
                            <Box>
                                <Image boxSize="150px" src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`} />
                            </Box>
                        </Flex>
                    }
                </Flex>

                <Divider colorScheme='green' width='550px' />

                {data &&
                    <Box> {data.daily.map((day, i) => {
                        return (
                            <Link to={`/daily/${day.dt}`} key={i}>
                                <ChakraLink >
                                    <Flex direction='row' justifyContent='space-around' width='600px' alignItems='center' >
                                        <Text>{convertUnixToDay(day.dt)}</Text>
                                        <Image src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} />
                                        <Text>{day.temp.day}&#8451;</Text>
                                    </Flex>
                                </ChakraLink>
                            </Link>
                        )
                    })
                    }
                    </Box>
                }
            </Flex>
        </Flex>
    )
}
