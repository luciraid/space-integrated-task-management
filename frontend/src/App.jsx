import React from 'react';
import ToDoList      from './components/ToDoList.jsx';
import WeatherWidget from './components/WeatherWidget.jsx';
import AQIWidget     from './components/AQIWidget.jsx';

export default function App() {
  return (
    <div>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        SpaceTasks
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        <div className="widget"><WeatherWidget /></div>
        <div className="widget"><AQIWidget     city="Bangalore" /></div>
      </div>

      <div className="widget">
        <ToDoList />
      </div>
    </div>
  );
}
