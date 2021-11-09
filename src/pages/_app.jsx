//imports-components-and-styles
import Header from "../components/Header";
import BackToTop from "../components/BackToTop";
import '../styles/global.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <BackToTop />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp