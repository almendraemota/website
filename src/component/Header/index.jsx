import { useState } from 'react';
import { motion } from 'framer-motion'

//imports-components-and-styles
import styles from './style.module.scss'
import { NavLinks } from './NavLinks'

export default function Header() {
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
      <div>
        <nav className={styles.navBar}>
          <ul className={styles.desktop}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">A sociedade</a></li>
            <li><a href="#services">Áreas de atuação</a></li>
            <li><a href="#team">Equipe</a></li>
            <li><a href="#contact">Contato</a></li>  
          </ul>
        </nav>

        {/* menu mobile */}
        <div className={styles.navigationMobile}>
          {open ? closeIcon : hamburguerIcon}
          {open && <NavLinks isMenu={true} closeMenu={closeMenu} />}
        </div>
      </div>
    </header>
  )
}