import styles from "../styles/Hours.module.css";

function Hours({ hours, whatsappNumber, email }) {
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
      <div className={styles.bookGroup}>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.bookBtn}
        >
          Book via WhatsApp
        </a>
        <a
          href={`mailto:${email}?subject=Booking Request&body=Hi, I'd like to book an appointment for...`}
          className={styles.bookBtnOutline}
        >
          Book via Email
        </a>
      </div>
    </section>
  );
}

export default Hours;