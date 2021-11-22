import { createAction, createReducer } from '@reduxjs/toolkit';

// action type + creator
export const getTodo = createAction('GET_TODO');
export const addTodo = createAction('ADD_TODO');
export const removeTodo = createAction('REMOVE_TODO');
export const toggleTodo = createAction('TOGGLE_TODO');

const initial = [{ id: Date.now(), value: '리스트 추가하기', complete: false }];

// reducer
export const todos = createReducer(initial, {
  [getTodo]: (state) => state,
  [addTodo]: (state, action) => [
    ...state,
    {
      id: Date.now(),
      value: action.text,
      complete: false,
    },
  ],
  [removeTodo]: (state, action) => state.filter((todo) => todo.id !== action.id),
  [toggleTodo]: (state, action) =>
    state.forEach((todo) => {
      if (todo.id === action.id) todo.complete = !todo.complete;
    }),
});
