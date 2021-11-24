import { ChakraProvider } from "@chakra-ui/react"

//imports-components-and-styles
import Header from "../components/Header";
import BackToTop from "../components/BackToTop";
import GlobalStyle from '../styles/global';
import 'bootstrap-icons/font/bootstrap-icons.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <GlobalStyle />
      <Header />
      <BackToTop />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp