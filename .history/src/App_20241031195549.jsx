import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";

import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { PlaceOrder } from "./pages/PlaceOrder";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login";

export function App() {
  const [ login, setLogin ] = useState(false)
  return (
    <>
    {login ? <Login /> : <></>}
      <div className="app">
        <Navbar setLogin={setLogin} login={login}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
