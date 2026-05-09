import { Routes, Route } from "react-router-dom";
import Navbar   from "./components/layout/Navbar";
import Footer   from "./components/layout/Footer";
import AboutPage from "./pages/Aboutpage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-[#060c1a] font-sans antialiased">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}