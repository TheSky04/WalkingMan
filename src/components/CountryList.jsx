import { useCities } from "../contexts/CitiesProvider";
import styles from "../css/CountryList.module.css";

function CountryList() {
  const { cities, transformImage } = useCities();

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((city) => (
        <li key={city.country} className={styles.listItem}>
          <p className={styles.emoji}>
            {city.emoji ? transformImage(city.emoji) : ""}
          </p>
          <p>{city.country}</p>
        </li>
      ))}
    </ul>
  );
}

export default CountryList;
