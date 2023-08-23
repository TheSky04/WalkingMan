import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import styles from "../css/Login.module.css";

function Login() {
  return (
    <div className={styles.login}>
      <SignIn />
      <SignUp />
    </div>
  );
}

export default Login;
