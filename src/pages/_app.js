import '../styles/tailwind.css'
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    green: {
      '500': '#1E293B'
    }
  },
});

console.log(theme);

function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={theme}><Component {...pageProps} /></ChakraProvider>
}

export default MyApp
