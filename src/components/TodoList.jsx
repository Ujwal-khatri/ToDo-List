import React from 'react';
import TodoItems from './TodoItems';
import light from '../assets/images/LightDetective.png'
import '../App.css';

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <img src={light} alt="No tasks" />
        <p>Empty!</p>
      </div>
    );
  }

  return (
    <div className="lists">
      {todos.map((todo) => (
        <TodoItems
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
