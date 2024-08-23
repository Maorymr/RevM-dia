import styles from '../styles/Home.module.css';
import Header from './Header';
import SearchBar from './SearchBar';

function Home() {
  return (
    <div>
      <Header />
      {/* Déplacez la barre de recherche ici, juste après le Header */}
      <div className={styles.searchContainer}>
        <SearchBar />
      </div>
      <main className={styles.main}>
        <div className={styles.leftContent}>
          <div className={styles.h1}>Bienvenue sur RevMédia !</div>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.caroussel}>Caroussel</div>
          <div className={styles.parent}>
            <button className={styles.article}>Article 1</button> 
            <button className={styles.article}>Article 2</button> 
            <button className={styles.article}>Article 3</button> 
          </div>
          <div className={styles.parent}>
            <button className={styles.article}>Article 4</button> 
            <button className={styles.article}>Article 5</button> 
            <button className={styles.article}>Article 6</button>
          </div>
          <div className={styles.parent}>
            <button className={styles.article}>Article 7</button> 
            <button className={styles.article}>Article 8</button> 
            <button className={styles.article}>Article 9</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;


