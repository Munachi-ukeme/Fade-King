import styles from "../styles/Services.module.css";

function Services({ services }) {
  return (
    <section className={styles.services}>
      <h2>What We Offer</h2>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div className={styles.card} key={index}>
            <img src={service.image} alt={service.name} className={styles.cardImage} />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;