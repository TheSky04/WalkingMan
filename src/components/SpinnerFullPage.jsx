import Spinner from "./Spinner";
import styles from "../css/SpinnerFullPage.module.css";

function SpinnerFullPage() {
  return (
    <div className={styles.spinnerContainer}>
      <Spinner />
    </div>
  );
}

export default SpinnerFullPage;
