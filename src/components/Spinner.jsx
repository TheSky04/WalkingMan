import styles from "../css/Spinner.module.css";

function Spinner() {
  return (
    // <p style={{ textAlign: 'center', fontSize: '20px', color: 'white' }}>Loading...</p>
    <div className="spinner-container">
      <div className={styles.loadingSpinner}>
      </div>
    </div>
  );
}

export default Spinner;
