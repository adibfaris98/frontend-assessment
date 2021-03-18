import React, { useState, useEffect } from 'react'
import { Flex, Box, Text, Image } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import moment from 'moment'

import ColorModeSwitcher from '../component/ColorModeSwitcher'

export default function Daily() {
    let { newDate } = useParams();
    const [data, setData] = useState()

    const getData = async () => {
        try {
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=malaysia&units=metric&appid=fe75d93cda4ddc5caa5d6abad0fdeb16`)
            const data = response.data
            setData(data)
        } catch (error) {
            console.error(error)
        }
    }

    const convertUnixToDay = (unix) => {
        const date = new Date(unix * 1000)
        var formatted = moment(date).format("Do");
        return formatted
    }

    const convertUnixToTime = (unix) => {
        const date = new Date(unix * 1000)
        var formatted = moment(date).format("LT");
        return formatted
    }

    const convertUnixToDDY = (unix) => {
        const date = new Date(unix * 1000)
        var formatted = moment(date).format("dddd, LL");
        return formatted
    }

    const compareDate = (unix) => {
        const unixDate = convertUnixToDay(unix)
        const day = convertUnixToDay(newDate)

        if (unixDate === day) return true
        else return false
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Box>
            <Flex justifyContent="flex-end">
                <ColorModeSwitcher />
            </Flex>
            <Flex
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                width="full"
                height="full"
            >
                {data && <Text fontSize='6xl'>{convertUnixToDDY(newDate)}</Text>}
                <Flex
                    flexWrap='wrap'
                    justifyContent="center"
                    alignItems='center'
                    flexDirection="row"
                    height="200px"
                    width='60%'
                >
                    {data && data.list.map((list) => (
                        compareDate(list.dt) ?
                            (
                                <Flex padding='5' margin='15' alignItems='center' flexDirection="column" width="250px" borderWidth='thin' borderRadius='md' justifyContent="center">
                                    <Text>{convertUnixToTime(list.dt)}</Text>
                                    <Image src={`http://openweathermap.org/img/wn/${list.weather[0].icon}@2x.png`} />
                                    <Text fontSize='3xl'>{list.main.temp}&#8451;</Text>
                                    <Text fontWeight='light' color="gray.500">{list.weather[0].description}</Text>
                                </Flex>) : null
                    ))}
                </Flex>
            </Flex>
        </Box>
    )
}