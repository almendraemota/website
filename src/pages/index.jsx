import Head from 'next/head'

//imports-components-and-styles
import HomePage from '../component/HomePage'
import About from '../component/About'
import Services from '../component/Services'

export default function Home() {
  return (
    <>
      <Head>
        <title>Almendra e Mota | Sociedade de Advogados</title>
      </Head>

      <main>
        <HomePage />
        <About />
        <Services />
      </main>
    </>
  )
}