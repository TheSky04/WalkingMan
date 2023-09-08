import logo from "../assets/logo.png";
import { NavLink, Outlet } from "react-router-dom";
import styles from "../css/Navbar.module.css";
import { useAuth } from "../contexts/FakeAuthProvider";

function Navbar() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <nav>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <button>
              <img src={logo} alt="Walking Man logo" />
              <h1 className={styles.title}>Walking Man</h1>
            </button>
          </div>
          <ul>
            <li>
              <NavLink to="home">Home</NavLink>
            </li>
            <li>
              <NavLink to="product">Product</NavLink>
            </li>
            {!isAuthenticated && (
              <li style={{ marginRight: "20px" }}>
                <NavLink to="login">Login</NavLink>
              </li>
            )}
            {isAuthenticated && (
              <li className={styles.app}>
                <NavLink to="app/cities">App</NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
