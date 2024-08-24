import styles from '../styles/Home.module.css';
import Header from './Header';
import Caroussel from './Caroussel'
import SearchBar from './SearchBar';
import Link from 'next/link';

function Home() {
  return (
    <div>
      <Header />
      {/* Déplacez la barre de recherche ici, juste après le Header */}
      <div className={styles.searchContainer}>
        
      </div>
      <main className={styles.main}>
        <div className={styles.leftContent}>
          <div className={styles.h1}>Bienvenue sur RevMédia !</div>
        </div>
        <div className={styles.rightContent}>
          <SearchBar />
          <div className={styles.caroussel}><Caroussel/></div>
          <div className={styles.parent}>
          <Link href="/machinàcafé">
              <button className={styles.article}>
                <img className={styles.img} src="/café.webp" alt="café"/>
                <div className={styles.price}>20.80</div>
              </button>
            </Link>
            <Link href="/products/2">
              <button className={styles.article}>
                <img className={styles.img} src="/blue.png" alt="iphone 15"/>
                <div className={styles.price}>20.80</div>
              </button>
            </Link>
            <Link href="/products/3">
              <button className={styles.article}>
                <img className={styles.img} src="/ence.webp" alt="amplie"/>
                <div className={styles.price}>20.80</div>
              </button>
            </Link>
          </div>
          <div className={styles.parent}>
          <Link href="/products/3">
              <button className={styles.article}>
                <img className={styles.img} src="/gui.jpg" alt="guitare sèche"/>
                <div className={styles.price}>20.80</div>
              </button>
            </Link>
            <Link href="/products/3">
              <button className={styles.article}>
                <img className={styles.img} src="/gut.jpg" alt="guitare élécrtique"/>
                <div className={styles.price}>20.80</div>
              </button>
            </Link>
            <Link href="/products/3">
              <button className={styles.article}>
                <img className={styles.img} src="/images.jpg" alt="crayon de couleurs"/>
                <div className={styles.price}>20.80</div>
              </button>
            </Link>
          </div>
          <div className={styles.parent}>
          <Link href="/products/3">
              <button className={styles.article}>
                <img className={styles.img} src="/ipad.jpg" alt="café"/>
                <div className={styles.price}>20.80</div>
              </button>
            </Link>
            <Link href="/products/3">
              <button className={styles.article}>
                <img className={styles.img} src="/café.webp" alt="café"/>
                <div className={styles.price}>20.80</div>
              </button>
            </Link>
            <Link href="/products/3">
              <button className={styles.article}>
                <img className={styles.img} src="/café.webp" alt="café"/>
                <div className={styles.price}>20.80</div>
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;


