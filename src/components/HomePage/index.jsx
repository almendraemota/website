import Image from 'next/image'

import { Container, HomeContainer } from './style'
import styles from './style.module.scss'

export default function Home() {
  return (
    <Container id="home_section">
      <div className={styles.background}>
        <HomeContainer className="margins">
          <p>SOCIEDADE DE ADVOGADOS</p>
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s
          </p>
          <a href="#about_section"><button>Saiba mais</button></a>
        </HomeContainer>
      </div>
    </Container>
  )
}