import styles from "../css/Form.module.css";
import { useNavigate } from "react-router-dom";

function Form() {

  const navigate = useNavigate();

  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="html">City Name</label>
          <input type="text"></input>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="html">When did you go to ?</label>
          <input type="text" value="2027-10-31T15:59:59.138Z"></input>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="html">Notes about your trip</label>
          <textarea id="note" name="note" rows="4" cols="50"/>
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.add}>+Add</button>
          <button className={styles.back} onClick={() => navigate('/app/cities')}>&larr;Back</button>
        </div>
      </form>
    </div>
  )
}

export default Form