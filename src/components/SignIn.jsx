import styles from "../css/SignIn.module.css";
import { useAuth } from "../contexts/FakeAuthProvider";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("furkan@example.com");
  const [password, setPassword] = useState("qwerty");

  const { login, isAuthenticated } = useAuth();

  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    if (!email && !password) return;
    login(email, password);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/app/cities", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className={styles.signIn}>
      <div className={styles.container}>
        <h3>Login to Your Account</h3>
        <hr className={styles.hr} />
        <form className={styles.form}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button onClick={loginHandler}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
