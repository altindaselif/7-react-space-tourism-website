import styles from "./PageTitle.module.css";

function PageTitle({ number, text }) {
  return (
    <h5 className={styles.mainTitle}>
      <span className={styles.mainTitleNumber}>{number}</span>
      {text}
    </h5>
  );
}

export default PageTitle;
