import styles from "../css/AppMenu.module.css";
import logo from "../assets/logo.png";
import BackButton from "../components/BackButton";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";

function AppMenu() {
  return (
    <div className={styles.appMenu}>
      <div className={styles.logo}>
        <button>
          <img src={logo} alt="Walking Man logo" />
          <h1 className={styles.title}>Walking Man</h1>
        </button>
      </div>

      <AppNav />

      <Outlet />

      <footer className={styles.footer}>
        <p>&copy; Copyright 2023 Bas Inc. All rights are reserved.</p>
      </footer>
      <BackButton color={"#fff"} navigation="/home" />
    </div>
  );
}

export default AppMenu;
