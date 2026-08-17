import styles from "../styles/Services.module.css";

function Services({ services }) {
  return (
    <section className={styles.services} id="services">
      <h2>Our Services</h2>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div className={styles.card} key={index}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <span className={styles.price}>{service.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;