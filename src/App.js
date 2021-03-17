import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Flex,
  Text,
  Image,
  Divider
} from '@chakra-ui/react';
import axios from 'axios'

import { ColorModeSwitcher } from './component/ColorModeSwitcher';
import Card from './component/Card'
import CardLarge from './component/CardLarge'

function App() {

  const [data, setData] = useState()

  const getData = async () => {
    try {
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/onecall?lat=4.2105&lon=101.9758&exclude=minutely,hourly,alerts&units=metric&appid=fe75d93cda4ddc5caa5d6abad0fdeb16`)
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
    <ChakraProvider theme={theme} >
      <Flex justifyContent="flex-end">
        <ColorModeSwitcher />
      </Flex>

      <CardLarge />




    </ChakraProvider>
  );
}

export default App;
