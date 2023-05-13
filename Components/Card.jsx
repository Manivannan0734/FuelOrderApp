import Image from 'next/image'
import petrol from '../public/images/petrol.jpg'
import diesel from '../public/images/diesel.jpg'
import tyre from '../public/images/Tyre.jpg'
import styles from '../src/styles/card.module.css'
import Link from 'next/link'
export default function Card() {
  return (
    <div>
      <Link href="/Order" >
      <div className={styles.card}>
        <Image src={petrol} alt="Placeholder" />
        <h3>Petrol</h3>
        <p>This includes all types of petrols including e10,e20 and power</p>
      </div>
      

      <div className={styles.card1}>
        <Image src={diesel} alt="Placeholder" />
        <h3>Diesel</h3>
        <p>This includes all types of Diesels including e10,e20 and power</p>
      </div>

      <div className={styles.card1}>
        <Image src={tyre} alt="Placeholder" />
        <h3>Tyre</h3>
        <p>This includes all types of problems of Tyre</p>
      </div>
      </Link>
    </div>
  )
}
