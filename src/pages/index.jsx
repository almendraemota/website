import Head from 'next/head'

//imports-components-and-styles
import HomePage from '../components/HomePage'
import About from '../components/About'
import Services from '../components/Services'
import Team from '../components/Team'

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
        <Team />
      </main>
    </>
  )
}