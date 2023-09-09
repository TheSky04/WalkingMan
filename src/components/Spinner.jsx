import styles from "../css/Spinner.module.css";

function Spinner() {
  return (
    <div className="spinner-container">
      <div className={styles.loadingSpinner}></div>
    </div>
  );
}

export default Spinner;
