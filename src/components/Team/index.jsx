import Image from 'next/image'

import styles from './style.module.scss'

export default function Team() {
  const cx = (...classNames) => classNames.join(' ');

  return (
    <div id="team_section">
      <section className="section" id={styles.team}>
        <div className={cx(styles.teamContainer, styles.container)}>
          <div className={styles.textContainer}>
            <h2 className="title">NOSSA EQUIPE</h2>
            <a href="#contact"><button className="button">Contato</button></a>
          </div>

          <div className={styles.teamCard}>
            <div className={styles.icon}>
                <Image 
                  src={"/images/gabriel.svg"}
                  alt="Foto do advogado Gabriel Almendra da empresa Almendra e Mota"
                  width={199}
                  height={199}
                />
            </div>

            <div className={styles.teamText}>
              <h3 className="title-2">Gabriel Almendra</h3>
              <span className="title-2">Sócio</span>
              <p className="subtitle">
              Graduado em Direito pelo Centro Universitário UniFacid - Faculdade Integral Diferencial, Pós-Graduado em Direito Civil e Processual Civil pela instituição de ensino UNINOVAFAPI, Pós-Graduado em Direito Constitucional pela ESAPI, advogado inscrito na OAB/PI sob nº 18.698.</p>
            </div>

            <div className={styles.socialTeam}>
              <a 
                id={styles.socialLogo} 
                className="title-2" 
                href="https://www.instagram.com/gabriel.almendra/" 
                target="_blank" 
                rel="noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a 
                id={styles.socialLogo} className="title-2" 
                href="https://api.whatsapp.com/send?phone=558699072871" 
                target="_blank" 
                rel="noreferrer"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className={styles.teamCard}>
            <div className={styles.icon}>
              <Image
                src={"/images/heitor.svg"}
                alt="Foto do advogado Heitor Mota da empresa Almendra e Mota"
                width={199}
                height={199}
              />
            </div>

            <div className={styles.teamText}>    
              <h3 className="title-2">Heitor Mota</h3>
              <span className="title-2">Sócio</span>
              <p className="subtitle">
              Graduado em Direito pelo Centro Universitário UniFacid — Faculdade Integral Diferencial, Pós-Graduado em Direito e Panejamento Tributário pela Escola do Legislativo da ALEPI, membro da Comissão de Direito Empresarial da OAB/PI, advogado inscrito na OAB/PI sob nº 18.954.</p>
            </div>

            <div className={styles.socialTeam}>
              <a 
                id={styles.socialLogo} className="title-2" 
                href="https://www.instagram.com/heitormotaolv/" 
                target="_blank" 
                rel="noreferrer"
              >
                  <i className="bi bi-instagram"></i>
              </a>
              <a 
                id={styles.socialLogo} className="title-2" 
                href="https://api.whatsapp.com/send?phone=558699643532" 
                target="_blank" 
                rel="noreferrer"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}