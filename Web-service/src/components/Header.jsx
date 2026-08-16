import styles from "../styles/Header.module.css";
import ThemeToggle from "./ThemeToggle";
function Header({ businessName, logoImage, whatsappNumber }) {
  return (
    <header className={styles.header}>
  <div className={styles.logoWrap}>
    <img src={logoImage} alt={businessName} className={styles.logo} />
    <span className={styles.name}>{businessName}</span>
  </div>

  <div className={styles.actions}>
    <ThemeToggle />
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappBtn}
    >
      WhatsApp Us
    </a>
  </div>
</header>
  );
}

export default Header;