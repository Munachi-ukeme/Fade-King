import styles from "../styles/Hero.module.css";

function Hero({ businessName, tagline, heroImage, whatsappNumber }) {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className={styles.overlay}>
        <h1 className={styles.title}>{businessName}</h1>
        <p className={styles.tagline}>{tagline}</p>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaBtn}
        >
          Chat With Us Now
        </a>
      </div>
    </section>
  );
}

export default Hero;