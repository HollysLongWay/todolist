import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodo } from '../modules/reducer';
import TodoItem from './TodoItem';

export default function TodoList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  const todos = useSelector((store) => store.todos);

  return <ul>{todos && todos.map((todo) => <TodoItem key={todo.id} id={todo.id} value={todo.value} complete={todo.complete} />)}</ul>;
}
