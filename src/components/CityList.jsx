
import { useCities } from "../contexts/CitiesProvider";
import styles from "../css/CityList.module.css";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function CityList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { cities, transformImage, currentCity } = useCities();

  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));


  return (
    <>
      <ul className={styles.cityList}>
        {cities.map((city) => (
          <Link to={`${city.id}?name=${city.cityName}&lat=${city.position.lat}&lng=${city.position.lng}`} key={city.id}>
            <li key={city.id} className={`${styles.listItem}  ${currentCity.id === city.id ? styles['listItem--active'] : ''}`}>
              <p className={styles.emoji}>{city.emoji ? transformImage(city.emoji) : ""}</p>
              <p>{city.cityName}</p>
              <p className={styles.date}>({formatDate(city.date)})</p>
              <div className={styles.buttonContainer}>
                <button className={styles.times}>&times;</button>
              </div>
            </li>
          </Link>
        ))}
      </ul >
    </>
  );
}

export default CityList;
