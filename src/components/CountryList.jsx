import styles from "../css/CountryList.module.css";

function CountryList({ cities }) {
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
        <li key={city.id} className={styles.listItem}>
          <p className={styles.emoji}>{city.emoji}</p>
          <p>{city.country}</p>
        </li>
      ))}
    </ul>
  );
}

export default CountryList;
