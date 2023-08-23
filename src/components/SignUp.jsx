import styles from "../css/SignUp.module.css";

function SignUp() {
  return (
    <div className={styles.signUp}>
      <div className={styles.content}>
        <h3>New Here ? </h3>
        <p>Sign Up and discover a great amount of new opportunities!</p>
        <button>Sign Up!</button>
      </div>
    </div>
  );
}

export default SignUp;
