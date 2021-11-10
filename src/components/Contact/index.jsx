import styles from './style.module.scss'

export default function Contact() {
  const cx = (...classNames) => classNames.join(' ');

  return (
    <div id="contact_section">
      <section className="section" id={styles.contact}>
        <div className={cx(styles.contactContainer, styles.container)}>
          <div className={styles.containerForm}>
              <form name="form" data-netlify="true" action='success' method='post'>
                  <h3 className="title">Envie uma Mensagem</h3>
                  <input 
                    name="Nome" 
                    type="text" 
                    placeholder="Seu nome completo" 
                    required
                  />
                  <input 
                    name="Email" 
                    type="email" 
                    placeholder="Seu Email" 
                    required
                  />
                  <input 
                    name="Telefone" 
                    type="tel" 
                    placeholder="Seu telefone" 
                    required
                  />
                  <textarea 
                    className={styles.textarea}
                    name="Mensagem" 
                    type="text" 
                    placeholder="Digite sua mensagem..."
                  >
                  </textarea>
                  <button type="submit">Enviar</button>
              </form>
          </div>

          <div className={styles.socialContact}>
            <h2 className="title">ENTRE EM CONTATO:</h2>
            <div className={styles.contactWhatsapp}>
                <a 
                  href="https://linktr.ee/almendraemota" 
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>
                    Whatsapp <i className="bi bi-whatsapp"></i>
                  </button>
                </a>
            </div>
            <div className={styles.contactInstagram}>
                <a 
                  href="https://www.instagram.com/almendraemotaadv/" 
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>
                    Instagram <i className="bi bi-instagram"></i>
                  </button>
                </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}