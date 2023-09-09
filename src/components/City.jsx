import { useEffect } from "react";
import styles from "../css/City.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { useCities } from "../contexts/CitiesProvider";
import Spinner from "./Spinner";

function City() {
  const navigate = useNavigate();

  const { id } = useParams();

  const { getCurrentCity, currentCity, isLoading } = useCities();

  useEffect(() => {
    getCurrentCity(id);
  }, [id]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={styles.cityDetail}>
      <div className={styles.detailGroup}>
        <h4> City Name</h4>
        <p> {currentCity.cityName}</p>
      </div>
      <div className={styles.detailGroup}>
        <h4>You went to {currentCity.cityName} on </h4>
        <p>{currentCity.date}</p>
      </div>
      <div className={styles.detailGroup}>
        <h4>Your Notes</h4>
        <p>{currentCity.notes || "You don't have a note for this city!"}</p>
      </div>
      <div className={styles.detailGroup}>
        <h4>Learn More</h4>
        <a href={`https://en.wikipedia.org/wiki/${currentCity.cityName}`}>
          Check out {currentCity.cityName} on Wikipedia &rarr;
        </a>
      </div>
      <div className={`${styles.detailGroup} ${styles.textRight}`}>
        <button className={styles.back} onClick={() => navigate(-1)}>
          &larr;Back
        </button>
      </div>
    </div>
  );
}

export default City;
