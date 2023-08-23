import styles from "../css/BackButton.module.css";
import { Link } from "react-router-dom";

function BackButton({ color }) {
  return (
    <Link to="/" style={{ color: color }} className={styles.back}>
      &larr; Back
    </Link>
  );
}

export default BackButton;
