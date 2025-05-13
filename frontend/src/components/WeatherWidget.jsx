import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function WeatherWidget() {
  const [daily, setDaily] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/weather')
      .then(res => setDaily(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!daily) return <div>Loading weather…</div>;

  return (
    <div>
      <h2>7-Day Forecast for Bangalore</h2>
      <ul>
        {daily.time.map((date, i) => (
          <li key={date}>
            {new Date(date).toLocaleDateString()}: max {daily.temperature_2m_max[i]}°C, min {daily.temperature_2m_min[i]}°C
          </li>
        ))}
      </ul>
    </div>
  );
}
