import Head from 'next/head'

//imports-components-and-styles
import HomePage from '../component/HomePage'
import About from '../component/About'

export default function Home() {
  return (
    <>
      <Head>
        <title>Almendra e Mota | Sociedade de Advogados</title>
      </Head>

      <main>
        <HomePage />
        <About />
      </main>
    </>
  )
}