import styles from "../css/Map.module.css";
import { useSearchParams,useNavigate } from "react-router-dom";

function Map() {

  const navigate = useNavigate();

  const [searchParams,setSearchParams] = useSearchParams();

  const country = searchParams.get('name');
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return <div className={styles.map} onClick={() => navigate('form')} >
    <p>{country} {lat} {lng} </p>
  </div>;
}

export default Map;
