import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import AboutMore from "../pages/aboutmore";
import Order from "../pages/Order";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about-more" element={<AboutMore />} />
      <Route path="/order" element={<Order />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );    
}
