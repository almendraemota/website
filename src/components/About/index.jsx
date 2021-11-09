import Image from 'next/image'

//imports-components-and-styles
import styles from './style.module.scss'

export default function About() {
  const cx = (...classNames) => classNames.join(' ');
  
  return (
    <div id="about_section">
      <section className="section" id={styles.about}>
          <div className="container">
            <h2 className="title">A SOCIEDADE</h2>
            <p className="subtitle">
              A Sociedade de Advogados Almendra e Mota surgiu do interesse comum de dois grandes amigos advogados, através da reciprocidade das ideias e experiências profissionais partilhadas durante o decorrer da graduação em Direito.
              Os conhecimentos adquiridos por meio da dedicação contínua, baseada em experiências de aprendizagem profissional, em várias instituições públicas e privadas, dentre órgãos e escritórios de advocacia de renome, resultaram num perfil profissional equilibrado e apto às necessidades do mercado.
              Isto posto, a prestação de serviços jurídicos voltados sobretudo para empresas, de forma personalizada, criativa e especializada, suficiente para resolução de assuntos jurídicos multidisciplinares nas áreas do direito civil, administrativo, trabalhista, previdenciário e tributário, é a finalidade principal do escritório.
            </p>
            <a href="#team"><button className="button">Nosso time</button></a>
          </div>
      </section>
    </div>
  )
}