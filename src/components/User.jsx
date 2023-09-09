import { useAuth } from "../contexts/FakeAuthProvider";
import styles from "../css/User.module.css";
import { useNavigate } from "react-router-dom";

function User() {
  const { logout, user } = useAuth();

  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    logout();
    navigate("/home");
  };

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;
