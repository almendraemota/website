import Image from 'next/image'
import Card from './Card';

//imports-components-and-styles
import styles from './style.module.scss'

export default function Services() {
  const cx = (...classNames) => classNames.join(' ');

  return (
    <div id="services_section">
      <section className="section" id={styles.services}>
        <div className="container">
          <div className={styles.services}>
            <div className={styles.textContainerServices}>
              <div className={styles.textTitles}>
                <h2 className="title">ÁREAS DE ATUAÇÃO</h2>
                <span className="text">Saiba mais sobre nossas áreas de atuação</span>
              </div>
            </div>

            <div className={styles.cardContainer}>
              <Card 
                image="/images/assessoria-juridica.jpg"
                alt="Assessoria Jurídica Multidisciplinar" 
                title="Assessoria Jurídica Empresarial"
                description="Atendimento jurídico completo para empresas, de forma preventiva e judicial; Assessoria na tomada de decisões internas, com a finalidade de evitar conflitos e diminuir riscos."
              />

              <Card 
                image="/images/assessoria-multidisciplinar.jpg"
                alt="Assessoria Jurídica Empresarial"
                title="Assessoria Jurídica Multidisciplinar"
                description="Ajuizamento de ações relacionadas ao Direito Bancário; 
                Defesa em ações de Busca e Apreensão veicular;"
              />
            </div>
          </div>
        </div>  
      </section>
    </div>
  )
}