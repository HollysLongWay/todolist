import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodo, removeTodo, toggleTodo } from '../modules/reducer';
import TodoItem from './TodoItem';

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todos);

  const onChange = (id) => {
    dispatch(toggleTodo(id));
  };

  const onClick = (id) => {
    dispatch(removeTodo(id));
  };

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  return (
    <ul>
      {todos &&
        todos.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} value={todo.value} complete={todo.complete} onChange={onChange} onClick={onClick} />
        ))}
    </ul>
  );
}
