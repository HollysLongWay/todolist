import './todo-input.scss';

export function TodoInput(props) {
  return (
    <input
      type='text'
      className='todo-input'
      onKeyUp={props.onInput}
      placeholder='What needs to be done?'
    />
  );
}
