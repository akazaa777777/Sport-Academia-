import React from "react";
import "./Footer.css"; // Подключаем стили

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h3>Университет</h3>
        <p>Адрес: ул. Академическая, 1, г. Образец</p>
        <p>Телефон: +996 (700) 195248</p>
        <p>Email: akjol6546@gmail.com</p>
      </div>
      <div className="footer-links">
        <a href="/privacy">Политика конфиденциальности</a>
        <a href="/terms">Условия использования</a>
      </div>
    </footer>
  );
};

export default Footer;
