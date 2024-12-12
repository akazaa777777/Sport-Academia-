import React, { useState, useEffect } from 'react';
import './Schedule.css';

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);

  // Пример данных расписания, которые могут быть загружены через API
  useEffect(() => {
    // Для демонстрации здесь статические данные, но вы можете загрузить их с API
    const fetchedSchedule = [
      { day: 'Понедельник', time: '10:00 - 11:30', subject: 'Математика' },
      { day: 'Вторник', time: '12:00 - 13:30', subject: 'Физика' },
      { day: 'Среда', time: '10:00 - 11:30', subject: 'Программирование' },
      // Добавьте другие предметы и дни
    ];
    setSchedule(fetchedSchedule);
  }, []);

  return (
    <div className="schedule">
      <h1>Расписание</h1>
      <table>
        <thead>
          <tr>
            <th>День</th>
            <th>Время</th>
            <th>Предмет</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr key={index}>
              <td>{item.day}</td>
              <td>{item.time}</td>
              <td>{item.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
