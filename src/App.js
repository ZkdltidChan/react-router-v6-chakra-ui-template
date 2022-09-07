import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import Router from './router/router';
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <ColorModeSwitcher /> */}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
