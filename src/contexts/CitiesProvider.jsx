import React, { useContext, useState, useEffect } from 'react';
import { createContext } from 'react';
import Spinner from "../components/Spinner";

const CitiesContext = createContext();

function CitiesProvider({ children }) {

  const [currentCity, setCurrentCity] = useState({});
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  async function getCurrentCity(id) {

    try {
      setIsLoading(true);
      let res = await fetch(`http://localhost:9000/cities/${id}`);
      let data = await res.json();
      setCurrentCity(data);
      setIsLoading(false);
    } catch (err) {
      throw new Error("Something went wrong in the fetch!");
    } finally {
      setIsLoading(false);
    }

  };

  const flagemojiToPNG = (flag) => {
    var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
      .map((char) => String.fromCharCode(char - 127397).toLowerCase())
      .join("");
    return (
      <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
    );
  };


  useEffect(() => {
    async function getCities() {
      let res = await fetch("http://localhost:9000/cities");
      let data = await res.json();
      setCities(data);
    }

    getCities();
  }, []);

  return (
    <CitiesContext.Provider value={{ cities, currentCity, getCurrentCity, transformImage: flagemojiToPNG, isLoading, setIsLoading }}>{children}</CitiesContext.Provider>
  )
}


export function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) throw new Error("You used the useCities out of the provider!")
  return context;
};


export default CitiesProvider;