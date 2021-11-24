import './todo-item.scss';

export function TodoItem(props) {
  const { handleCheckChange, handleDeleteClick, handleEditInputKeyUp, handleDoubleClick } =
    props.handlers;
  return (
    <li data-id={props.todo.id} className={props.todo.completed ? 'todo-item completed' : 'todo-item'}>
      <div className='view' onDoubleClick={handleDoubleClick}>
        <input
          className='toggle'
          type='checkbox'
          onChange={handleCheckChange}
          defaultChecked={props.todo.completed}
        />
        <label htmlFor={props.todo.id}>{props.todo.content}</label>
        <button onClick={handleDeleteClick} className='delete'>
          x
        </button>
      </div>
      <input
        className='edit'
        id={props.todo.id}
        defaultValue={props.todo.content}
        onKeyUp={handleEditInputKeyUp} // onchange로 인풋 값을 변경하는 것이 불가능한 상황...
      />
    </li>
  );
}
