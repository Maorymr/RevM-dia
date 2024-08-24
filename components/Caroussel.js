import styles from '../styles/Home.module.css';

function Caroussel() {
  return (
    <div className={styles.carousel}>
      <div className={styles.carouselInner}>
        <div className={styles.carouselItem}>
          <img className={styles.img} src="cable.jpg" alt="Image 1" />
        </div>
        <div className={styles.carouselItem}>
          <img className={styles.img} src="capo.jpg" alt="Image 2" />
        </div>
        <div className={styles.carouselItem}>
          <img className={styles.img} src="micro.jpg" alt="Image 3" />
        </div>
        <div className={styles.carouselItem}>
          <img className={styles.img} src="pic.jpg" alt="Image 4" />
        </div>
      </div>
      <button className={styles.carouselControlPrev}>‹</button>
      <button className={styles.carouselControlNext}>›</button>
    </div>
  );
}

export default Caroussel;

  


