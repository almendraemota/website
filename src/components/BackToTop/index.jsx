import { useState } from 'react'
import Image from 'next/image'

import styles from './style.module.scss'

export default function ScrollButton() {
  const [ visible, setVisible ] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollButtonTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (typeof window !== "undefined") {
    // Client-side-only code
    window.addEventListener('scroll', toggleVisible)
  }

  return(
    <button
      onClick={scrollButtonTop}
      style={{display: visible ? 'inline' : 'none'}}
      className={styles.backToTop}
    >
      <Image 
        src={"/images/back-to-top.svg"} 
        alt="Botão de voltar ao topo"
        width={90}
        height={90}
      />
    </button>
  )
}