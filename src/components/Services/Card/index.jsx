import Image from 'next/image'

import styles from '../style.module.scss'

export default function Card(props) {
  return (
    <div className={styles.servicesCard}>
      <div className={styles.ico}>
        <Image
          className={styles.image}
          src={props.image}
          width={370}
          height={220}
          alt="Icone multidisciplinar advocacia" 
        />
      </div>
      <div className={styles.servicesText}>
        <h3 className="title-2">{props.title}</h3>
        <p>{props.description}</p>
        <p className={styles.more}>Saber mais</p>
      </div>
    </div>
  )
}