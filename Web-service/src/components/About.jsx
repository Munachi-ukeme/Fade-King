import styles from "../styles/About.module.css";

function About({ aboutText, trustPoints }) {
  return (
    <section className={styles.about} id="about">
      <h2>About Us</h2>
      <p>{aboutText}</p>
      <div className={styles.trustRow}>
        {trustPoints.map((point, i) => (
          <span key={i} className={styles.trustItem}>{point}</span>
        ))}
      </div>
    </section>
  );
}

export default About;