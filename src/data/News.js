import React, { useState, useEffect } from 'react';
import './News.css';

const News = () => {
  const [news, setNews] = useState([]);

  // Пример новостей, которые могут быть загружены с API
  useEffect(() => {
    // Для демонстрации здесь статические данные, но вы можете загрузить их с API
    const fetchedNews = [
      { title: 'Новая программа для студентов', date: '2024-12-10', content: 'В нашем университете запускается новая программа для студентов.' },
      { title: 'Конференция по искусственному интеллекту', date: '2024-12-05', content: 'Приглашаем студентов на конференцию по искусственному интеллекту.' },
      { title: 'Курс по веб-разработке', date: '2024-11-30', content: 'Запуск курса по веб-разработке для начинающих.' },
      // Добавьте другие новости
    ];
    setNews(fetchedNews);
  }, []);

  return (
    <div className="news">
      <h1>Новости</h1>
      <ul>
        {news.map((item, index) => (
          <li key={index} className="news-item">
            <h3>{item.title}</h3>
            <span>{item.date}</span>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
