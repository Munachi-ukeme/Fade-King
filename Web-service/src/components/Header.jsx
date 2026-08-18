import styles from "../styles/Header.module.css";
import ThemeToggle from "./ThemeToggle";

function Header({ businessName, logoImage, whatsappNumber }) {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrap}>
        <img src={logoImage} alt={businessName} className={styles.logo} />
        <span className={styles.name}>{businessName}</span>
      </div>

      <nav className={styles.nav}>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className={styles.actions}>
        <ThemeToggle />
        <a href="#services" className={styles.bookBtn}>
          Services
        </a>
      </div>
    </header>
  );
}

export default Header;