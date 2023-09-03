import styles from "../css/BackButton.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function BackButton({ color = 'red', navigation = '/home' }) {

  const navigate = useNavigate();

  return (
    <button style={{ color }} className={styles.back} onClick={() => navigate(navigation)}>&larr;Back</button>
  );
}

export default BackButton;
