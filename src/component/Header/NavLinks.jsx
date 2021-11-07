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
          <a href="#home">Home</a>
        </li>
        <li onClick={() => props.isMenu && props.closeMenu()}>
          <a href="#about">A sociedade</a>
        </li>
        <li onClick={() => props.isMenu && props.closeMenu()}>
          <a href="#services">Áreas de atuação</a>
        </li>
        <li onClick={() => props.isMenu && props.closeMenu()}>
          <a href="#team">Equipe</a>
        </li>
        <li onClick={() => props.isMenu && props.closeMenu()}>
          <a href="#contact">Contato</a>
        </li> 
      </ul>
    </motion.div>
  )
}