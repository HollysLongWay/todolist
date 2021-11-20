import './todo-item.scss';

export function TodoItem(props) {
  const {handleCheckChange, handleDeleteClick, handleEditInput} = props.handlers;
  return (
    <li
      id={props.todo.id}
      className={props.todo.completed ? 'todo-item completed' : 'todo-item'}
    >
      <div className='view'>
        <input
          className='toggle'
          type='checkbox'
          onChange={handleCheckChange}
          checked={props.todo.completed}
        />
        <label for={props.todo.id + '-edit'}>{props.todo.content}</label>
        <button onClick={handleDeleteClick} className='delete'>
          x
        </button>
      </div>
      {/* <input
        className='edit'
        id={props.todo.id + '-edit'}
        value={props.todo.content}
        onChange={props.onInputEdit} // onchange로 인풋 값을 변경하는 것이 불가능한 상황...
      /> */}
    </li>
  );
}
