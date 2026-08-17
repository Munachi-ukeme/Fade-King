import styles from "../styles/Gallery.module.css";

function Gallery({ gallery }) {
  return (
    <section className={styles.gallery} id="gallery">
      <h2>Our Work</h2>
      <div className={styles.grid}>
        {gallery.map((img, index) => (
          <img key={index} src={img} alt={`Work sample ${index + 1}`} className={styles.image} />
        ))}
      </div>
    </section>
  );
}

export default Gallery;