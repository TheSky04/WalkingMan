import styles from "../css/Form.module.css";
import { useNavigate } from "react-router-dom";
import useUrlPosition from "../hooks/useUrlPosition";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesProvider";
import Message from "./Message";
import Spinner from "./Spinner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Form() {
  const convertToEmoji = (countryCode) => {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  };

  const [lat, lng] = useUrlPosition();
  const navigate = useNavigate();
  const { transformImage, createCity, isLoading } = useCities();
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [emoji, setEmoji] = useState("");
  const [geocodeError, setGeocodeError] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (!lat || !lng) return;

    async function fetchCityData() {
      try {
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
        const data = await res.json();

        setIsLoadingGeocoding(true);

        if (!data.countryCode)
          throw new Error(
            "It doesn't seem to be a city. Please click somewhere else 😥!"
          );

        setCityName(data.city || data.locality || "");
        setCountry(data.countryName);
        setEmoji(convertToEmoji(data.countryCode));
        setGeocodeError(false);
      } catch (err) {
        setGeocodeError(err.message);
      } finally {
        setIsLoadingGeocoding(false);
      }
    }
    fetchCityData();
  }, [lat, lng]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cityName || !date) return;

    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: { lat, lng },
    };

    await createCity(newCity);
    navigate("/app/cities");
  };

  if (isLoadingGeocoding) return <Spinner />;

  if (!lat || !lng)
    return <Message message="Start by clicking somewhere on the map!" />;

  if (geocodeError) return <Message message={geocodeError} />;

  return (
    <div className={styles.formContainer}>
      <form
        className={`${styles.form} ${isLoading ? styles.loading : ""}`}
        onSubmit={handleSubmit}
      >
        <div className={styles.inputGroup}>
          <label htmlFor="html">City Name</label>
          <input
            type="text"
            disabled
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          ></input>
          <span className={styles.flag}>{emoji && transformImage(emoji)}</span>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="html">When did you go to {cityName} ?</label>
          {/* <input type="text" value="2027-10-31T15:59:59.138Z"></input> */}
          <DatePicker
            id="date"
            onChange={(date) => setDate(date)}
            selected={date}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="html">Notes about your trip to {cityName}</label>
          <textarea
            id="note"
            name="note"
            rows="4"
            cols="50"
            onChange={(e) => setNotes(e.target.value)}
            value={notes}
          />
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.add}>+Add</button>
          <button
            className={styles.back}
            onClick={() => navigate("/app/cities")}
          >
            &larr;Back
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
