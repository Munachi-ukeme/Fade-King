import styles from "../styles/Hero.module.css";

function Hero({ businessName, tagline, subTagline, heroImage, whatsappNumber }) {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }} id="home">
      <div className={styles.overlay}>
        <h1 className={styles.title}>{tagline}</h1>
        <p className={styles.subTagline}>{subTagline}</p>
        <div className={styles.ctaGroup}>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            Book an Appointment
          </a>
          <a href="#services" className={styles.ctaBtnOutline}>
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;