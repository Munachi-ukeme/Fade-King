import styles from "../styles/WhyChooseUs.module.css";

function WhyChooseUs({ whyChooseUs }) {
  return (
    <section className={styles.why}>
      <h2>Why Choose Us</h2>
      <div className={styles.grid}>
        {whyChooseUs.map((item, index) => (
          <div key={index} className={styles.card}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;