import React, { useState } from 'react';

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  const add = () => {
    if (!text.trim()) return;
    setTasks([...tasks, { text, done: false }]);
    setText('');
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <div style={{ display: 'flex', marginBottom: '1rem' }}>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && add()}
          placeholder="New task"
          style={{ flexGrow: 1, marginRight: '0.5rem' }}
        />
        <button onClick={add}>Add</button>
      </div>
      <ul>
        {tasks.map((t, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => {
                const copy = [...tasks];
                copy[i].done = !copy[i].done;
                setTasks(copy);
              }}
            />
            <span style={{
              marginLeft: '0.5rem',
              textDecoration: t.done ? 'line-through' : 'none',
              opacity: t.done ? 0.6 : 1
            }}>
              {t.text}
            </span>
            <button onClick={() => setTasks(tasks.filter((_, j) => j !== i))}
              style={{ marginLeft: 'auto' }}>
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
