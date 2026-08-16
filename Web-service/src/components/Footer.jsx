import styles from "../styles/Footer.module.css";

function Footer({ businessName }) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>© {year} {businessName}. All rights reserved.</p>

      <div className={styles.support}>
        <p>Need a fix or update to this site?</p>
        <p>
          <a href="https://wa.me/2349132227203" target="_blank" rel="noopener noreferrer">
            WhatsApp: +234 913 222 7203
          </a>
          {" "}or{" "}
          <a href="mailto:munachiukeme@gmail.com">
            Email: munachiukeme@gmail.com
          </a>
        </p>
      </div>

      <p className={styles.signature}>
        Built by <a href="https://munachi-ukeme.github.io/my-portfolio-/" target="_blank" rel="noopener noreferrer">Munachi</a>
      </p>
    </footer>
  );
}

export default Footer;