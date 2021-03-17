import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Flex
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './component/ColorModeSwitcher';
import Card from './component/Card'
import CardLarge from './component/CardLarge'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex justifyContent="flex-end">
        <ColorModeSwitcher />
      </Flex>

      <Flex justifyContent="center" alignItems="space-between">
        <Box width="full" height="full" borderWidth="thick">
          <CardLarge />
        </Box>
        <Box width="full" height="full" >
          <Card />
          <Card />
        </Box>
      </Flex>

    </ChakraProvider>
  );
}

export default App;
