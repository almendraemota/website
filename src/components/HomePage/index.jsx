import Image from 'next/image'

//imports-components-and-styles
import styles from './style.module.scss'

export default function Home() {
  const cx = (...classNames) => classNames.join(' ');
  
  return (
    <div id="home_section">
    <section className="section" id={styles.home}>
        <div className={cx(styles.container, styles.home)}>
          <div className={styles.homeTitle}>
            <h1 className="title">SOCIEDADE DE ADVOGADOS</h1>
            <p className="text">
              Com atuação nas áreas comercial, trabalhista, previdenciária e tributária.
            </p>
            <a href="#about_section">
              <button className="button-white">Saiba mais</button>
            </a>
          </div>
          <div className={styles.homeLogo}>
            <Image
              className={styles.logo} 
              src={"/images/logo.svg"}
              width={497}
              height={246}
              alt="Logo Inicial Almendra e Mota sociedade de advogados" 
            />
          </div>
        </div>
    </section>
    </div>
  )
}