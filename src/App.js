import logo from './logo.svg';
import './App.scss';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todos">
      <header className="todos-header">
        <h1>Todos</h1>
      </header>
      <main>
        <TodoInput />
        <TodoList />
      </main>
    </div>
  );
}

export default App;
