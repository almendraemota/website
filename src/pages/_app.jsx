import { ChakraProvider } from "@chakra-ui/react"

//imports-components-and-styles
import Header from "../components/Header";
import BackToTop from "../components/BackToTop";
import '../styles/global.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Header />
      <BackToTop />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp