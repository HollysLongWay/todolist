// action type
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

// action creator
function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}

function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}

function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id,
  };
}

// getState를 쓰지 않는다면 굳이 파라미터로 받아올 필요 없습니다.
export const handleAddTodo = (todo) => (dispatch) => {
  dispatch(addTodo(todo));
};

export const handleRemoveTodo = (id) => (dispatch) => {
  dispatch(removeTodo(id));
};

export const handleToggleTodo = (id) => (dispatch) => {
  dispatch(toggleTodo(id));
};

export default function todos(state = [], action) {
  switch (action.type) {
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
