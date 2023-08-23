import styles from "../css/HomeContent.module.css";
import { Link } from "react-router-dom";

function HomeContent() {
  return (
    <div className={styles.homeContent}>
      <div className={styles.content}>
        <h2>
          You travel the world! Walking Man keeps track of your adventures.
        </h2>
        <h4>
          You can review the walking man&apos;s schedule and even add a program
          for yourself and organize your trip, maybe one day you can even be the
          walking man!
        </h4>
        <Link to="/login" className={styles.cta}>
          Start Now!
        </Link>
      </div>
    </div>
  );
}

export default HomeContent;
