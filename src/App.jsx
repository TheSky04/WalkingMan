import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import Pricing from "./pages/Pricing";
// import Product from "./pages/Product";
// import Login from "./pages/Login";
// import AppLayout from "./pages/AppLayout";
// import NotFound from "./pages/NotFound";

const Home = lazy(() => import("./pages/Home"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Product = lazy(() => import("./pages/Product"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const NotFound = lazy(() => import("./pages/NotFound"));

import Navbar from "./components/Navbar";
import CountryList from "./components/CountryList";
import CityList from "./components/CityList";
import Form from "./components/Form";
import City from "./components/City";

import CitiesProvider from "./contexts/CitiesProvider";
import FakeAuthProvider from "./contexts/FakeAuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import SpinnerFullPage from "./components/SpinnerFullPage";

function App() {
  return (
    <div>
      <FakeAuthProvider>
        <CitiesProvider>
          <BrowserRouter>
            <Suspense fallback={<SpinnerFullPage />}>
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
            </Suspense>
          </BrowserRouter>
        </CitiesProvider>
      </FakeAuthProvider>
    </div>
  );
}

export default App;
