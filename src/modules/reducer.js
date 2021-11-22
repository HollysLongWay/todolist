import { createAction, createReducer } from '@reduxjs/toolkit';

// action type + creator
const getTodo = createAction('GET_TODO');
const addTodo = createAction('ADD_TODO', text);
const removeTodo = createAction('REMOVE_TODO', id);
const toggleTodo = createAction('TOGGLE_TODO', id);

const initial = [{ id: Date.now(), value: '리스트 추가하기', complete: false }];

// reducer
const todos = createReducer(state=initial, {
  [getTodo]: (state) => state,
  [addTodo]: (state, action) => [...state, {
    id: Date.now(),
    value: action.text,
    complete: false,
  },],
  [removeTodo]: (state, action) => state.filter((todo) => todo.id !== action.id),
  [toggleTodo]: (state, action) => state.forEach((todo) => {
    if(todo.id === action.id) todo.complete = !todo.complete;
  }),
});

export todos;
