import styles from "../css/SignIn.module.css";

function SignIn() {
  return (
    <div className={styles.signIn}>
      <div className={styles.container}>
        <h3>Login to Your Account</h3>
        <hr className={styles.hr} />
        <form className={styles.form}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
