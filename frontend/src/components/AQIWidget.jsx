import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AQIWidget({ city }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/aqi?city=${city}`)
      .then(res => setData(res.data.results[0]))
      .catch(err => console.error(err));
  }, [city]);

  if (!data) return <div>Loading air quality…</div>;

  const pm25 = data.measurements.find(m => m.parameter === 'pm25')?.value;
  return (
    <div>
      <h2>Air Quality for {city}</h2>
      <p>PM2.5: {pm25 ?? 'N/A'} μg/m³</p>
      <p>Last updated: {new Date(data.date.utc).toLocaleString()}</p>
    </div>
  );
}
