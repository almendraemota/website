import { useState } from 'react';
import { motion } from 'framer-motion'

//imports-components-and-styles
import styles from './style.module.scss'
import { NavLinks } from './NavLinks'

export default function Header() {
  const cx = (...classNames) => classNames.join(' ');
  const [open, setOpen] = useState(false);

  const hamburguerIcon =
    <div className={styles.hamburguer}>
      <i 
        className="bi bi-list"
        onClick={() => setOpen(!open)}
      ></i>
    </div>

  const closeIcon = 
    <motion.div
      className={styles.close}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 120,
      }}
    >
      <i 
        className="bi bi-x"
        alt="Icone de fechar menu" 
        onClick={() => setOpen(!open)}
      ></i>
    </motion.div>

  const closeMenu = () => setOpen(false);

  return (
    <header id={styles.nav} className={styles.header}>
      <nav className={cx(styles.navBar, styles.container)}>
        <div>
          <h1>Logo</h1>
        </div>

        <div className={styles.menuMain}>
          <ul id={styles.desktop} className={styles.ulContainer}>
            <li><a href="#home_section">Home</a></li>
            <li><a href="#about_section">A sociedade</a></li>
            <li><a href="#services_section">Áreas de atuação</a></li>
            <li><a href="#team_section">Equipe</a></li>
            <li><a href="#contact_section">Contato</a></li>  
          </ul>

          {/* menu mobile */}
          <div className={styles.navigationMobile}>
            {open ? closeIcon : hamburguerIcon}
            {open && <NavLinks isMenu={true} closeMenu={closeMenu} />}
          </div>
        </div>
      </nav>
    </header>
  )
}