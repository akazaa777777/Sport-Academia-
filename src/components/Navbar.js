import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Импортируем логотип
import logo from "../assets/sport fkf.jpeg"; // Убедитесь, что путь к файлу правильный

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Добавляем логотип */}
      <img src={logo} alt="Логотип университета" className="sportfkf" />
      <div className="Navbar-logo">Университет</div>
      <ul className="Navbar-links">
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/About">О нас</Link></li>
        <li><Link to="/Faculties">Факультеты</Link></li>
        <li><Link to="/Contact">Контакты</Link></li>
        <li><Link to="/login">Войти</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
