import { useReducer, useContext, createContext } from "react";

const initialState = { isAuthenticated: false, user: null };

const reducer = (state, action) => {
  switch (action.type) {
    case "login": {
      return { ...state, isAuthenticated: true, user: action.payload };
    }
    case "logout": {
      return { ...state, isAuthenticated: false, user: null };
    }
    default:
      throw new Error("Unknown Error!");
  }
};

const FAKE_USER = {
  name: "Furkan",
  email: "furkan@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};
const AuthContext = createContext();

function FakeAuthProvider({ children }) {
  const login = function (email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    }
  };

  const logout = function () {
    dispatch({ type: "logout" });
  };

  const [{ isAuthenticated, user }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("You used the context out of the Provider");
  }

  return context;
}

export default FakeAuthProvider;
