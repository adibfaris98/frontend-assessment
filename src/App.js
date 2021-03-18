import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Weekly from './screen/Weekly';
import Daily from './screen/Daily';

function App() {

  return (
    <Router>
      <ChakraProvider theme={theme} >
        <Switch>
          <Route path="/" exact component={Weekly} />
          <Route path="/daily" exact component={Daily} />
        </Switch>
      </ChakraProvider>
    </Router>
  );
}

export default App;
