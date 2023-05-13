import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/images/logo.jpg';
import styles from '../src/styles/header.module.css';

const Header = () => {
  const handleClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <header className={styles.header}>
      <Image src={logo} alt="LOADING" width={80} height={80} />
      <h1 className={styles.title}>FUEL ON PHONE</h1>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li  style={{cursor:"pointer"}} className={styles.navItem}  onClick={handleClick} >
            
              About
           
          </li>
          <li className={styles.navItem}>
            <Link href="/ContactForm">Contact</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/Order">Order Now</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/Other">Other</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;