import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Добавление Footer
import About from "./pages/About";
import Faculties from "./pages/Faculties";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Home from "./pages/Home";

// Страница 404
const NotFound = () => {
  return (
    <div>
      <h1>404 Страница не найдена</h1>
      <p>Извините, мы не смогли найти эту страницу.</p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Faculties" element={<Faculties />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} /> {/* Обработка несуществующих маршрутов */}
        </Routes>
      </div>
      <Footer /> {/* Добавление Footer */}
    </Router>
  );
};

export default App;
