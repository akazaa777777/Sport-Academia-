import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Ваше сообщение отправлено!');
  };

  return (
    <div className="contact">
      <h1>Контакты</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Введите ваше сообщение"
        ></textarea>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default Contact;
