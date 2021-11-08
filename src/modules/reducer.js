// action type
const GET_TODO = 'GET_TODO';
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

// action creator
export function getTodo() {
  return { type: GET_TODO };
}

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id,
  };
}

// export const handleAddTodo = (todo) => (dispatch) => {
//   dispatch(addTodo(todo));
// };

// export const handleRemoveTodo = (id) => (dispatch) => {
//   dispatch(removeTodo(id));
// };

// export const handleToggleTodo = (id) => (dispatch) => {
//   dispatch(toggleTodo(id));
// };

const initial = [{ id: 1, value: '리스트 추가하기', complete: false }];

export function todos(state = initial, action) {
  switch (action.type) {
    case GET_TODO:
      return state;
    case ADD_TODO:
      return [...state, action.todo];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map((todo) => (todo.id !== action.id ? todo : { ...todo, complete: !todo.complete }));
    default:
      return state;
  }
}
