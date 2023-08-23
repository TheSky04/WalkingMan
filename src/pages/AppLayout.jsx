import styles from "../css/AppLayout.module.css";
import AppMenu from "../components/AppMenu";
import Map from "../components/Map";

function AppLayout() {
  return (
    <div className={styles.app}>
      <AppMenu />
      <Map />
    </div>
  );
}

export default AppLayout;
