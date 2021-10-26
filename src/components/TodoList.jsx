import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList() {
  const todos = [];

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} />
      ))}
    </ul>
  );
}
