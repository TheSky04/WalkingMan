import { useCallback, useContext, useEffect, useReducer } from "react";
import { createContext } from "react";

const CitiesContext = createContext();

const initialState = {
  currentCity: {},
  cities: [],
  isLoading: false,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "loading": {
      return { ...state, isLoading: true };
    }
    case "cities/loaded": {
      return { ...state, cities: action.payload, isLoading: false };
    }

    case "city/loaded": {
      return {
        ...state,
        isLoading: false,
        currentCity: action.payload,
      };
    }

    case "city/create": {
      return {
        ...state,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
        isLoading: false,
      };
    }
    case "city/delete": {
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload),
        isLoading: false,
        currentCity: {},
      };
    }

    case "rejected": {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }

    default:
      throw new Error("Unknown Error!");
  }
};

function CitiesProvider({ children }) {
  const [{ currentCity, cities, isLoading }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const getCurrentCity = useCallback(async function getCurrentCity(id) {
    try {
      dispatch({ type: "loading" });
      let res = await fetch(`http://localhost:9000/cities/${id}`);
      let data = await res.json();
      dispatch({ type: "city/loaded", payload: data });
    } catch (err) {
      dispatch({
        type: "rejected",
        payload: "Something went wrong in the fetch!",
      });
    }
  }, []);

  async function createCity(newCity) {
    try {
      dispatch({ type: "loading" });
      let res = await fetch(`http://localhost:9000/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await res.json();

      dispatch({ type: "city/create", payload: data });
    } catch (err) {
      dispatch({
        type: "rejected",
        payload: "Something went wrong in the fetch!",
      });
    }
  }

  async function deleteCity(id) {
    try {
      dispatch({ type: "loading" });
      await fetch(`http://localhost:9000/cities/${id}`, {
        method: "DELETE",
      });

      dispatch({ type: "city/delete", payload: id });
    } catch (err) {
      dispatch({
        type: "rejected",
        payload: "Something went wrong in the fetch!",
      });
    }
  }

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
      dispatch({ type: "loading" });
      let res = await fetch("http://localhost:9000/cities");
      let data = await res.json();
      dispatch({ type: "cities/loaded", payload: data });
    }

    getCities();
  }, []);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        currentCity,
        getCurrentCity,
        transformImage: flagemojiToPNG,
        isLoading,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("You used the useCities out of the provider!");
  return context;
}

export default CitiesProvider;
