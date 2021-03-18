import React, { useEffect, useState } from 'react'
import { Flex, Box } from '@chakra-ui/react';
import axios from 'axios'
import CardLarge from '../component/CardLarge'
import ColorModeSwitcher from '../component/ColorModeSwitcher'

export default function Weekly() {
    const [data, setData] = useState()

    const getData = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=4.2105&lon=101.9758&exclude=minutely,hourly,alerts&units=metric&appid=fe75d93cda4ddc5caa5d6abad0fdeb16`)
            const data = response.data
            setData(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <Box>
            <Flex justifyContent="flex-end">
                <ColorModeSwitcher />
            </Flex>
            <CardLarge data={data} />
        </Box>
    )
}
