import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodo, removeTodo, toggleTodo } from '../modules/reducer';
import TodoItem from './TodoItem';
import TodoOption from './TodoOption';

export default function TodoList() {
  const dispatch = useDispatch();
  const fetchTodos = useSelector((store) => store.todos);
  const [todos, setTodos] = useState(fetchTodos);

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

  const showAllTodos = () => {
    setTodos(todos);
  };

  const showActiveTodos = () => {
    setTodos(todos.filter((todo) => !todo.complete));
  };

  const showComTodos = () => {
    setTodos(todos.filter((todo) => todo.complete));
  };

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  return (
    <>
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
      <TodoOption
        todos={todos}
        showAllTodos={showAllTodos}
        showActiveTodos={showActiveTodos}
        showComTodos={showComTodos}
      />
    </>
  );
}
