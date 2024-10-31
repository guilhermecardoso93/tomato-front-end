import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";

import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { PlaceOrder } from "./pages/PlaceOrder";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
      <Footer />
    </div>
  );
}
