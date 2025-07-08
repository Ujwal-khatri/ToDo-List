import React, { useState } from 'react';
import '../App.css';

const TodoItems = ({ todo, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleSave = () => {
    if (editedText.trim() !== '') {
      updateTodo(todo.id, editedText);
      setIsEditing(false);
    }
  };

  return (
    <div className="items">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <div className="buttons">
            <button className='save' onClick={handleSave}>Save</button>
            <button className='cancel' onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <p>{todo.text}</p>
          <div className="buttons">
            <button className='edit' onClick={() => setIsEditing(true)}>Edit</button>
            <button className='delete' onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItems;
