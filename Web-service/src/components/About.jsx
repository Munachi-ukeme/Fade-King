import styles from "../styles/About.module.css";

function About({ aboutText }) {
  return (
    <section className={styles.about}>
      <h2>About Us</h2>
      <p>{aboutText}</p>
    </section>
  );
}

export default About;