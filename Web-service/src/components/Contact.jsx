import styles from "../styles/Contact.module.css";

function Contact({ whatsappNumber, phoneNumber, email, address, mapEmbedUrl, socials }) {
  return (
    <section className={styles.contact} id="contact">
      <h2>Get In Touch</h2>
      <div className={styles.details}>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappBtn}
        >
          Message on WhatsApp
        </a>
        <p className={styles.phone}>Call us: {phoneNumber}</p>
        <p className={styles.email}>Email: {email}</p>
        <p className={styles.address}>📍 {address}</p>

        <div className={styles.socials}>
          {socials?.instagram && (
            <p>Follow us on <a href={socials.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></p>
          )}
          {socials?.facebook && (
            <p>Find us on <a href={socials.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></p>
          )}
          {socials?.tiktok && (
            <p>Watch us on <a href={socials.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a></p>
          )}
        </div>

        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.directionsBtn}
        >
          Get Directions
        </a>
      </div>
      <iframe
        src={mapEmbedUrl}
        className={styles.map}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Business Location"
      ></iframe>
    </section>
  );
}

export default Contact;