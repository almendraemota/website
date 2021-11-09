import Image from 'next/image'

//imports-components-and-styles
import styles from './style.module.scss'

export default function Services() {
  const cx = (...classNames) => classNames.join(' ');

  return (
    <div id="services_section">
      <section className="section" id={styles.services}>
        <div className={cx(styles.container, styles.services)}>
          <div className={styles.textContainerServices}>
            <h2 className="title">ÁREAS DE ATUAÇÃO</h2>
          </div>

          <div className={styles.cardContainer}>
            <div className={styles.servicesCard}>
              <div className={styles.ico}>
                <Image
                  className={styles.image}
                  src={"/images/empresarial.svg"}
                  width={70}
                  height={70}
                  alt="Icone multidisciplinar advocacia" 
                />
              </div>
              <div className={styles.servicesText}>
                <h3 className="title-2">Assessoria Jurídica Empresarial</h3>
                <p>
                  Atendimento jurídico completo para empresas, de forma preventiva e judicial; Assessoria na tomada de decisões internas, com a finalidade de evitar conflitos e diminuir riscos; Ajuizamento de Ações, Defesas e Execuções Cíveis perante os Tribunais; Defesa em Ações Trabalhistas perante a Justiça do Trabalho e fiscalização do Poder Público; Consultoria na área fiscal e assessoria jurídico-tributária em processos executivos fiscais, em âmbito administrativo e judicial, além de recuperação de créditos tributários; Atuação judicial para cobrança de créditos; Elaboração, revisão e acompanhamento de contratos comerciais, bancários e cíveis; 
                </p>
              </div>
            </div>
              
            <div className={styles.servicesCard}>
              <div className={styles.ico2}>
                <Image
                  src={"/images/multidisciplinar.svg"}
                  width={85}
                  height={85}
                  alt="Icone multidisciplinar advocacia" 
                />
              </div>
              <div className={styles.servicesText}>
                <h3 className="title-2">Assessoria Jurídica Multidisciplinar</h3>
                <p>
                  Ajuizamento de ações relacionadas ao Direito Bancário; 
                  Defesa em ações de Busca e Apreensão veicular; 
                  Postulações junto ao INSS, tais como concessão de Auxílio-Doença, Aposentadorias, Pensão por Morte, Salário-Maternidade, seja rural ou urbano;
                  Ajuizamento e assessoria em Ações de Inventário;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}