import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import AppLayout from "./pages/AppLayout";
import CountryList from "./components/CountryList";
import CityList from "./components/CityList";
import Form from "./components/Form";
import CitiesProvider from "./contexts/CitiesProvider";
import City from "./components/City";
import FakeAuthProvider from "./contexts/FakeAuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <FakeAuthProvider>
        <CitiesProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Navbar />}>
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="product" element={<Product />} />
                <Route path="login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="countries" element={<CountryList />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="form" element={<Form />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CitiesProvider>
      </FakeAuthProvider>
    </div>
  );
}

export default App;
