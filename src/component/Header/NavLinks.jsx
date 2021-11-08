import { motion } from 'framer-motion'

//imports-components-and-styles
import styles from './style.module.scss'

export function NavLinks(props) {
  return (
    <motion.div
      className={styles.navLinks}
      initial={{ y: -1000, opacity: 0.4 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        stiffness: 200 ,
      }}
    >
      <ul className={styles.ulLinks}>
        <li onClick={() => props.isMenu && props.closeMenu()}>
          <a href="#home_section">Home</a>
        </li>
        <li onClick={() => props.isMenu && props.closeMenu()}>
          <a href="#about_section">A sociedade</a>
        </li>
        <li onClick={() => props.isMenu && props.closeMenu()}>
          <a href="#services_section">Áreas de atuação</a>
        </li>
        <li onClick={() => props.isMenu && props.closeMenu()}>
          <a href="#team_section">Equipe</a>
        </li>
        <li onClick={() => props.isMenu && props.closeMenu()}>
          <a href="#contact_section">Contato</a>
        </li> 
      </ul>
    </motion.div>
  )
}