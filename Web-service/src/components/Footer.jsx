import styles from "../styles/Footer.module.css";

function Footer({ businessName, whatsappNumber, email, hours }) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.name}>{businessName}</p>

      <nav className={styles.links}>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>

      <p className={styles.contactLine}>
        {email} • {whatsappNumber}
      </p>

      <p className={styles.hoursLine}>
        Today: {hours[Object.keys(hours)[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1]]}
      </p>

      <div className={styles.support}>
        <p>Need a fix or update to this site?</p>
        <p>
          <a href="https://wa.me/2349132227203" target="_blank" rel="noopener noreferrer">WhatsApp: +234 913 222 7203</a>
          {" "}or{" "}
          <a href="mailto:munachiukeme@gmail.com">Email: munachiukeme@gmail.com</a>
        </p>
      </div>

      <p className={styles.copyright}>© {year} {businessName}. All rights reserved.</p>
      <p className={styles.signature}>
        Built by <a href="https://your-portfolio-link.com" target="_blank" rel="noopener noreferrer">Munachi</a>
      </p>
    </footer>
  );
}

export default Footer;