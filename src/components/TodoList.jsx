import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodo, removeTodo, toggleTodo } from '../modules/reducer';
import TodoItem from './TodoItem';

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todos);

  const onChange = useCallback(
    (id) => {
      dispatch(toggleTodo(id));
    },
    [dispatch]
  );

  const onClick = useCallback(
    (id) => {
      dispatch(removeTodo(id));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  return (
    <ul aria-label="할 일 목록">
      {todos &&
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            value={todo.value}
            complete={todo.complete}
            onChange={onChange}
            onClick={onClick}
          />
        ))}
    </ul>
  );
}
