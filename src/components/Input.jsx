import React, { useState } from 'react';
import moon from '../assets/images/Moon.png'
import '../App.css';

const Input = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim() !== '') {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <div className="header">
      <input
        type="text"
        placeholder="Add a new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="inputbut">
      <button onClick={handleAdd}>Add Task</button>

      <button>Dark Mode</button>
      </div>
      
    </div>
  );
};

export default Input;
