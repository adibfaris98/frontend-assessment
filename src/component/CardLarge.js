import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { Box, Image, Text, Link, Flex, Divider, Button, LinkOverlay } from '@chakra-ui/react'

export default function CardLarge({ data }) {

    // const [dailyData, setDaily] = useState(data.daily)

    const convertUnixToDate = (unix) => {
        const date = new Date(unix * 1000)
        var formatted = moment(date).format("dddd, Do of MMMM YYYY");
        return formatted
    }

    const convertUnixToDay = (unix) => {
        const date = new Date(unix * 1000)
        var formatted = moment(date).format("dddd");
        return formatted
    }

    return (
        <Flex justifyContent="center" >
            <Flex padding='10px' justifyContent='center' alignItems='center' direction='column' borderWidth='medium' width='630px'>
                <Box alignItems='center' width='600px'>
                    {data &&
                        <div>
                            <Text fontSize='2xl' fontWeight='medium'>{data.timezone}</Text>
                            <Text>{convertUnixToDate(data.daily[0].dt)}</Text>
                        </div>
                    }
                </Box>

                <Flex direction='row'>
                    <Flex alignItems='center' justifyContent="space-around" width='600px'>

                        {data &&
                            <Box>
                                <Text fontSize='6xl'>{data.daily[0].temp.day}&#8451;</Text>
                                <Text fontWeight='light' color="gray.500">{data.daily[0].weather[0].main}, {data.daily[0].weather[0].description}</Text>
                            </Box>}


                        <Box>
                            {data && <Image boxSize="150px" src={`http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@2x.png`} />}
                        </Box>
                    </Flex>
                </Flex>

                <Divider colorScheme='green' width='550px' />

                {
                    data && <Box > {data.daily.map((day,i) => {
                        return (
                            <Link key={i} >
                                <Flex direction='row' justifyContent='space-around' width='600px' alignItems='center' >
                                    <Text>{convertUnixToDay(day.dt)}</Text>
                                    
                                    <Image src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}/>
                                    <Text>{day.temp.day}&#8451;</Text>
                                </Flex>
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
