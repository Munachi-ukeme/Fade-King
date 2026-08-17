import styles from "../styles/Hours.module.css";

function Hours({ hours, whatsappNumber }) {
  return (
    <section className={styles.hours}>
      <h2>Opening Hours</h2>
      <ul className={styles.list}>
        {Object.entries(hours).map(([day, time]) => (
          <li key={day} className={styles.row}>
            <span className={styles.day}>{day}</span>
            <span className={styles.time}>{time}</span>
          </li>
        ))}
      </ul>
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.bookBtn}
      >
        Book an Appointment
      </a>
    </section>
  );
}

export default Hours;