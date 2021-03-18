import React from 'react';
import { ChakraProvider} from '@chakra-ui/react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Weekly from './screen/Weekly';
import Daily from './screen/Daily';
import theme from './theme'

function App() {

  return (
    <Router>
      <ChakraProvider theme={theme} >
        <Switch>
          <Route path='/' exact component={Weekly} />
          <Route path='/daily/:newDate' exact component={Daily} />
        </Switch>
      </ChakraProvider>
    </Router>
  );
}

export default App;
