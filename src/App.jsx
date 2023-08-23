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

import { useEffect, useState } from "react";

function App() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function getCities() {
      let res = await fetch("http://localhost:9000/cities");
      let data = await res.json();
      setCities(data);
    }

    getCities();
  }, []);

  return (
    <div>
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
          <Route path="app" element={<AppLayout />}>
            <Route path="countries" element={<CountryList cities={cities} />} />
            <Route path="cities" element={<CityList cities={cities} />} />
            <Route path="form" element={<Form/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
