import styles from "../styles/Reviews.module.css";

function Reviews({ reviews }) {
  if (!reviews || reviews.length === 0) return null;

  return (
    <section className={styles.reviews}>
      <h2>What Our Clients Say</h2>
      <div className={styles.grid}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.stars}>{"⭐".repeat(review.rating)}</div>
            <p className={styles.text}>"{review.text}"</p>
            <span className={styles.name}>{review.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;