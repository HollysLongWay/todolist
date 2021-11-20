import { TodoItem } from './TodoItem';
import './todo-list.scss';

export function TodoList(props) {
  return (
    <ul className='todo-list'>
      {props.todos
        .filter(({ completed }) =>
          props.filter === 'All' ? true : props.filter === 'Completed' ? completed : !completed
        )
        .map((todo, index) => (
          <TodoItem key={index + todo.content} handlers={props.handlers} todo={todo}></TodoItem>
        ))}
    </ul>
  );
}
