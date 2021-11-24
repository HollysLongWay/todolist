import { useState } from 'react';
import { TodoList } from './TodoList';
import { Footer } from './Footer';
import { generateNextId } from '../utils/funcs';
import './todo-container.scss';
import { TodoInput } from './TodoInput';
import { ToggleAll } from './ToggleAll';

const todosData = [
  { id: 3, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'HTML', completed: false },
];

export function TodoContainer(props) {
  const [todos, setTodos] = useState(todosData);
  const [filter, setFilter] = useState('All');

  const handleInput = e => {
    if (e.key !== 'Enter') return;
    const inputValue = e.target.value.trim();
    e.target.value = '';
    if (!inputValue) return;
    const newTodo = { id: generateNextId(), content: inputValue, completed: false };
    setTodos(todos => [newTodo, ...todos]);
  };

  const handleEditInputKeyUp = e => {
    if (e.key !== 'Enter') return;
    const inputValue = e.target.value.trim();
    if (!inputValue) return;
    setTodos(todos =>
      todos.map(todo =>
        todo.id === +e.target.closest('li').dataset.id ? { ...todo, content: inputValue } : todo
      )
    );
    e.target.style.display = 'none';
  };

  const handleDoubleClick = e => {
    if(e.target.matches('.view > label')) {
      const $editInput = e.target.closest('li').querySelector('.edit');
      $editInput.style.display = 'block';
      $editInput.focus();
    }
  }

  const handleCheckChange = e => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === +e.target.closest('li').id ? { ...todo, completed: e.target.checked } : todo
      )
    );
  };

  const handleToggleAllCheck = e => {
    setTodos(todos => todos.map(todo => ({ ...todo, completed: e.target.checked })));
  };

  const handleDeleteClick = e => {
    setTodos(todos => todos.filter(todo => todo.id !== +e.target.closest('li').id));
  };

  const handleFilterClick = e => {
    if (!e.target.matches('.filter')) return;
    setFilter(e.target.closest('li').dataset.id);
  };

  return (
    <>
      <div className='todo-container'>
        <TodoInput onInput={handleInput} />
        <ToggleAll handlers={{handleToggleAllCheck}}/>
        <TodoList
          todos={todos}
          filter={filter}
          handlers={{ handleCheckChange, handleDeleteClick, handleEditInputKeyUp, handleDoubleClick }}
        />
        <Footer todos={todos} filter={filter} handlers={{ handleFilterClick }} />
      </div>
    </>
  );
}
