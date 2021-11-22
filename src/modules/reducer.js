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
  [addTodo]: (state, { payload }) => [
    ...state,
    {
      id: Date.now(),
      value: payload,
      complete: false,
    },
  ],
  [removeTodo]: (state, { payload }) => state.filter((todo) => todo.id !== payload),
  [toggleTodo]: (state, { payload }) =>
    state.forEach((todo) => {
      if (todo.id === payload) todo.complete = !todo.complete;
    }),
});
