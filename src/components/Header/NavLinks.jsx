import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from "@chakra-ui/react"

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
        <li>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem border="none"  > 
              <AccordionButton _hover={{background: "none"}} _focus={{ outline: "none"}}>
                <Box 
                  flex="1" 
                  textAlign="center" 
                  color="#fff" 
                  fontSize="2.2rem"
                >
                  <a>
                    Áreas de atuação
                  </a>
                  <AccordionIcon />
                </Box>
              </AccordionButton>

              <AccordionPanel textAlign="center" color="#fff" fontSize="2.2rem">
                <Link href="/">
                  <a onClick={() => props.isMenu && props.closeMenu()}>
                    Empresarial
                  </a>
                </Link>
              </AccordionPanel>
              <AccordionPanel textAlign="center" color="#fff">
                <Link href="/">
                  <a onClick={() => props.isMenu && props.closeMenu()}>
                    Multidisciplinar
                  </a>
                </Link>
              </AccordionPanel>
          </AccordionItem>
          </Accordion>
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