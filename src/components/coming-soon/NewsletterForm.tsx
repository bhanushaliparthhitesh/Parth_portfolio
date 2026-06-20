import styles from '@/app/coming-soon/coming.module.css';

export default function NewsletterForm() {
  return (
    <div className={styles.newsletterWrapper}>
      <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
        <label className={styles.newsletterLabel}>Enter your email address *</label>
        <div className={styles.inputGroup}>
          <input 
            type="email" 
            className={styles.newsletterInput} 
            placeholder="example@domain.com"
            required
          />
          <button type="submit" className={styles.notifyButton}>
            Notify Me
          </button>
        </div>
      </form>
    </div>
  );
}
