import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import Link from 'next/link'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  ChevronDownIcon
} from "@chakra-ui/react"

//imports-components-and-styles
import styles from './style.module.scss'
import { NavLinks } from './NavLinks'

export default function Header() {
  const cx = (...classNames) => classNames.join(' ');
  const [ open, setOpen ] = useState(false);
  const [ button, setButton ] = useState(true);
  const [ navbar, setnavbar ] = useState(false);

  const showButton = () => {
    if (window.innerWidth <= 700) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  if (typeof window !== "undefined") {
    // Client-side-only code
    window.addEventListener('resize', showButton)
  }

  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setnavbar(true)
    } else {
      setnavbar(false)
    }
  }

  if (typeof window !== "undefined") {
    // Client-side-only code
    window.addEventListener('scroll', changeBackground)
  }

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
    <header id={styles.nav} className={navbar ? "header active" : "header"}>
      <nav className={cx(styles.navBar, styles.container)}>
        <div>
          <h1>Logo</h1>
        </div>

        <div className={styles.menuMain}>
          <ul id={styles.desktop} className={styles.ulContainer}>
            <li><a href="#home_section">Home</a></li>
            <li><a href="#about_section">A sociedade</a></li>
            <li>
            <Menu>
              <a> 
                <MenuButton rightIcon={<ChevronDownIcon />}>
                  <a>Áreas de atuação</a>
                </MenuButton>
              </a>
              <MenuList border="none" p={4}>
                <MenuItem>Empresarial</MenuItem>
                <MenuItem>Multidisciplinar</MenuItem>
              </MenuList>
            </Menu>
            
            </li>
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