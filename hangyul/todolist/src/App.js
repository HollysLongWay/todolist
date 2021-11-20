import { TodoContainer } from './components/TodoContainer';
import './app.scss';

function App() {
  return (
    <>
      <h1 className='todo-title'>todos</h1>
      <TodoContainer name='hangyul'></TodoContainer>
    </>
  );
}

export default App;
