import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // CSS file for global styles
import App from './App.jsx' // Main app component
import { ChakraProvider } from '@chakra-ui/provider' // Chakra UI Provider
import theme from './theme/index.jsx'
import "@fontsource/ubuntu/400.css"; 
import "@fontsource/ubuntu/500.css"; 
import Support from './Pages/Support/Support.jsx'

// Mount React App
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider 
    theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
)
 