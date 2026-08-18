import styles from "../styles/Hero.module.css";

function Hero({ businessName, tagline, subTagline, heroImage, whatsappNumber, email }) {
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
            Book via WhatsApp
          </a>
          <a
            href={`mailto:${email}?subject=Booking Request&body=Hi, I'd like to book an appointment for...`}
            className={styles.ctaBtnOutline}
          >
            Book via Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;