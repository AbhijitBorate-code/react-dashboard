import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // CSS file for global styles
import App from './App.jsx' // Main app component
import { ChakraProvider } from '@chakra-ui/provider' // Chakra UI Provider
import theme from './theme/index.jsx'
// Mount React App
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider 
    theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
)
 