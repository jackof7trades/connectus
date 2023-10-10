import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ChakraProvider } from '@chakra-ui/react';
import WordProvider from './WordProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <WordProvider>
        <App />
      </WordProvider>
    </ChakraProvider>
  </React.StrictMode>
);
