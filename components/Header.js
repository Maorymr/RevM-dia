import Link from 'next/link';
import styles from '../styles/Home.module.css'; 

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        
        <Link href="/">
          <a className={styles.img}><img src='/img.png'></img></a>
        </Link>
      </div>
      <div className={styles.right}>
        <Link href="/panier">
          <a className={styles.button}>Panier</a>
        </Link>
      </div>
    </header>
  );
}

export default Header;

