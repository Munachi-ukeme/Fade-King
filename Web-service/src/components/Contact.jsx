import styles from "../styles/Contact.module.css";

function Contact({ whatsappNumber, phoneNumber, mapEmbedUrl, socials }) {
  return (
    <section className={styles.contact}>
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

        <div className={styles.socials}>
          {socials?.instagram && (
            <a href={socials.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          )}
          {socials?.facebook && (
            <a href={socials.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
          )}
          {socials?.tiktok && (
            <a href={socials.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
          )}
        </div>
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